<script lang="ts">
  import type { PageProps } from './$types';
  import { page } from '$app/state';
  import PubVideo from '$lib/components/PubVideo.svelte';
  import Bibtex from '$lib/components/Bibtex.svelte';

  let { data }: PageProps = $props();

  let slug = page.params.slug;
  let date = new Date(data.date);
  let html_available = (data.venue?.html === true || date >= new Date(data.venue?.html));
</script>

<div>
  <h1 class="text-2xl font-bold leading-9 text-stone-800 mb-1 mt-4">{data.title}</h1>

  <p class="text-md text-stone-600 font-semibold mb-6">
    {#if data.preprint}
      {data.preprint.server}: {data.preprint.id}
    {:else}
      {data.venue.full}, {date.getFullYear()}
    {/if}
    {#if data.award}
      <span class="ml-2 py-1 px-2 text-xs bg-lime-200/75 border-1 border-lime-700/25 text-lime-700 rounded-md">
        <i class="fas fa-award mr-1"></i> {data.award}
      </span>
    {/if}
    {#if data.doi}
      <a href={`https://doi.org/${data.doi}`} class="ml-2 py-1 px-2 text-xs bg-stone-200 border-1 border-stone-400/50 text-stone-500 rounded-md hover:text-stone-600 hover:border-stone-400/75 hover:shadow-sm">
        DOI
      </a>
    {/if}
  </p>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6">
    {#each data.authors as author}
      <a href={author.url} class="flex items-center gap-2 group">
        {#if author.key}
          <img src={`/imgs/people/${author.key}.jpg`} alt={author.name} class="w-10 h-10 rounded-full shadow-md grayscale group-hover:grayscale-0 transition-all duration-300" />
        {:else}
          <div class="w-10 h-10 md:hidden"></div>
        {/if}
        <div class="flex flex-col">
          <p class={`text-md text-stone-600 ${author.url ? 'group-hover:text-amber-700 group-hover:underline' : ''}`}>{author.name}</p>
          <p class="text-xs text-stone-400">{author.affiliation || 'MIT CSAIL'}</p>
        </div>
      </a>
    {/each}
  </div>

  <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
    {#if html_available && !data.venue.paywall && !data.paywall}
      <a href={`https://doi.org/${data.doi}`} class="flex bg-amber-100/75 px-4 py-1.5 rounded-md border-1 border-amber-200 hover:border-amber-300 hover:shadow-sm flex items-center gap-2 text-sm text-stone-600 hover:text-amber-700">
        <i class="fas fa-file-lines mr-1"></i> 
        HTML Paper
      </a>
    {/if}
    <a href={`/pubs/${slug}.pdf`} data-sveltekit-reload class="flex bg-amber-100/75 px-4 py-1.5 rounded-md border-1 border-amber-200 hover:border-amber-300 hover:shadow-sm flex items-center gap-2 text-sm text-stone-600 hover:text-amber-700">
      <i class="fas fa-file-pdf mr-1"></i> 
      <p class="flex flex-col">
        <span>PDF Paper</span>
        {#if html_available && (data.venue.paywall || data.paywall)}
          <span class="text-[0.6rem] uppercase text-stone-400">(Open Access)</span>
        {/if}
      </p>
    </a>
    {#if html_available && (data.venue.paywall || data.paywall)}
      <a href={`https://doi.org/${data.doi}`} class="flex bg-amber-100/75 px-4 py-1.5 rounded-md border-1 border-amber-200 hover:border-amber-300 hover:shadow-sm flex items-center gap-2 text-sm text-stone-600 hover:text-amber-700">
        <i class="fas fa-file-lines mr-1"></i> 
        <p class="flex flex-col">
          <span>HTML Paper</span>
          <span class="text-[0.6rem] uppercase text-stone-400">(Paywalled)</span>
        </p>
      </a>
    {/if}
    {#each data.materials as material}  
      <a href={material.url} class="bg-amber-100/75 px-4 py-1.5 rounded-md border-1 border-amber-200 hover:border-amber-300 hover:shadow-sm flex items-center gap-2 text-sm text-stone-600 hover:text-amber-700">
        <i class={`fas fa-${material.type} mr-1`}></i> {material.name}
      </a>
    {/each}
  </div>

  <div class="md:flex gap-10">
    <div class={`w-full ${data.teaser || data.videos ? 'md:w-1/2' : 'md:w-3/5'}`}>
      <h2 class="text-lg font-bold text-stone-700">Abstract</h2>
    
      <div class="prose prose-stone-700 mb-4">
        <data.content />
      </div>

      {#if data.teaser && data.videos}
        <Bibtex venue={data.venue} pub={data} slug={slug} />
      {/if}
    </div>
    <div class={`w-full mt-2 ${data.teaser || data.videos ? 'md:w-1/2' : 'md:w-2/5'} md:mt-0`}>
      {#if data.teaser}
        <div class="w-full p-2 border-1 border-stone-100 shadow-md rounded-md">
          <img src={`/imgs/teasers/${slug}.png`} alt={data.title} />
          <p class="text-sm text-stone-400 mt-2">
            {data.teaser}
          </p>
        </div>
      {/if}

      {#if data.videos}
        {#if data.videos.figure}
          <h2 class="text-md font-bold text-stone-700 mt-4">Demo</h2>
          <PubVideo video={data.videos.figure} />
        {/if}
        {#if data.videos.talk}
          <h2 class="text-md font-bold text-stone-700 mt-4">Talk</h2>
          <PubVideo video={data.videos.talk} />
        {/if}
      {/if}

      {#if !data.teaser && !data.videos}
        <Bibtex venue={data.venue} pub={data} slug={slug} />
      {/if}
    </div>
  </div>

</div>