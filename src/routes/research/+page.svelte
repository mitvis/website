<script lang="ts">
  import _ from 'lodash';
  import FlexSearch from 'flexsearch';
  import type { PageProps } from './$types';
  import { goto } from '$app/navigation';
  import ShortVenue from '$lib/components/ShortVenue.svelte';

  let { data }: PageProps = $props();

  const index = new FlexSearch.Document({
    index: ['title', 'abstract', 'authors', 'venue'],
    tokenize: 'forward'
  });

  $effect(() => {
    for (const pub of pubs) {
      index.add({
        id: pub.slug,
        title: pub.title,
        abstract: pub.abstract,
        authors: pub.authors.map((author: any) => author.name).join(' '),
        venue: pub.venue?.full || pub.venueKey,
      });
    }
  });

  let query = $state('');
  let filters = $state({
    themes: [] as string[], 
    tags: [] as string[] 
  });

  let pubs = $derived.by(() => {
    let pubs = data.pubs;
    if (query) {
      const results = index.search(query);
      const resultSlugs = [...new Set(results.map(r => r.result).flat())];
      pubs = pubs.filter(pub => resultSlugs.includes(pub.slug));
    }

    if (filters.themes.length) pubs = pubs.filter(pub => filters.themes.every(theme => pub.themes?.includes(theme)));
    if (filters.tags.length) pubs = pubs.filter(pub => filters.tags.every(tag => pub.tags?.includes(tag)));

    // Collapse results into single masonry grid
    if (query || filters.themes.length || filters.tags.length) {
      return pubs.map(p => ({...p, displayYear: ''}));
    }

    return pubs;
  });

  let pubsByYear = $derived(_.groupBy(pubs, pub => pub.displayYear));
  let years = $derived(_.keys(pubsByYear).sort((a, b) => +b - +a));

  let counts = $derived.by(() => {
    const counts: Record<string, number> = {};

    for (const theme of data.themes) counts[theme.key] = 0;
    for (const tag of data.tags) counts[tag] = 0;
    
    for (const pub of pubs) {
      for (const theme of pub.themes || []) counts[theme]++;
      for (const tag of pub.tags || []) counts[tag]++;
    }

    return counts;
  });

  function toggleFilter(type: 'themes' | 'tags', key: string) {
    if (filters[type].includes(key)) {
      filters[type] = filters[type].filter(k => k !== key);
    } else {
      filters[type].push(key);
    }
  }
</script>

<div class="flex gap-2 border-b border-stone-200 pb-3 -mb-3">
  <div class="w-1/3 pr-5">
    <h3 class="text-2xl font-black text-stone-700">Our Work</h3>

    <input type="search" bind:value={query} 
          placeholder="Search title, abstract, or authors..."       
          class="my-2 block text-xs font-sans w-full rounded-md border-gray-300 shadow-xs focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50" />

    {#if query || filters.themes.length || filters.tags.length}
      <p class="text-xs text-stone-700 italic">
        Showing {pubs.length} of {data.pubs.length} items
        <button onclick={() => {
          query = '';
          filters.themes = [];
          filters.tags = [];
        }} class="text-xs text-stone-400 cursor-pointer">(Clear)</button>
      </p>
    {/if}
  </div>

  <div class="w-1/3">
    <h4 class="text-sm font-bold text-stone-700 mb-1">Themes</h4>

    {#each data.themes as theme}
      <button onclick={() => toggleFilter('themes', theme.key)} 
        class="block w-auto text-xs text-stone-700 cursor-pointer rounded-xl border-1 {filters.themes.includes(theme.key) ? 'bg-lime-100 border-lime-600/50' : 'bg-white border-stone-200'} hover:bg-stone-200/75 hover:border-stone-300 px-2 py-1 mr-2 mb-1 transition-all duration-200">
        {theme.name} 
        <span class="text-stone-400">({counts[theme.key]})</span>
      </button>
    {/each}
  </div>

  <div class="w-1/3">
    <h4 class="text-sm font-bold text-stone-700 mb-1">Tags</h4>

    {#each data.tags as tag}
      <button onclick={() => toggleFilter('tags', tag)} 
        class="inline-block text-xs text-stone-700 capitalize cursor-pointer rounded-xl border-1 {filters.tags.includes(tag) ? 'bg-lime-100 border-lime-600/50' : 'bg-white border-stone-200'} hover:bg-stone-200/75 hover:border-stone-300 px-2 py-1 mr-2 mb-1 transition-all duration-200">
        {tag}
        <span class="text-stone-400">({counts[tag]})</span>
      </button>
    {/each}
  </div>
</div>

{#each years as year, i}
  <h3 class="text-xl font-black text-stone-700 mb-4 mt-10">{year}</h3>

  <div class="gap-7 columns-1 md:columns-2 lg:columns-3 xl:columns-4">
    {#each pubsByYear[year] as pub}
      <div class="group mb-7 p-3 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:cursor-pointer transition-all duration-200 border-1 {pub.award ? 'bg-violet-50 border-violet-200 hover:bg-violet-100 hover:border-violet-300' : pub.feature ? 'bg-amber-500/10 border-amber-200 hover:bg-amber-400/18 hover:border-amber-300' : 'bg-white border-stone-200/50 hover:bg-stone-100/75 hover:border-stone-300'}" role="button" tabindex="0" onclick={() => goto(`/pubs/${pub.slug}`)} onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? goto(`/pubs/${pub.slug}`) : null}>
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

        <div class="hidden" bind:textContent={pub.abstract} contenteditable="true">
          {#if pub.stub !== false}
            <pub.content />
          {/if}
        </div>

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