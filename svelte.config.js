import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(
			// { fallback: "spa_router.html"}
		),
		prerender: {
			concurrency: 2,
			crawl: true,
			default: true,
			enabled: true,
			entries: ['*'],
			onError: 'fail'
		},
		browser: {
			hydrate: true,
			router: false
		}
	}
};

export default config;
