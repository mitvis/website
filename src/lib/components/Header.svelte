<script>
  import { page } from '$app/state';
  import { onMount } from 'svelte';
  import Logo from './logos/mitvis.svelte';
  
  let isScrolled = false;
  
  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 5;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div id="header" class="sticky top-0 bg-white border-b-1 border-stone-300 pb-2 mb-2 z-10 flex justify-between items-center transition-all duration-300">
  <a href="/" id="wordmark" class="flex items-center gap-2">
    <div id="logo" class="hover:opacity-80 transition-all duration-300 {isScrolled ? '-mt-1 -mb-2 mr-2' : '-mt-5 -mb-5 mr-3'}">
      <Logo size={isScrolled ? 45 : 75} />
    </div>

    <h1 class="font-black mt-3 hover:text-amber-700 transition-all duration-300 {isScrolled ? 'text-xl' : 'text-3xl'}">
      {#if page.url.pathname === '/'}
        Hi, we're the MIT Visualization Group!
      {:else}
        MIT Visualization Group
      {/if}
    </h1>
  </a>

  <nav class="text-zinc-700 transition-all duration-300 {isScrolled ? 'mt-2' : 'mt-5'}">
    <a href="/" class={page.url.pathname === '/' ? 'font-bold underline underline-offset-4 decoration-amber-500' : 'hover:text-zinc-400'}>Home</a>
    &middot;
    <a href="/pubs" class={page.url.pathname.includes('/pubs') ? 'font-bold underline underline-offset-4 decoration-amber-500' : 'hover:text-zinc-400'}>Our Work</a>
  </nav>
</div>