<script lang="ts">
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import '../app.css';

	let { children } = $props();
	
</script>

<svelte:head>
	<Seo />
</svelte:head>

<div class="container mx-auto px-4 md:px-10">
	<Header />
	{@render children()}
</div>
