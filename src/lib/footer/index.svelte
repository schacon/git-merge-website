<script lang="ts">
	import { inViewport } from '../../utils/inViewport';

	export let isDocLoaded = false;

	$: isInViewport = false;
	$: sponsorEmailCopied = false;
	$: contributorEmailCopied = false;

	const copyEmail = (email: string) => {
		navigator.clipboard.writeText(email);
	};

	const copySponsorEmail = () => {
		copyEmail('megan@gitbutler.com');
		sponsorEmailCopied = true;

		setTimeout(() => {
			sponsorEmailCopied = false;
		}, 2000);
	};

	const copyContributorEmail = () => {
		copyEmail('scott@gitbutler.com');
		contributorEmailCopied = true;

		setTimeout(() => {
			contributorEmailCopied = false;
		}, 2000);
	};
</script>

<footer
	class="footer"
	class:show={isDocLoaded && isInViewport}
	use:inViewport={() => {
		isInViewport = true;
	}}
>
	<div class="sponsors">
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
		/>
	</div>

	<div class="mobile-divider" />
	<div class="other-wrap">
		<div class="other">
			<img class="git-merge-logo" src="images/git-merge-logo.svg" alt="" />
			<p class="git-merge-logo-subtitle">
				Hosted by <a href="https://gitbutler.com/" target="_blank">GitButler</a>
			</p>
			<p class="contribution-text">
				<svg
					width="16"
					height="15"
					viewBox="0 0 16 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9.49219 0.433594L9.28125 5.88281L14.6602 3.98438L15.6094 6.9375L10.0195 8.27344L13.2891 13.0195L10.6172 14.9531L7.80469 9.46875L4.99219 14.9531L2.32031 13.0195L5.58984 8.30859L0 6.9375L0.949219 3.98438L6.32812 5.91797L6.11719 0.46875L9.49219 0.433594Z"
						fill="#F7F3E5"
					/>
				</svg>

				If you are a Git core contributor and need financial assistance to attend, contact
				<a class="email-link" href="mailto:scott@gitbutler.com">scott@gitbutler.com</a>.
			</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		position: relative;
		display: flex;
		gap: 80px;
		margin-bottom: 70px;
		/* initial */
		opacity: 0;
	}

	.mobile-divider {
		display: none;
	}

	.email-link {
		text-decoration: underline;
		text-decoration-style: dashed;
		text-underline-offset: 4px;
		text-decoration-thickness: 1px;
	}

	.sponsors {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 30px;
		background-color: #524fee;
		border-radius: 50px;
		padding: 40px 48px 48px;
		overflow: hidden;
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

	.sponsors-info h3 {
		font-size: 40px;
		font-weight: 400;
		line-height: 1;
	}

	.sponsors-info p {
		font-size: 20px;
		text-wrap: balance;
	}

	.logos {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		align-items: center;
		mix-blend-mode: screen;
	}

	.other-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
	}

	.other {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.git-merge-logo {
		max-width: 400px;
		width: 100%;
		margin-bottom: 10px;
	}

	.git-merge-logo-subtitle {
		font-size: 22px;
		margin-bottom: 30px;
	}

	.git-merge-logo-subtitle a {
		color: var(--color-white);
		text-decoration-thickness: 1px;
		text-underline-offset: 3px;
		transition: color 0.15s;

		&:hover {
			color: var(--clr-accent);
		}
	}

	.contribution-text {
		font-size: 20px;
		max-width: 500px;
		text-wrap: balance;
	}

	@media (max-width: 1020px) {
		.footer {
			flex-direction: column;
			gap: 60px;
		}

		.sponsors {
			padding: 30px;
			border-radius: 40px;
		}

		.mobile-divider {
			display: block;
			width: 100%;
			height: 2px;
			background-image: linear-gradient(to right, var(--clr-white) 50%, transparent 0);
			background-size: 10px 2px;
		}
	}
</style>
