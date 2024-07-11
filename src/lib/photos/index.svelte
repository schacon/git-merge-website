<script lang="ts">
	import { inViewport } from '../../utils/inViewport';

	export let isDocLoaded = false;
	$: isSectionHovered = false;
	$: isInViewport = false;

	const handleMouseEnter = () => {
		isSectionHovered = true;
	};

	const handleMouseLeave = () => {
		isSectionHovered = false;
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section
	class="wrapper"
	class:show={isDocLoaded && isInViewport}
	use:inViewport={() => {
		isInViewport = true;
	}}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	<img class="floating-image img-1" src="images/photos/img-1.webp" alt="" />
	<img class="floating-image img-2" src="images/photos/img-2.webp" alt="" />
	<img
		class="floating-image img-3"
		class:hovered-state={!isSectionHovered}
		src="images/photos/img-3.webp"
		alt=""
	/>
	<img class="floating-image img-4" src="images/photos/img-4.webp" alt="" />
	<img class="floating-image img-5" src="images/photos/img-5.webp" alt="" />
	<img class="floating-image img-6" src="images/photos/img-6.webp" alt="" />
	<img class="floating-image img-7" src="images/photos/img-7.webp" alt="" />

	<img class="back-img" src="images/photos/back-img.webp" alt="" />
</section>

<style>
	.wrapper {
		position: relative;
		display: flex;
		border-radius: 50px;
		background-color: #373737;
		min-height: 700px;
		height: 100%;
		width: 100%;
		overflow: hidden;
		margin-bottom: 70px;
		/* initial */
		opacity: 0;
	}

	.floating-image {
		position: absolute;
		width: 40%;
		border-radius: 30px;
		filter: brightness(0.4) contrast(0.7);
		transition:
			transform 0.3s,
			filter 0.3s;
	}

	.floating-image:hover {
		z-index: 3;
		transform: scale(1.1);
		filter: brightness(1) contrast(1);
	}

	.hovered-state {
		z-index: 3;
		transform: scale(1.1);
		filter: brightness(1) contrast(1);
	}

	.img-1 {
		z-index: 1;
		top: 2%;
		left: 4%;
	}

	.img-2 {
		z-index: 2;
		top: -4%;
		right: 19%;
	}

	.img-3 {
		z-index: 2;
		top: 20%;
		left: 28%;
	}

	.img-4 {
		z-index: 1;
		top: 24%;
		right: -3%;
	}

	.img-5 {
		z-index: 2;
		top: 48%;
		left: -3%;
	}

	.img-6 {
		z-index: 1;
		top: 65%;
		right: -8%;
	}

	.img-7 {
		z-index: 1;
		top: 60%;
		left: 33%;
	}

	.back-img {
		z-index: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		top: 0;
		left: 0;
		filter: brightness(0.4) contrast(0.7);
	}

	@media (max-width: 1020px) {
		.wrapper {
			display: none;
		}
	}
</style>
