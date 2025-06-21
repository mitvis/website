<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="container mx-auto px-10">
	<Header />
	{@render children()}
</div>
