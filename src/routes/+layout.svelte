<script lang="ts">
	import './layout.css';
	import favicon from '/static/assets/tasaed.svg';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
	<SiteHeader />
	<main class="pt-24">{@render children()}</main>
	<SiteFooter />
</div>
