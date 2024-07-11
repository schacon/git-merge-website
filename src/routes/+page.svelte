<script lang="ts">
	import Hero from '$lib/sections/hero/index.svelte';
	import Benefits from '$lib/sections/benefits/index.svelte';
	import DaysSneakpeak from '$lib/sections/days-sneakpeak/index.svelte';
	import VideoThumbs from '$lib/sections/videos-thumbs/index.svelte';
	import Photos from '$lib/sections/photos/index.svelte';
	import Ticket from '$lib/sections/ticket/index.svelte';
	import Footer from '$lib/sections/footer/index.svelte';
	$: isDocLoaded = false;
</script>

<div class="container">
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
</div>

<style>
	.container {
		background-image: radial-gradient(
			color-mix(in srgb, var(--clr-background) 90%, var(--clr-white)) 2px,
			var(--clr-background) 0
		);
		background-size: 40px 40px;
		background-position: -19px -19px;
	}

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
