import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path'; // Needed for alias paths

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$utils: path.resolve('./src/utils'),
			$lib: path.resolve('./src/lib')
		}
	}
};

export default config;
