<script lang="ts">
  let { pub } = $props();

  let displayYear = (pub.venueKey === 'vis-full') ? pub.year - 1 : pub.year;
</script>

{pub.venue?.short} {displayYear}