<script lang="ts">
	import { inViewport } from '../../../utils/inViewport';
	export let isDocLoaded = false;

	$: isInViewport = false;
	$: isLoaded = isDocLoaded && isInViewport;
</script>

<section
	class="wrapper"
	class:show={isLoaded}
	use:inViewport={() => {
		isInViewport = true;
	}}
>
	<div class="thumbs-wrap">
		<div class="thumb-wrap">
			<div
				class="thumb-preview thumb-preview-1"
				class:show-thumb-1={isLoaded}
				style:background-image="url('images/video-preview/preview-4.webp')"
			></div>
		</div>
		<div class="thumb-wrap">
			<div
				class="thumb-preview thumb-preview-2"
				class:show-thumb-2={isLoaded}
				style:background-image="url('images/video-preview/preview-3.webp')"
			></div>
		</div>
		<div class="thumb-wrap">
			<div
				class="thumb-preview thumb-preview-3"
				class:show-thumb-3={isLoaded}
				style:background-image="url('images/video-preview/preview-2.webp')"
			></div>
		</div>
		<div class="camera-shaped-wrap">
			<div class="camera-shaped" class:show-thumb-4={isLoaded}>
				<a
					class="merge-2022-link"
					href="https://www.youtube.com/watch?v=omGgXdXCt_8&list=PL0lo9MOBetEGEAs1D28ExRQONnX-uZ3Wf&ab_channel=GitHub"
					target="_blank"
					><span>GitMerge 2022</span>
					<svg
						width="17"
						height="18"
						viewBox="0 0 17 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1 16.75L16.5 1.25M16.5 1.25H1M16.5 1.25V16.75" stroke="white" />
					</svg>
				</a>
				<svg
					class="play-icon"
					width="77"
					height="84"
					viewBox="0 0 77 84"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M71.1302 33.2442L14.8308 2.1825C8.16598 -1.49463 0 3.32639 0 10.9383V73.0617C0 80.6736 8.16597 85.4946 14.8308 81.8175L71.1301 50.7558C78.0225 46.9531 78.0225 37.0469 71.1302 33.2442Z"
						fill="white"
					/>
				</svg><img src="images/video-preview/preview-camera-shape.webp" alt="" />
			</div>
		</div>
	</div>

	<div class="disclamer-wrap">
		<p class="disclamer">
			All of our talks will be recorded and later uploaded to GitButler’s <a
				href="https://www.youtube.com/@gitbutlerapp"
				target="_blank">YouTube channel</a
			>
			<img src="images/video-preview/yt-icon.svg" alt="" />
		</p>
	</div>
</section>

<style>
	.wrapper {
		display: flex;
		padding-bottom: 70px;
		/* initial */
		opacity: 0;
	}

	.thumbs-wrap {
		display: flex;
		height: 460px;
		flex: 1.3;
	}

	.thumb-wrap {
		position: relative;
		height: 100%;
		flex: 1;
	}

	.thumb-preview {
		--img-height: 290px;
		--img-width: 370px;
		position: absolute;
		width: var(--img-width);
		height: var(--img-height);
		left: 0;
		background-color: #373737;
		background-size: cover;
		background-position: center;
		border-radius: 30px;

		opacity: 0;
		transform: translateY(20px) translateX(-20px);
	}

	.thumb-preview-1 {
		top: calc(100% - var(--img-height));
	}

	.thumb-preview-2 {
		top: calc(88% - var(--img-height));
	}

	.thumb-preview-3 {
		top: calc(75% - var(--img-height));
	}

	.camera-shaped-wrap {
		z-index: 1;
		position: relative;
		align-self: flex-start;
		margin-right: -110px;
		width: 538px;
	}

	.camera-shaped {
		position: relative;
		display: flex;

		opacity: 0;
		transform: translateY(20px) translateX(-20px);
		/* background-color: rgba(200, 0, 0, 0.5); */
	}

	.merge-2022-link {
		position: absolute;
		bottom: 30px;
		left: 30px;
		display: flex;
		gap: 10px;
		align-items: center;
		font-size: 26px;
		color: var(--color-white);
		text-decoration: none;
	}

	.merge-2022-link span {
		text-decoration: underline;
	}

	.play-icon {
		position: absolute;
		top: 50%;
		left: 36%;
		transform: translate(-50%, -50%);
	}

	/* ---- */

	.disclamer-wrap {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.disclamer {
		--font-size: 32px;
		font-size: var(--font-size);
		line-height: 107%;
		max-width: 510px;
		margin-bottom: 30px;
	}

	.disclamer a {
		color: #ff8989;
		text-decoration: underline;
		text-underline-offset: 6px;
		text-decoration-thickness: 2px;
	}

	.disclamer img {
		height: calc(var(--font-size) / 1.3);
		transform: translateY(20%);
	}

	@media (max-width: 1040px) {
		.wrapper {
			flex-direction: column;
		}

		.thumbs-wrap {
			flex: none;
			margin-bottom: 40px;
		}

		.camera-shaped-wrap {
			margin-right: 0;
		}

		.disclamer {
			margin-bottom: 0;
		}
	}

	@media (max-width: 800px) {
		.thumbs-wrap {
			height: 320px;
		}
		.thumb-preview {
			--img-height: 210px;
			--img-width: 280px;
		}

		.camera-shaped-wrap {
			width: 410px;
		}
	}

	@media (max-width: 600px) {
		.merge-2022-link {
			display: none;
		}

		.play-icon {
			display: none;
		}

		.thumbs-wrap {
			height: auto;
		}

		.thumb-wrap {
			display: none;
		}

		.disclamer {
			--font-size: 26px;
		}
	}

	.show-thumb-4 {
		opacity: 1;
		transform: translateY(0);
	}

	@media (min-width: 1040px) {
		.show-thumb-1 {
			animation: show-thumb-animation 0.5s 0.2s forwards;
		}

		.show-thumb-2 {
			animation: show-thumb-animation 0.5s 0.4s forwards;
		}

		.show-thumb-3 {
			animation: show-thumb-animation 0.5s 0.6s forwards;
		}

		.show-thumb-4 {
			animation: show-thumb-animation 0.5s 0.7s forwards;
		}
	}

	@keyframes show-thumb-animation {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
