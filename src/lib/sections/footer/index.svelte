<script lang="ts">
	import { inViewport } from '../../../utils/inViewport';

	$: isInViewport = false;
</script>

<section
	class="wrapper"
	class:show={isInViewport}
	use:inViewport={() => {
		isInViewport = true;
	}}
>
	<div class="logo-wrapper">
		<img class="git-merge-logo" src="images/git-merge-logo.svg" alt="" />
		<p class="git-merge-logo-subtitle">
			Hosted by <a href="https://gitbutler.com/" target="_blank">GitButler</a> and
			<a href="https://github.com" target="_blank">GitHub</a>
		</p>
	</div>
	<p class="contribution-text">
		<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.49219 0.433594L9.28125 5.88281L14.6602 3.98438L15.6094 6.9375L10.0195 8.27344L13.2891 13.0195L10.6172 14.9531L7.80469 9.46875L4.99219 14.9531L2.32031 13.0195L5.58984 8.30859L0 6.9375L0.949219 3.98438L6.32812 5.91797L6.11719 0.46875L9.49219 0.433594Z"
				fill="#F7F3E5"
			/>
		</svg>

		If you are a Git core contributor and need financial assistance to attend, contact
		<a class="email-link" href="mailto:scott@gitbutler.com">scott@gitbutler.com</a>.
	</p>
</section>

<style>
	.wrapper {
		position: relative;
		display: flex;
		/* justify-content: space-between; */
		gap: 80px;
		margin-bottom: 70px;
		/* initial */
		opacity: 0;
	}

	.logo-wrapper {
		display: flex;
		flex-direction: column;
	}

	.email-link {
		text-decoration: underline;
		text-decoration-style: dashed;
		text-underline-offset: 4px;
		text-decoration-thickness: 1px;
	}

	.git-merge-logo {
		max-width: 300px;
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
		.wrapper {
			flex-direction: column;
			gap: 20px;
		}
	}
</style>
