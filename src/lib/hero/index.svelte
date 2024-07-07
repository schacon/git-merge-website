<script lnag="ts">
	import '../../styles/main.css';
</script>

<section class="wrapper">
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
		<p>Dates_______________<span>September 19—20</span></p>
		<p>Location____________<span>Berlin</span></p>
		<p>Venue_______________<span>TBD</span></p>
	</div>

	<div class="footer">
		<a class="cta-button" href="https://tito.io/" target="_blank"
			>Buy a ticket <span class="cta-button-price">99€</span></a
		>
		<p class="tagline">One conference.<br />All things Git <span class="tagline-carret" /></p>
	</div>

	<img class="arrows-img desktop" src="images/hero-arrows-desktop.svg" alt="" />
	<img class="arrows-img tablet" src="images/hero-arrows-tablet.svg" alt="" />
</section>

<style>
	.wrapper {
		position: relative;
		background-color: #373737;
		width: 100%;
		border-radius: 50px;
		overflow: hidden;
		padding: 52px;
	}

	.arrows-img {
		position: absolute;

		object-fit: cover;
		object-position: top right;
	}

	.arrows-img.desktop {
		bottom: -50px;
		left: 65%;
	}

	.arrows-img.tablet {
		top: -20px;
		left: 68%;
		display: none;
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

	.info.tablet p {
		font-size: 20px;
	}

	/* FOOTER */

	.footer {
		display: flex;
		align-items: center;
		gap: 50px;
	}

	.cta-button {
		display: flex;
		width: fit-content;
		font-family: 'Martian Mono';
		font-size: 26px;
		font-weight: 400;
		color: var(--clr-white);
		background-color: var(--clr-accent);
		text-decoration: none;
		padding: 22px 40px;
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

		.arrows-img.desktop {
			display: none;
		}

		.arrows-img.tablet {
			display: block;
		}
	}

	@media (max-width: 1200px) {
		.footer {
			flex-direction: column-reverse;
			align-items: flex-start;
			gap: 40px;
		}

		.arrows-img.tablet {
			top: auto;
			bottom: -40px;
		}
	}

	@media (max-width: 1040px) {
		.wrapper {
			padding: 40px;
		}

		.title span {
			font-size: 90px;
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
</style>
