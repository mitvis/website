<script lang="ts">
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	let { children } = $props();
	let title = 'MIT Visualization Group';
	if (page.data.title) {
		title = `${page.data.title} | ${title}`;
	}
</script>

<svelte:head>
	<title>{title}</title>

	<meta property="og:title" content={title} />
	{#if page.data.seo?.desc}<meta property="og:description" content="{page.data.seo.desc}" />{/if}
	<meta property="og:url" content="https://vis.csail.mit.edu" />
	<meta property="og:image" content="https://vis.csail.mit.edu/imgs/logo.png" />
	<meta property="og:type" content="website" />
	<meta property="og:image:width" content="1575" />
	<meta property="og:image:height" content="1575" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@mitvis" />
	<meta name="twitter:creator" content="@mitvis" />
	<meta name="twitter:title" content="MIT Visualization Group" />
	<meta name="twitter:description" content="MIT Visualization Group" />
	<meta name="twitter:image" content="https://vis.csail.mit.edu/imgs/logo.png" />
</svelte:head>

<div class="container mx-auto px-10">
	<Header />
	{@render children()}
</div>
