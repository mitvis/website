import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import remarkFootnotes from 'remark-footnotes';
import remarkMath from 'remark-math';
import { remarkTableOfContents } from 'remark-table-of-contents';
import rehypeKatex from 'rehype-katex-svelte';
import rehypeSlug from 'rehype-slug';

const config = {
	preprocess: [
		vitePreprocess(), 
		mdsvex({ 
			extensions: ['.md'], 
			remarkPlugins: [remarkFootnotes, remarkMath, remarkTableOfContents] ,
			rehypePlugins: [rehypeKatex, rehypeSlug]
		})
	],
	kit: { 
		adapter: adapter(), 
		prerender: { handleHttpError: 'warn', handleMissingId: 'warn' } 
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
