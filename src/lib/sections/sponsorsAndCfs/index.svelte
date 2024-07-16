<script lang="ts">
	import { inViewport } from '../../../utils/inViewport';

	export let isDocLoaded = false;

	$: isInViewport = false;

	const copyEmail = (email: string) => {
		navigator.clipboard.writeText(email);
	};
</script>

<section
	class="wrapper"
	class:show={isDocLoaded && isInViewport}
	use:inViewport={() => {
		isInViewport = true;
	}}
>
	<div class="banner sponsors">
		<div class="sponsors-info">
			<h3>Sponsors</h3>
			<p>
				<a class="email-link" href="mailto:megan@gitbutler.com">Contact us</a> if you would like to help
				sponsor.
			</p>
		</div>

		<div class="logos">
			<img src="images/gb-logo.svg" alt="" />
			<img src="images/gh-logo.svg" alt="" />
		</div>

		<!-- svelte-ignore a11y-media-has-caption -->
		<video
			class="back-video"
			src="video/render-1.mp4"
			autoplay
			loop
			controls={false}
			playsinline
			muted
		></video>
	</div>

	<a
		href="https://docs.google.com/forms/d/e/1FAIpQLSe5xMs2spBeUSmcqStHFGg9_W8qpJpiAJl8QYtSaSmPYODUmA/viewform"
		target="_blank"
		class="banner cfs-wrap"
	>
		<div class="cfs-wrap__about">
			<h3>Call for speakers</h3>
			<p>Are you passionate about Git and have insights to share?</p>
		</div>
		<h3 class="cfs-wrap__decoration-link">Apply now</h3>
	</a>
</section>

<style>
	.wrapper {
		position: relative;
		display: flex;
		gap: 40px;
		margin-bottom: 90px;
		/* initial */
		opacity: 0;
	}

	.banner {
		position: relative;
		display: flex;
		flex-direction: column;

		border-radius: 50px;
		padding: 40px 48px 48px;
		overflow: hidden;
	}

	.banner h3 {
		font-size: 40px;
		font-weight: 400;
		line-height: 1;
	}

	.banner p {
		font-size: 20px;
		text-wrap: balance;
	}

	.email-link {
		text-decoration: underline;
		text-decoration-style: dashed;
		text-underline-offset: 4px;
		text-decoration-thickness: 1px;
	}

	.sponsors {
		flex: 1;
		gap: 30px;
		background-color: #524fee;
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
		filter: blur(15px);
	}

	.sponsors-info {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.logos {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		align-items: center;
		mix-blend-mode: screen;
	}

	.cfs-wrap {
		justify-content: space-between;
		flex: 0.9;
		text-decoration: none;
		gap: 20px;

		background-color: #524fee;
		background-image: url('images/cfs/megaphone.png');
		background-repeat: no-repeat;
		background-position: right 20px top 10px;
		background-size: 360px;

		transition: transform 0.2s;
	}

	.cfs-wrap__about {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.cfs-wrap__decoration-link {
		text-decoration: underline;
	}

	@media (min-width: 1020px) {
		.cfs-wrap:hover {
			transform: translateX(10px);
		}
	}

	@media (max-width: 1020px) {
		.wrapper {
			flex-direction: column;
			gap: 60px;
		}

		.banner {
			padding: 30px;
			border-radius: 40px;
		}
	}
</style>
