<script lang="ts">
	import { DotLottieSvelte, type DotLottie } from '@lottiefiles/dotlottie-svelte';
	import { shuffleLetters } from '../../utils/shuffleLetters';
	import { inViewport } from '../../utils/inViewport';
	import { links } from '../../content-data';
	import { createEventDispatcher } from 'svelte';

	export let isDocLoaded: boolean;
	let videoEl: HTMLVideoElement;
	let dotLottie: DotLottie | null = null;
	$: isInViewport = false;

	const dispatch = createEventDispatcher<{
		videoLoaded: void;
	}>();

	$: if (videoEl) {
		if (videoEl.readyState >= 3) {
			dispatch('videoLoaded');
		}

		videoEl.addEventListener('loadeddata', () => {
			dispatch('videoLoaded');
		});
	}
</script>

<section
	class="wrapper"
	class:show={isDocLoaded && isInViewport}
	use:inViewport={() => {
		isInViewport = true;
		console.log('inViewport');
	}}
>
	<div class="frame">
		<div class="title">
			<span use:shuffleLetters>Git</span>
			<span use:shuffleLetters>Merge</span>
			<span use:shuffleLetters class="title-year">24</span>
		</div>

		<div class="info desktop">
			<p>
				<span use:shuffleLetters={900}>Dates</span>_______________<span use:shuffleLetters
					>September 19—20</span
				>
			</p>
			<p>
				<span use:shuffleLetters={900}>Location</span>____________<span use:shuffleLetters
					>Berlin</span
				>
			</p>
			<p>
				<span use:shuffleLetters={900}>Venue</span>_______________<span use:shuffleLetters>TBD</span
				>
			</p>
		</div>

		<div class="info tablet">
			<p><span use:shuffleLetters>Dates</span>__<span use:shuffleLetters>September 19—20</span></p>
			<p><span use:shuffleLetters>City</span>___<span use:shuffleLetters>Berlin</span></p>
			<p><span use:shuffleLetters>Venue</span>__<span use:shuffleLetters>TBD</span></p>
		</div>

		<div class="footer">
			<a class="cta-button" href={links.tickets} target="_blank"
				><span use:shuffleLetters>Buy</span><span use:shuffleLetters>a</span><span
					use:shuffleLetters>ticket</span
				><span use:shuffleLetters class="cta-button-price">99€</span></a
			>
			<p class="tagline">
				<span use:shuffleLetters>One conference.</span><br /><span use:shuffleLetters
					>All things Git</span
				> <span class="tagline-carret" />
			</p>
		</div>

		<div class="arrows-lottie">
			<DotLottieSvelte
				src="lottie/hero-lines.lottie"
				autoResizeCanvas={true}
				autoplay={true}
				speed={0.8}
				dotLottieRefCallback={(ref) => (dotLottie = ref)}
			/>
		</div>

		<!-- <img class="arrows-lottie" src="images/hero-arrows-tablet.svg" alt="" /> -->

		<!-- svelte-ignore a11y-media-has-caption -->
		<video
			bind:this={videoEl}
			class="back-video"
			src="video/render-1.mp4"
			autoplay
			loop
			controls={false}
			playsinline
			muted
		/>
	</div>
</section>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		margin-bottom: 52px;
		/* initial animation state */
		opacity: 0;
	}

	.frame {
		position: relative;
		background-color: #373737;
		width: 100%;
		height: 100%;
		border-radius: 50px;
		overflow: hidden;
		padding: 52px;
	}

	.back-video {
		pointer-events: none;
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		min-width: calc(100% + 40px);
		height: calc(100% + 40px);
		margin-left: -20px;
		margin-top: -20px;
		object-fit: cover;
		object-position: center;
		mix-blend-mode: lighten;
		filter: blur(25px);
	}

	.arrows-lottie {
		position: absolute;
		z-index: 0;
		bottom: -20px;
		left: 68%;
		width: 520px;
		height: 110%;
	}

	/* TITLE */

	.title {
		position: relative;
		z-index: 1;
		display: flex;
		margin-bottom: 50px;
	}

	.title span {
		font-family: 'Martian Mono';
		font-weight: 700;
		text-transform: uppercase;
		line-height: 1;
		font-size: 124px;
		margin-right: 30px;
	}

	.title span:last-child {
		margin-right: 0;
	}

	.title-year {
		color: #eee3be;
		opacity: 0.5;
	}

	/* INFO */

	.info {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 52px;
	}

	.info p {
		font-family: 'Martian Mono';
		font-weight: 400;
		text-transform: uppercase;
	}

	.info.desktop p {
		font-size: 26px;
	}

	.info.tablet {
		display: none;
	}

	/* FOOTER */

	.footer {
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
		gap: 50px;
	}

	.cta-button {
		display: flex;
		gap: 10px;
		width: fit-content;
		font-family: 'Martian Mono';
		font-size: 26px;
		font-weight: 400;
		color: var(--clr-white);
		background-color: var(--clr-accent);
		text-decoration: none;
		padding: 32px 40px;
		border-radius: 20px;
		letter-spacing: -0.06em;

		transition:
			filter 0.2s,
			padding 0.2s;

		&:hover {
			filter: brightness(0.9) contrast(1.1);
			padding: 32px 50px;
		}
	}

	.cta-button-price {
		margin-left: 14px;
		opacity: 0.6;
	}

	.tagline {
		--font-size: 26px;
		position: relative;
		font-family: 'Martian Mono';
		font-size: var(--font-size);
		font-weight: 400;
		text-transform: uppercase;
	}

	.tagline-carret {
		display: inline-block;
		width: calc(var(--font-size) / 2);
		transform: translateY(12%) translateX(-50%);
		height: var(--font-size);
		background-color: var(--clr-white);
		animation: flicker 1.5s infinite;
	}

	@keyframes flicker {
		0% {
			opacity: 1;
		}
		25% {
			opacity: 0;
		}
		50%,
		100% {
			opacity: 1;
		}
	}

	/* MEDIA */

	@media (max-width: 1500px) {
		.arrows-lottie {
			left: 70%;
		}

		.title span {
			font-size: 110px;
		}
	}

	@media (max-width: 1300px) {
		.title span {
			font-size: 110px;
		}

		.info.tablet p {
			font-size: 20px;
		}
	}

	@media (max-width: 1200px) {
		.footer {
			flex-direction: column-reverse;
			align-items: flex-start;
			gap: 40px;
		}
	}

	@media (max-width: 1040px) {
		.frame {
			padding: 40px;
		}

		.arrows-lottie {
			width: 420px;
			bottom: -40px;
			left: 64%;
		}

		.title span {
			font-size: 80px;
			margin-right: 12px;
		}

		.info.desktop {
			display: none;
		}

		.info.tablet {
			display: flex;
		}

		.tagline {
			--font-size: 20px;
		}
	}

	@media (max-width: 800px) {
		.frame {
			padding: 24px;
			border-radius: 40px;
			min-height: 620px;
		}

		.title {
			margin-bottom: 30px;
		}

		.title span {
			font-size: 38px;
			margin-right: 12px;
		}

		.info {
			margin-bottom: 30px;
		}

		.cta-button-price {
			margin-left: 6px;
		}

		.arrows-lottie {
			width: 400px;
			min-width: 300px;
			bottom: -80px;
			left: auto;
			right: 0%;
		}

		.cta-button {
			font-size: 24px;
			padding: 22px;
		}
	}

	@media (max-width: 600px) {
		.frame {
			margin: -10px;
			width: calc(100% + 20px);
		}

		.arrows-lottie {
			bottom: -140px;
		}
	}
</style>
