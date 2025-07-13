<script lang="ts">
  let { pub } = $props();
</script>

{pub.venue?.short} {(pub.venueKey === 'vis-full') ? pub.year - 1 : pub.year}