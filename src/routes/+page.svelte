<script lang="ts">
	import { Hero } from '$lib';
</script>

<main class="page-wrapper">
	<Hero />
</main>

<style>
	.page-wrapper {
		display: flex;
		flex-direction: column;
		max-width: 1600px;
		margin: 0 auto;
		height: 100vh;
		padding: 70px 70px 0 70px;
	}

	@media (max-width: 1500px) {
		.page-wrapper {
			padding: 50px 50px 0 50px;
		}
	}
</style>
