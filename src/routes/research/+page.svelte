<script lang="ts">
  import type { PageProps } from './$types';
  import { goto } from '$app/navigation';
  import ShortVenue from '$lib/components/ShortVenue.svelte';
  let { data }: PageProps = $props();
</script>

<div class="flex">
  <div class="w-3/4 mr-7">
    {#each data.years as year, i}
      <h3 class="text-2xl font-black text-stone-700 mb-2 {i > 0 ? 'mt-10' : ''}">{year}</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {#each data.pubsByYear[year] as pub}
          <div class="group p-3 rounded-lg overflow-hidden shadow-xs hover:shadow-md hover:cursor-pointer transition-all duration-200 border-1 {pub.award ? 'border-violet-200 bg-violet-50' : pub.feature ? 'border-amber-200 bg-amber-500/10' : 'border-zinc-200/75 bg-white'}" role="button" tabindex="0" onclick={() => goto(`/pubs/${pub.slug}`)} onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? goto(`/pubs/${pub.slug}`) : null}>
            <div class="-mx-3 -mt-3 mb-2">
              <img src={`/imgs/thumbs/${pub.slug}.png`} alt={pub.fullTitle} class="w-full h-auto">
            </div>
            <h4 class="text-sm font-bold {pub.award ? 'text-violet-800' : 'text-amber-600'}">
              {#if pub.award}
                <i class="fas fa-award mr-1"></i>
              {:else if pub.feature}
                <span class="text-xs">&#9733;</span>
              {/if}
              <span class="group-hover:underline">{pub.title}</span>
            </h4>
            {#if pub.subtitle}
              <p class="text-sm text-stone-600 font-semibold">
                {pub.subtitle}
              </p>
            {/if}

            <p class="text-sm text-stone-600 my-2">
              {#each pub.authors as author, i}
                  {author.name}{#if i < pub.authors.length - 1},&nbsp;{/if}
              {/each}
            </p>

            <p class="text-xs text-stone-400">
              <ShortVenue pub={pub} />
            </p>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>