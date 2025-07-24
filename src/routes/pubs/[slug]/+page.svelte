<script lang="ts">
  import type { PageProps } from './$types';
  import { page } from '$app/state';
  import ArticlePub from '$lib/components/ArticlePub.svelte';
  import StubPub from '$lib/components/StubPub.svelte';
  import { isMemberAuthor } from '$lib/index.svelte';

  let { data }: PageProps = $props();

  const slug = $derived(page.params.slug);
  let date = new Date(data.date);
  let html_available = (data.venue?.html === true || date >= new Date(data.venue?.html));  
  let displayYear = data.venueKey === 'vis-full' ? data.year + 1 : data.year;
</script>

<svelte:head>
  <meta name="citation_title" content={data.fullTitle}>
  <meta name="citation_pdf_url" content={`https://vis.csail.mit.edu/pubs/${slug}.pdf`}>
  {#if data.doi}
    <meta name="citation_doi" content={data.doi}>
  {/if}
  {#if data.venue}
    {#if data.venue.bibtex.venue === 'journal'}
      <meta name="citation_journal_title" content={data.venue.full}>
    {:else if data.venue.bibtex.venue === 'institute'}
      <meta name="citation_technical_report_institution" content={data.venue.full}>
    {:else}
      <meta name="citation_inbook_title" content={data.venue.full}>
    {/if}
  {/if}

  {#each data.authors as author}
    <meta name="citation_author" content={author.name}>
    <meta name="citation_author_institution" content={author.affiliation}>
  {/each}
</svelte:head>

<h1 class="text-2xl font-bold leading-9 text-stone-800 mb-1 mt-4">{data.fullTitle}</h1>

<p class="text-md text-stone-600 font-semibold mb-6">
  {#if data.preprint}
    {data.preprint.server}: {data.preprint.id}
  {:else}
    {data.venue.full}, {displayYear}
  {/if}
  {#if data.award}
    <span class="ml-2 py-1 px-2 text-xs bg-violet-50 border-1 border-violet-200 text-violet-800 rounded-md">
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
      {#if isMemberAuthor(author)}
        <img src={`/imgs/people/${author.key}.jpg`} alt={author.name} class="w-10 h-10 rounded-full shadow-md grayscale group-hover:grayscale-0 transition-all duration-300" />
      {:else}
        <div class="w-10 h-10 md:hidden"></div>
      {/if}
      <div class="flex flex-col">
        <p class={`text-md text-stone-600 ${author.url ? 'group-hover:text-amber-700 group-hover:underline' : ''}`}>{author.name} {#if author.equal}* {/if}</p>
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

{#if data.stub !== false}
  <StubPub data={data} displayYear={displayYear} slug={slug} />
{:else}
  <ArticlePub data={data} displayYear={displayYear} slug={slug} />
{/if}