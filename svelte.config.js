import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],
	kit: { 
		adapter: adapter(), 
		prerender: { handleHttpError: 'warn', handleMissingId: 'warn' } 
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
