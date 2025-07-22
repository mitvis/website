<script>
  import { page } from '$app/state';
  import { onMount } from 'svelte';
  import Logo from './logos/mitvis.svelte';
  
  let isScrolled = false;
  
  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div id="header" class="sticky h-20 md:h-16 tail top-0 bg-white border-b-1 border-stone-300 pb-2 mb-4 z-10 flex justify-between items-center transition-all duration-300">
  <a href="/" id="wordmark" class="flex items-center gap-2">
    <div id="logo" class="hover:opacity-80 transition-all duration-300 {isScrolled ? '-mt-1 -mb-2 mr-2' : '-mt-5 -mb-5 mr-3'}">
      <Logo size={isScrolled ? 45 : 75} />
    </div>

    <h1 class="font-black text-zinc-800 mt-3 hover:text-amber-700 transition-all duration-300 {isScrolled ? 'text-xl' : 'text-xl md:text-3xl'}">
      {#if page.url.pathname === '/'}
        <span class="hidden md:inline">Hi, we're the&nbsp;</span>MIT Visualization Group<span class="hidden md:inline">!</span>
      {:else}
        MIT Visualization Group
      {/if}
    </h1>
  </a>

  <nav class="w-1/10 md:w-auto text-zinc-700 transition-all duration-300 {isScrolled ? 'md:mt-3' : 'md:mt-5'}">
    <a href="/" class={page.url.pathname === '/' ? 'font-bold underline underline-offset-4 decoration-amber-500' : 'hover:text-zinc-400'}>Home</a>
    <span class="hidden md:inline">&middot;</span>
    <a href="/research" class={page.url.pathname.includes('/pubs') || page.url.pathname.includes('/research') ? 'font-bold underline underline-offset-4 decoration-amber-500' : 'hover:text-zinc-400'}>
      <span class="hidden md:inline">Our&nbsp;</span>Work
    </a>
  </nav>
</div>