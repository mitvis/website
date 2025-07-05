<script lang="ts">
  import type { PageProps } from './$types';
  import ShortVenue from '$lib/components/ShortVenue.svelte';
  import _ from 'lodash';

  let { data }: PageProps = $props();

  const people = Object.entries(data.people).map(([kerberos, person]) => ({
    kerberos,
    ...person,
    firstname: person.name.split(' ')[0],
    lastname: person.name.split(' ')[1]
  })).sort((a, b) => {
    const nameA = a.lastname.toLowerCase();
    const nameB = b.lastname.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  const members = _.shuffle(people.filter((person) => person.alumni !== true));

  const alumni = [
    ...people.filter((person) => person.alumni === true && (person.title.includes('PhD') || person.title.includes('Postdoc') || person.title.includes('Scientist'))),
    ...people.filter((person) => person.alumni === true && !(person.title.includes('PhD') || person.title.includes('Postdoc') || person.title.includes('Scientist'))),
  ]
</script>

<p class="text-xl mb-2 text-stone-700">
  We use visualization as a petri dish to study <strong>intelligence augmentation</strong>: how can computation help amplify our cognition and creativity, while respecting our agency?
</p>

<div class="flex">
  <div class="w-4/5 mr-7">
    <h2 class="text-xl font-black uppercase text-amber-600 mb-2 mt-4">Research Themes</h2>

    {#each data.themes as theme}
      <div class="flex gap-4 bg-amber-500/10 border-1 border-amber-200 rounded-lg mb-7 p-4">

        <div class="w-1/2">
          <h2 class="text-lg font-black text-amber-600">{theme.name}</h2>
          <p class="prose prose-sm prose-stone-700 prose-a:font-normal prose-a:italic prose-a:no-underline prose-a:hover:underline mb-2">{@html theme.desc}</p>

          <a href={theme.video_url}>
            <video muted loop playsinline class="w-full h-auto rounded-md border-1 border-zinc-200">
              <source src={`/videos/themes/${theme.key}.mp4`} type="video/mp4">
            </video>
          </a>
        </div>

        <div class="w-1/2 my-1">
          <h3 class="text-sm font-black text-stone-500 mb-2">Latest & Greatest</h3>

          <div class="h-9/10 relative">
            <div class="absolute inset-0 h-full overflow-y-auto">
              {#each theme.pubs as pub}
                <a href={pub.slug} class="flex flex-col gap-1 group bg-white rounded-md border-1 border-transparent shadow-sm hover:border-amber-300 p-2 mb-2">
                  <p class="text-sm text-amber-600 group-hover:text-amber-500 font-semibold">
                    {pub.title}
                  </p>

                  <p class="text-xs text-stone-600">
                    {#each pub.authors as author, i}
                        {author.name}{#if i < pub.authors.length - 1},&nbsp;{/if}
                    {/each}
                  </p>

                  <p class="text-xs text-stone-400">
                    <ShortVenue pub={pub} />
                  </p>
                </a>
              {/each}
            </div>

            <div class="absolute inset-0 bg-gradient-to-b from-transparent from-90% to-amber-500/10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="w-1/5">
    <h2 class="text-xl font-black uppercase text-violet-700 mb-2 mt-4">News</h2>

    <div class="h-[225px] relative">
      <div class="absolute inset-0 h-[225px] overflow-y-auto">
        {#each data.news as item}
          <div class="item bg-violet-50 border-1 border-violet-100 rounded-lg p-2 mb-4">
            <p class="text-xs text-zinc-400 italic mb-1">{item.date}</p>
            <p class="prose prose-sm prose-zinc-600 prose-a:text-violet-800 prose-a:no-underline prose-a:font-bold prose-a:hover:text-violet-400">{@html item.desc}</p>
          </div>
        {/each}
      </div>

      <div class="absolute inset-0 bg-gradient-to-b from-transparent from-90% to-white pointer-events-none"></div>
    </div>

    <div class="sticky top-17">
      <h2 class="text-xl font-black uppercase text-lime-600 mb-2 mt-4">People</h2>

    <div class="grid grid-cols-3 gap-0.5 w-full">
      {#each members as person}
        <a href={person.url} class="group relative">
          <img src={`/imgs/people/${person.kerberos}.jpg`} alt={person.name} class="rounded-xl opacity-80 group-hover:opacity-100 group-hover:shadow-sm" />
          <p class="absolute left-1 bottom-0.5 xl:bottom-1 text-xs xl:text-base leading-none xl:leading-[0.9] font-black text-white group-hover:text-lime-300 text-shadow-lg/50 group-hover:text-shadow-lg/100">
            {person.firstname}
            <span class="hidden group-hover:inline text-[0.6rem] font-normal"><br>{person.title}</span>
          </p>
        </a>
      {/each}
    </div>

    <h3 class="text-sm font-bold text-lime-600 mb-2 mt-4">Alumni</h3>

    <div class="h-[200px] relative">
      <div class="absolute inset-0 h-[200px] overflow-y-auto">
        {#each alumni as person}
          <a href={person.url} class="flex items-center mb-2 group bg-lime-50 border-1 border-lime-200 hover:border-lime-300 rounded-xl hover:shadow-sm px-2 py-1">
            <img src={`/imgs/people/${person.kerberos}.jpg`} alt={person.name} 
              class="w-1/6 rounded-xl object-scale-down mr-2 opacity-80 group-hover:opacity-100" />

            <div>
              <p class="font-medium text-sm text-lime-700 group-hover:underline">{person.name}</p>
              <p class="text-xs text-csail-dark-grey">{person.title} {#if person.next} <br> &rdca; {person.next}{/if}</p>
            </div>
          </a>
        {/each}
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent from-75% to-white pointer-events-none"></div>
      </div>

      <p class="text-sm font-serif font-bold text-lime-600 mb-2 mt-4">Hello from Cambridge, MA!</p>
    </div>
  </div>
</div>