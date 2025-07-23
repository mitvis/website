<script lang="ts">
  import PubVideo from '$lib/components/PubVideo.svelte';
  import Bibtex from '$lib/components/Bibtex.svelte';
  import { seo } from '$lib/index.svelte';

  let { data, displayYear, slug } = $props();

  let abstract: string;

  $effect(() => {
    seo.desc = abstract || '';
  });
</script>

<div class="md:flex gap-10">
  <div class={`w-full ${data.teaser || data.videos ? 'md:w-1/2' : 'md:w-3/5'}`}>
    <h2 class="text-lg font-bold text-stone-700">Abstract</h2>
  
    <div class="prose prose-stone-700 mb-4" bind:textContent={abstract} contenteditable="false">
      <data.content />
    </div>

    {#if data.teaser || data.videos}
      <Bibtex pub={data} slug={slug} displayYear={displayYear} />
    {/if}
  </div>
  <div class={`w-full mt-2 ${data.teaser || data.videos ? 'md:w-1/2' : 'md:w-2/5'} md:mt-0`}>
    {#if data.teaser}
      <div class="w-full p-2 border-1 border-stone-100 shadow-md rounded-md">
        <img src={`/imgs/teasers/${slug}.png`} alt={data.fullTitle} />
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
      <Bibtex pub={data} slug={slug} displayYear={displayYear} />
    {/if}
  </div>
</div>