import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'svelte-table example'
	}
});

export default app;