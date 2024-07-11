<script lang="ts">
	import { shuffleLetters } from '../../utils/shuffleLetters';
	import { inViewport } from '../../utils/inViewport';
	export let isDocLoaded = false;

	$: isInViewport = false;
</script>

<section
	class="wrapper"
	class:show={isDocLoaded && isInViewport}
	use:inViewport={() => {
		isInViewport = true;
	}}
>
	<h2 class="title">
		Technical talks <img class="title-icon" src="images/benefits/branch-icon.svg" alt="" />,
		<br />
		hands-on workshops
		<img class="title-icon" src="images/benefits/laptop-icon.svg" alt="" />, and breakout
		discussions about Git
		<img class="title-icon" src="images/benefits/git-icon.svg" alt="" />.
	</h2>

	<p class="details">
		Join us in Berlin for the next edition of Git Merge, a conference focused on bringing together
		in person the fine folks who work on Git and many others working on tools in the Git ecosystem.
		Hosted around the world since 2013, Git Merge returns to Berlin <img
			class="details-icon"
			src="images/benefits/berlin-flag.webp"
			alt=""
		/>
		for <mark>two days</mark> of <mark>all things Git.</mark>
	</p>
</section>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		opacity: 0;
		animation-delay: 0.2s;
	}

	.title {
		--font-size: 72px;
		font-size: var(--font-size);
		font-weight: 400;
		line-height: 110%;
		max-width: 1200px;
		margin-bottom: 40px;
	}

	.title-icon {
		transform: translateY(10%);
		margin: -10px -10px;
		height: var(--font-size);
	}

	.details {
		--font-size: 32px;
		font-size: var(--font-size);
		line-height: 120%;
		max-width: 860px;
		text-wrap: balance;
	}

	.details mark {
		background: none;
		color: var(--color-white);
		outline: 2px solid #3ee0d6;
		outline-offset: 4px;
	}

	.details mark:nth-child(2) {
		outline-color: #f7c548;
	}

	.details-icon {
		height: var(--font-size);
		transform: translateY(20%);
	}

	@media (max-width: 1040px) {
		.title {
			--font-size: 58px;
		}
	}

	@media (max-width: 800px) {
		.title {
			--font-size: 46px;
		}
	}

	@media (max-width: 600px) {
		.title {
			--font-size: 38px;
		}

		.details {
			--font-size: 24px;
			line-height: 130%;
		}

		.title-icon {
			margin: -5px 0;
		}
	}
</style>
