<script lang="ts">
  import type { PageProps } from './$types';
  import { goto } from '$app/navigation';
  import ShortVenue from '$lib/components/ShortVenue.svelte';
  let { data }: PageProps = $props();
</script>

{#each data.years as year, i}
  <h3 class="text-2xl font-black text-stone-700 mb-4 {i > 0 ? 'mt-10' : ''}">{year}</h3>

  <div class="gap-7 columns-1 md:columns-2 lg:columns-3 xl:columns-4">
    {#each data.pubsByYear[year] as pub}
      <div class="group mb-7 p-3 rounded-lg overflow-hidden shadow-xs hover:shadow-md hover:cursor-pointer transition-all duration-200 border-1 {pub.award ? 'bg-violet-50 border-violet-200 hover:border-violet-300/75' : pub.feature ? 'bg-amber-500/10 border-amber-200 hover:border-amber-300/75' : 'bg-white border-zinc-200/75 hover:border-zinc-300/75'}" role="button" tabindex="0" onclick={() => goto(`/pubs/${pub.slug}`)} onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? goto(`/pubs/${pub.slug}`) : null}>
        {#if pub.thumb !== false}
          <div class="-mx-3 -mt-3 mb-2">
            <img src={`/imgs/thumbs/${pub.slug}.png`} alt={pub.fullTitle} class="w-full h-auto">
          </div>
        {/if}
        <a href={`/pubs/${pub.slug}`} class="block">
          <h4 class="text-md font-bold {pub.award ? 'text-violet-800' : 'text-amber-700'}">
            {#if pub.award}
              <i class="fas fa-award mr-1"></i>
            {:else if pub.feature}
              <span class="text-xs">&#9733;</span>
            {/if}
            <span class="group-hover:underline">{pub.title}</span>
          </h4>
        </a>
        {#if pub.subtitle}
          <p class="text-sm {pub.award ? 'text-violet-600' : 'text-amber-600'} font-semibold">
            {pub.subtitle}
          </p>
        {/if}

        <p class="text-sm text-stone-600 my-2">
          {#each pub.authors as author, i}
              {author.name}{#if author.equal}*{/if}{#if i < pub.authors.length - 1},&nbsp;{/if}
          {/each}
        </p>

        <p class="text-xs text-stone-400 mb-2">
          <ShortVenue pub={pub} />
        </p>

        <p>
          <a href={`/pubs/${pub.slug}.pdf`} data-sveltekit-reload class="text-md text-stone-400 {pub.award ? 'hover:text-violet-800' : 'hover:text-amber-700'} mr-2" aria-label="PDF Paper">
            <i class="far fa-file-pdf"></i> 
          </a>

          {#if pub.video}
            <a href={pub.video_url} class="text-md text-stone-400 {pub.award ? 'hover:text-violet-800' : 'hover:text-amber-700'} mr-2" aria-label="Video">
              <i class="fab fa-youtube"></i> 
            </a>
          {/if}

          {#each pub.materials as material}
            <a href={material.url} class="text-md text-stone-400 {pub.award ? 'hover:text-violet-800' : 'hover:text-amber-700'} mr-2" aria-label={material.name}>
              <i class="fas fa-{material.type}"></i> 
            </a>
          {/each}
        </p>

      </div>
    {/each}
  </div>
{/each}