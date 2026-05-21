<script lang="ts">
  import { onMount } from 'svelte';
  import _ from 'lodash';
  import FlexSearch from 'flexsearch';
  import {Masonry} from 'svelte-bricks';
  import Youtube from 'svelte-youtube-embed';
  
  import type { PageProps } from './$types';
  import { goto } from '$app/navigation';

  let { data }: PageProps = $props();

  const index = new FlexSearch.Document({
    index: ['title', 'abstract', 'authors', 'venue'],
    tokenize: 'forward'
  });

  let query = $state('');
  let filters = $state({
    themes: [] as string[], 
    tags: [] as string[] 
  });

  let pubs = $derived.by(() => {
    let pubs = data.work;
    if (query) {
      const results = index.search(query);
      const resultSlugs = new Set(results.map(r => r.result).flat());
      pubs = pubs.filter(pub => resultSlugs.has(pub.slug));
    }

    if (filters.themes.length) pubs = pubs.filter(pub => filters.themes.every(theme => pub.themes?.includes(theme)));
    if (filters.tags.length) pubs = pubs.filter(pub => filters.tags.every(tag => pub.tags?.includes(tag)));

    return pubs;
  });

  // If searching/filtering, collapse results into single masonry grid
  let pubsByYear = $derived(_.groupBy(pubs, pub => query || filters.themes.length || filters.tags.length ? '' : pub.year));
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

  let timer: NodeJS.Timeout;
  function debounceQuery(q: string) {
    clearTimeout(timer);
    timer = setTimeout(() => (query = q), 150);
  }

  function toggleFilter(type: 'themes' | 'tags', key: string) {
    if (filters[type].includes(key)) {
      filters[type] = filters[type].filter(k => k !== key);
    } else {
      filters[type].push(key);
    }
  }

  function clearFilters() {
    query = '';
    filters.themes = [];
    filters.tags = [];
  }

  function gotoPub(pub: Publication) {
    if (pub.type === 'video') {
      window.location.href = `https://youtu.be/${pub.youtube}`;
    } else {
      goto(`/pubs/${pub.slug}`);
    }
  }

  let initializedFromHash = $state(false);

  function parseHash() { 
    initializedFromHash = true;   
    const hash = window.location.hash.substring(1);
    if (!hash) return;

    const params = new URLSearchParams(hash);
    for (const [key, value] of params.entries()) {
      filters[`${key}s`].push(value);
    }
  }

  function updateHash() {
    if (filters.themes.length || filters.tags.length) {
      window.history.replaceState(null, '', `#${[...filters.themes.map(t => `theme=${t}`), ...filters.tags.map(t => `tag=${t}`)].join('&')}`);
    } else {
      // Remove hash completely
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  $effect(() => {
    if (initializedFromHash) updateHash();
  });

  onMount(() => {
    for (const pub of data.work) {
      index.add({
        id: pub.slug,
        title: pub.title,
        abstract: pub.abstract ?? '',
        authors: pub.authors.map((author: any) => author.name).join(' '),
        venue: pub.venue?.full ?? pub.venueKey ?? pub.venue,
      });
    }

    parseHash();
  });
</script>

<div class="block md:flex gap-2 border-b border-stone-200 pb-3 -mb-3">
  <div class="w-full md:w-1/3 pr-5">
    <h3 class="text-2xl font-black text-stone-700">Our Work</h3>

    <input type="search"
          oninput={(e) => debounceQuery(e.target.value)} 
          placeholder="Search title, abstract, or authors..."       
          class="my-2 block text-xs font-sans w-full rounded-md border-gray-300 shadow-xs focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50" />

    {#if query || filters.themes.length || filters.tags.length}
      <p class="text-xs text-stone-700 italic">
        Showing {pubs.length} of {data.work.length} items
        <button onclick={clearFilters} class="text-xs text-stone-400 cursor-pointer">(Clear)</button>
      </p>
    {/if}
  </div>

  <div class="w-full mt-5 md:mt-0 md:w-2/3 flex flex-row justify-between">
    <div class="w-1/2">
      <h4 class="text-sm font-bold text-stone-700 mb-1">Themes</h4>

      {#each data.themes as theme (theme.key)}
        <button onclick={() => toggleFilter('themes', theme.key)} 
          class="block w-auto text-xs text-stone-700 text-left cursor-pointer rounded-xl border-1 {filters.themes.includes(theme.key) ? 'bg-lime-100 border-lime-600/50' : 'bg-white border-stone-200'} hover:bg-stone-200/75 hover:border-stone-300 px-2 py-1 mr-2 mb-1 transition-all duration-200">
          {theme.name} 
          <span class="text-stone-400">({counts[theme.key]})</span>
        </button>
      {/each}
    </div>

    <div class="w-1/2">
      <h4 class="text-sm font-bold text-stone-700 mb-1">Tags</h4>

      {#each data.tags as tag (tag)}
        <button onclick={() => toggleFilter('tags', tag)} 
          class="inline-block text-xs text-stone-700 text-left capitalize cursor-pointer rounded-xl border-1 {filters.tags.includes(tag) ? 'bg-lime-100 border-lime-600/50' : 'bg-white border-stone-200'} hover:bg-stone-200/75 hover:border-stone-300 px-2 py-1 mr-2 mb-1 transition-all duration-200">
          {tag}
          <span class="text-stone-400">({counts[tag]})</span>
        </button>
      {/each}
    </div>
  </div>
</div>

{#each years as year (year)}
  <h3 class="text-xl font-black text-stone-700 mb-4 mt-10">{year}</h3>

  <Masonry 
    minColWidth={250}
    maxColWidth={300}
    gap={30}
    items={pubsByYear[year]} idKey="slug">

    {#snippet children({ item: pub })}
      <div class="p-3 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:cursor-pointer transition-all duration-200 border-1 {pub.award ? 'bg-violet-50 border-violet-200 hover:bg-violet-100 hover:border-violet-300' : pub.feature ? 'bg-amber-500/10 border-amber-200 hover:bg-amber-400/18 hover:border-amber-300' : 'bg-white border-stone-200/50 hover:bg-stone-100/75 hover:border-stone-300'}">
        {#if pub.thumb !== false || pub.video}
          <div class="-mx-3 -mt-3 mb-2 z-10">
            {#if pub.type === 'video'}
              <Youtube id={pub.youtube} animations={false} --title-color="transparent" --title-shadow-color="transparent" --play-button="none">
                {#snippet play_button()}
                  <div class="w-full h-full flex items-center justify-center">
                    <i class="fas fa-play text-white text-4xl text-shadow-lg"></i>
                  </div>
                {/snippet}
              </Youtube>
            {:else if pub.video && typeof pub.video === 'string'}
              <Youtube id={pub.video} animations={false} --title-color="transparent" --title-shadow-color="transparent" --play-button="none">
                {#snippet play_button()}
                  <div class="w-full h-full flex items-center justify-center">
                    <i class="fas fa-play text-white text-4xl text-shadow-lg"></i>
                  </div>
                {/snippet}

                {#snippet thumbnail()}
                  <img
                    slot="thumbnail"                    
                    src={`/imgs/thumbs/${pub.slug}.png`}
                    alt={pub.fullTitle}
                    loading="lazy"
                    class="w-full h-auto"
                  />
                {/snippet}
              </Youtube>
            {:else}
              <a href={`/pubs/${pub.slug}`}>
                <img src={`/imgs/thumbs/${pub.slug}.png`} 
                alt={pub.fullTitle} loading="lazy" class="w-full h-auto" />
              </a>
            {/if}
          </div>
        {/if}
        <div class="group" role="button" tabindex="0" onclick={() => gotoPub(pub)} onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? gotoPub(pub) : null}>
          <a href={pub.type === 'video' ? `https://youtu.be/${pub.youtube}` : `/pubs/${pub.slug}`} class="block">
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
            {#each pub.authors as author, i (i)}
                {author.name}{#if author.equal}*{/if}{#if i < pub.authors.length - 1},&nbsp;{/if}
            {/each}
          </p>

          <div class="hidden" contenteditable="true">
            {#if pub.stub !== false && pub.type !== 'video'}
              <pub.content />
            {/if}
          </div>

          <p class="text-xs text-stone-400 mb-2">
            {#if pub.type === 'video'}
              {pub.venue}, {new Date(pub.date).toLocaleString('en-US', { month: 'short' })} {pub.year}
            {:else}
              {pub.venue?.short} {pub.year}
            {/if}
          </p>

          {#if pub.type !== 'video'}
            <p>
              <a href={`/pubs/${pub.slug}.pdf`} onclick={(e) => e.stopPropagation()} data-sveltekit-reload class="text-md text-stone-400 {pub.award ? 'hover:text-violet-800' : 'hover:text-amber-700'} mr-2" aria-label="PDF Paper">
                <i class="far fa-file-pdf"></i> 
              </a>

              {#each pub.materials || [] as material, i (i)}
                <a href={material.url} onclick={(e) => e.stopPropagation()} class="text-md text-stone-400 {pub.award ? 'hover:text-violet-800' : 'hover:text-amber-700'} mr-2" aria-label={material.name}>
                  <i class="fas fa-{material.type}"></i> 
                </a>
              {/each}
            </p>
          {/if}
        </div>
      </div>
    {/snippet}
  </Masonry>
{/each}