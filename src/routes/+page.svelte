<script lang="ts">
	import '../styles/main.css';
	import { Hero, Benefits, DaysSneakpeak, VideoThumbs, Photos, Ticket, Footer } from '$lib';

	$: isDocLoaded = false;
</script>

<main class="page-wrapper">
	<Hero
		bind:isDocLoaded
		on:videoLoaded={() => {
			isDocLoaded = true;
		}}
	/>
	<Benefits bind:isDocLoaded />
	<DaysSneakpeak bind:isDocLoaded />
	<VideoThumbs bind:isDocLoaded />
	<Photos bind:isDocLoaded />
	<Ticket bind:isDocLoaded />
	<Footer bind:isDocLoaded />
</main>

<style>
	.page-wrapper {
		--padding: 70px;
		display: flex;
		flex-direction: column;
		max-width: 1600px;
		margin: 0 auto;
		min-height: 100vh;
		padding: var(--padding) var(--padding) 0 var(--padding);
	}

	@media (max-width: 1500px) {
		.page-wrapper {
			--padding: 50px;
		}
	}

	@media (max-width: 800px) {
		.page-wrapper {
			--padding: 40px;
		}
	}

	@media (max-width: 600px) {
		.page-wrapper {
			--padding: 20px;
		}
	}
</style>
