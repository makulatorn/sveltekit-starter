<script lang="ts">
	import { Header, Footer } from '$utils';
	import '$lib/styles/style.css';

	export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<h1>Mmyellow!</h1>
<Header />
