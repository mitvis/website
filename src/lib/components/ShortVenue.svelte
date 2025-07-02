<script lang="ts">
  let { pub } = $props();

  let pubYear = new Date(pub.date).getFullYear();
  let displayYear = (pub.venueKey === 'vis-full') ? pubYear - 1 : pubYear;
</script>

{pub.venue.short} {displayYear}