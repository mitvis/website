<script lang="ts">  
  import { page } from '$app/state';
  import { seo, siteName } from '$lib/index.svelte';

  const slug = $derived(page.params.slug);
  const pathname = $derived(page.url.pathname);
  const thumb = $derived(page.data?.thumb);
</script>

<title>{seo.title}</title>
<meta property="og:title" content={seo.title} />
<meta name="twitter:title" content={seo.title} />

<meta property="og:site_name" content="{siteName}" />
<meta name="twitter:site" content="@mitvis" />
<meta property="og:locale" content="en_US" />

<meta name="description" content={seo.desc} />
<meta property="og:description" content={seo.desc} />
<meta name="twitter:description" content={seo.desc} />

<meta property="og:url" content={`https://vis.csail.mit.edu${pathname}`} />

{#if pathname.includes('pubs') && slug && thumb !== false}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={`https://vis.csail.mit.edu/imgs/thumbs/${slug}.png`} />
  <meta property="og:image" content={`https://vis.csail.mit.edu/imgs/thumbs/${slug}.png`} />
  <meta property="og:image:width" content="600" />
  <meta property="og:image:height" content="315" />
{:else}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:image" content="https://vis.csail.mit.edu/imgs/logo.png" />
  <meta property="og:image" content="https://vis.csail.mit.edu/imgs/logo.png" />
  <meta property="og:type" content="website" />
  <meta property="og:image:width" content="1575" />
  <meta property="og:image:height" content="1575" />
{/if}