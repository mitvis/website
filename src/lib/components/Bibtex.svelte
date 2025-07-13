<script lang="ts">
  let { venue, pub, slug } = $props();

  let authors = pub.authors.map(author => author.name).join(' AND ');
  let bibtex: HTMLPreElement;
  let bibtex_content = $state('');

  function escape(str: string = '') {
    return str
      .replace('&', '\\&')
      .replace('%', '\\%')
      .replace(/\u00E9/, "\\'{e}")
      .replace(/\u00C7/, '\\c{C}')
      .replace(/\u011F/, '\\u{g}');
  }

  function copyBibtex() {
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
      if (result.state === "granted" || result.state === "prompt") {
        navigator.clipboard.writeText(bibtex.textContent ?? '')
          .then(() => alert('Copied BibTeX citation to clipboard.')) 
          .catch(err => alert(`Unable to copy BibTeX citation to clipboard: ${err}`));
      }
    });
  }

  $effect(() => {
    if (bibtex) {
      bibtex_content = bibtex.textContent ?? '';
      console.log(bibtex_content);
    }
  });
</script>

<h3 class="text-md font-bold text-stone-700">
  Bibtex
  <a onclick={copyBibtex} class="ml-2 hover:text-amber-600 cursor-pointer" title="Copy Bibtex"><i class="far fa-copy" aria-hidden="true"></i></a>
  <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(bibtex_content)}`} download={`${slug}.bib`} class="ml-2 hover:text-amber-600" title="Download Bibtex"><i class="far fa-arrow-alt-circle-down" aria-hidden="true"></i></a>
</h3>

<div class="text-xs bg-stone-100 rounded-md p-2 mb-4 overflow-x-auto">
  <pre bind:this={bibtex}>@{venue.bibtex.type}&lbrace;{pub.year}-{slug}
  title = &lbrace;&lbrace;{escape(pub.title)}&rbrace;&rbrace;,
  author = &lbrace;{escape(authors)}&rbrace;,
  {venue.bibtex.venue} = &lbrace;{escape(venue.full)}&rbrace;,
  year = &lbrace;{pub.year}&rbrace;,
  {#if pub.doi}doi = &lbrace;{pub.doi}&rbrace;,{/if}
  url = &lbrace;https://vis.csail.mit.edu/pubs/{slug}&rbrace;
&rbrace;</pre>
</div>