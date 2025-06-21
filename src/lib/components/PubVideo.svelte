<script lang="ts">
  let { video } = $props();
  console.log(video);
</script>

<div class="w-full aspect-video relative mb-4">
  {#if video.vimeo}
    <iframe class="absolute top-0 left-0 w-full h-full shadow-md rounded-md" src="https://player.vimeo.com/video/{video.vimeo}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  {:else}
    <iframe class="absolute top-0 left-0 w-full h-full shadow-md rounded-md" src="https://www.youtube.com/embed/{video}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  {/if}
</div>