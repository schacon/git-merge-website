<script>
	import { links } from '../../content-data';
</script>

<section class="wrapper">
	<div class="frame">
		<div class="title">
			<span>Git</span>
			<span>Merge</span>
			<span class="title-year">24</span>
		</div>

		<div class="info desktop">
			<p>Dates_______________<span>September 19—20</span></p>
			<p>Location____________<span>Berlin</span></p>
			<p>Venue_______________<span>TBD</span></p>
		</div>

		<div class="info tablet">
			<p>Dates__<span>September 19—20</span></p>
			<p>City___<span>Berlin</span></p>
			<p>Venue__<span>TBD</span></p>
		</div>

		<div class="footer">
			<a class="cta-button" href={links.tickets} target="_blank"
				><span>Buy</span><span>a</span><span>ticket</span><span class="cta-button-price">99€</span
				></a
			>
			<p class="tagline">One conference.<br />All things Git <span class="tagline-carret" /></p>
		</div>

		<img class="arrows-img" src="images/hero-arrows-tablet.svg" alt="" />

		<!-- svelte-ignore a11y-media-has-caption -->
		<video
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
		filter: blur(15px);
	}

	.arrows-img {
		position: absolute;
		z-index: 0;
		bottom: -80px;
		left: 70%;
		width: 520px;

		object-fit: cover;
		object-position: top right;
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
		.arrows-img {
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

		.arrows-img {
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

		.arrows-img {
			width: 440px;
			min-width: 400px;
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

		.arrows-img {
			bottom: -140px;
		}
	}
</style>
