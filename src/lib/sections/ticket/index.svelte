<script lang="ts">
	import { links } from '../../../content-data';
	import { inViewport } from '../../../utils/inViewport';
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
	<a class="ticket" href={links.tickets} target="_blank">
		<div class="ticket-content">
			<h2 class="title">Buy a ticket</h2>

			<div class="mobile-price">
				<span class="price">99€</span>
				<div class="arrow-wrap">
					<div class="arrow-circle"></div>
					<div class="arrow-line"></div>
					<svg
						width="32"
						height="37"
						viewBox="0 0 32 37"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 0L32 18.5L0 37V0Z" fill="var(--clr-white)" />
					</svg>
				</div>
			</div>

			<div class="details">
				<span class="price">99€</span>
				<div class="details-text">
					<p>Proceeds donated to the Git project at Software Freedom Conservancy 🖤</p>
					<p>Food, drinks and beer will be included with the ticket for everyone 🍔🍺</p>
				</div>
			</div>
		</div>
		<div class="ticket-arrow">
			<svg
				class="top-notch"
				width="75"
				height="57"
				viewBox="0 0 75 57"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.5 0V-7.5H74.5V0C58.7599 0 46 12.7599 46 28.5V48.5C46 59.4624 29 59.4624 29 48.5V28.5C29 12.7599 16.2401 0 0.5 0Z"
					fill="var(--clr-background)"
				/>
			</svg>
			<svg
				class="bottom-notch"
				width="75"
				height="57"
				viewBox="0 0 75 57"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.5 0V-7.5H74.5V0C58.7599 0 46 12.7599 46 28.5V48.5C46 59.4624 29 59.4624 29 48.5V28.5C29 12.7599 16.2401 0 0.5 0Z"
					fill="var(--clr-background)"
				/>
			</svg>

			<svg
				class="ticket-arrow-icon"
				width="185"
				height="176"
				viewBox="0 0 185 176"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0 88H178M91.5 3L180 88L91.5 173" stroke="var(--clr-white)" stroke-width="6" />
			</svg>
		</div>

		<!-- svelte-ignore a11y-media-has-caption -->
		<video
			class="back-video"
			src="video/render-2.mp4"
			autoplay
			loop
			controls={false}
			playsinline
			muted
		/>
	</a>
</section>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		padding-bottom: 70px;
		/* initial */
		opacity: 0;
	}

	.mobile-price {
		display: none;
	}

	.ticket {
		position: relative;
		display: flex;
		align-items: stretch;
		background-color: #44194e;
		border-radius: 60px;
		overflow: hidden;
		text-decoration: none;

		transition: transform 0.2s;
	}

	@media (min-width: 641px) {
		.ticket:hover {
			transform: translateX(10px);
		}

		.ticket:hover .ticket-arrow-icon {
			transform: translateX(10px);
		}
	}

	.back-video {
		pointer-events: none;
		position: absolute;
		z-index: 0;
		top: 20px;
		left: 20px;
		min-width: calc(100% + 40px);
		height: calc(100% + 40px);
		margin-left: -20px;
		margin-top: -20px;
		object-fit: cover;
		object-position: center;
		mix-blend-mode: lighten;
		filter: blur(35px);
	}

	.ticket-content {
		position: relative;
		z-index: 1;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 60px 80px;
	}

	.details {
		display: flex;
		gap: 40px;
		color: #b3e9e3;
	}

	.title {
		font-size: 82px;
		line-height: 1;
		font-weight: 400;
		letter-spacing: -1px;
	}

	.price {
		font-size: 70px;
		font-weight: 400;
		line-height: 1;
	}

	.details-text {
		display: flex;
		flex-direction: column;
		gap: 6px;
		border-left: 2px solid #b3e9e3;
		padding-left: 28px;
		margin-top: 8px;
		height: fit-content;
	}

	.details-text p {
		margin: 0;
		font-size: 18px;
	}

	.details-text a {
		color: #b3e9e3;
	}

	/* --- */

	.ticket-arrow {
		flex: 0.4;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* background-color: rgba(0, 200, 0, 0.5); */
		padding: 60px;
	}

	.ticket-arrow-icon {
		transition: transform 0.2s;
	}

	.top-notch {
		z-index: 2;
		position: absolute;
		top: 0;
		left: -38px;
	}

	.bottom-notch {
		z-index: 2;
		position: absolute;
		bottom: 0;
		left: -38px;
		transform: rotate(180deg);
	}

	@media (max-width: 1400px) {
		.ticket-content {
			padding: 50px 70px;
		}
		.ticket-arrow {
			flex: 0;
			padding: 40px;
		}
	}

	@media (max-width: 1020px) {
		.ticket {
			border-radius: 40px;
		}

		.ticket-content {
			padding: 30px 40px;
		}

		.title,
		.price {
			font-size: 64px;
		}

		.details-text {
			gap: 16px;
		}

		.ticket-arrow {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.ticket-content {
			padding: 30px;
		}

		.title {
			font-size: 50px;
			letter-spacing: -2px;
		}

		.details .price {
			display: none;
		}

		.price {
			font-size: 50px;
		}

		.details-text {
			border-left: none;
			padding: 0;
		}

		.mobile-price {
			display: flex;
			align-items: center;
			gap: 30px;
		}

		.arrow-wrap {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}

		.arrow-circle {
			width: 40px;
			height: 40px;
			border-radius: 50%;
			background-color: var(--clr-white);
		}

		.arrow-line {
			flex: 1;
			width: 100%;
			height: 2px;
			background-color: var(--clr-white);
		}
	}
</style>
