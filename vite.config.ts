import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import wasmPack from 'vite-plugin-wasm-pack';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		wasmPack('./rust'),
 
		purgeCss({
			safelist: {
				// any selectors that begin with "hljs-" will not be purged
				greedy: [/^hljs-/],
			},
		}),
	],
});