<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<div>
  <h1>{data.metadata.title}</h1>
  <data.content />
</div>