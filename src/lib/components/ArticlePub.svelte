<script lang="ts">
  import { onMount } from 'svelte';
  import PubVideo from '$lib/components/PubVideo.svelte';
  import Bibtex from '$lib/components/Bibtex.svelte';
  import { seo, siteName } from '$lib/index.svelte';
  let { data, displayYear, slug } = $props();

  let abstract: string;

  onMount(() => {
    const el = document.querySelector('p#abstract') || document.querySelector('section#abstract > p');
    seo.desc = el?.textContent || '';
  });
</script>

<div class="md:flex gap-10">
  <div class="w-full md:w-3/4 prose prose-stone-700 prose-headings:mt-6 prose-headings:mb-2 prose-headings:font-bold prose-a:text-amber-700 prose-a:hover:text-amber-600 prose-a:font-normal prose-a:no-underline prose-a:hover:underline prose-blockquote:font-normal prose-blockquote:text-stone-700 prose-code:font-normal prose-code:bg-gray-200 prose-code:p-1 prose-code:rounded-sm">
    <data.content />
  </div>

  <div class="w-full md:w-1/4">
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

    <Bibtex pub={data} slug={slug} displayYear={displayYear} />
  </div>
</div>