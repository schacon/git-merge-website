<script lang="ts">
	import { links } from '../../content-data';
</script>

<main class="container">
	<span>↩ <a href="./">back to UI</a></span>
	<pre class="logo">
█░█░█ █▀▀ █░░ █▀▀ █▀█ █▀▄▀█ █▀▀   ▀█▀ █▀█
▀▄▀▄▀ ██▄ █▄▄ █▄▄ █▄█ █░▀░█ ██▄   ░█░ █▄█

░██████╗░██╗████████╗  ███╗░░░███╗███████╗██████╗░░██████╗░███████╗  ██████╗░░░██╗██╗
██╔════╝░██║╚══██╔══╝  ████╗░████║██╔════╝██╔══██╗██╔════╝░██╔════╝  ╚════██╗░██╔╝██║
██║░░██╗░██║░░░██║░░░  ██╔████╔██║█████╗░░██████╔╝██║░░██╗░█████╗░░  ░░███╔═╝██╔╝░██║
██║░░╚██╗██║░░░██║░░░  ██║╚██╔╝██║██╔══╝░░██╔══██╗██║░░╚██╗██╔══╝░░  ██╔══╝░░███████║
╚██████╔╝██║░░░██║░░░  ██║░╚═╝░██║███████╗██║░░██║╚██████╔╝███████╗  ███████╗╚════██║
░╚═════╝░╚═╝░░░╚═╝░░░  ╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚═╝░╚═════╝░╚══════╝  ╚══════╝░░░░░╚═╝
  </pre>

	<pre class="main-info">
DATES:      SEPTEMBER 19—20
LOCATION:   BERLIN
VENUE:      TBD

Technical talks, hands-on workshops,
and breakout discussions about Git
</pre>

	<p class="text">
		Join us in Berlin for the next edition ofGit Merge, a conference focused on bringing together in
		person the fine folks who work on Git and many others working on tools in the Git ecosystem.
		Hosted around the world since 2013, Git Merge returns to Berlin for two days of all things Git.
	</p>

	<!-- prettier-ignore -->
	<a class="cta" href={links.tickets} target="_blank">
+===================================+
‖                                   ‖
‖         BUY A TICKET 99€          ‖
‖                                   ‖
+===================================+
  </a>

	<pre>
-------------------------------------
-------------------------------------
//////////// 2024 AGENDA ////////////
-------------------------------------
-------------------------------------
	</pre>

	<p class="text">
		<b>DAY 1</b>
	</p>

	<p class="text">
		30 minute talks from people building Git, building on Git or building cool things in the wider
		VCS community.
	</p>

	<p class="text">-------------------------------------</p>

	<p class="text">
		<b>DAY 2</b>
	</p>

	<p class="text">
		<i>BoF Unconference Small Groups/Hacking.</i>
	</p>

	<p class="text">
		Everyone can suggest breakout conversations in an unconference style format to discuss or hack
		on ideas that came from the first day.
	</p>

	<p class="text">
		<i>Food and Beer.</i>
	</p>

	<p class="text">Food, drinks and beer will be included with the ticket for everyone.</p>

	<p class="text">
		<i>Afterparty.</i>
	</p>

	<p class="text">
		At the end of Day One, we’ll have an after party where you can talk more with the speakers and
		meet other awesome people in the Git community.
	</p>

	<p class="text">-------------------------------------</p>

	<p class="text">
		All of our talks will be recorded and later uploaded to <a
			href="https://www.youtube.com/@gitbutlerapp"
			target="_blank">GitButler’s YouTube channel</a
		>
	</p>

	<!-- prettier-ignore -->
	<a class="cta" href={links.tickets} target="_blank">
+===================================+
‖                                   ‖
‖         BUY A TICKET 99€          ‖
‖                                   ‖
+===================================+
  </a>

	<p class="text">-------------------------------------</p>

	<p class="text sponsors">
		SPONSORS:
		<a href="https://github.com/" target="_blank">Github</a>,
		<a href="https://gitbutler.com/" target="_blank">GitButler</a>
	</p>

	<p class="text">-------------------------------------</p>

	<p class="text">
		<a href="mailto:megan@gitbutler.com">Contact us</a> if you would like to help sponsor.
	</p>

	<p class="text">
		If you are a Git core contributor and need financial assistance to attend, contact
		<a href="mailto:scott@gitbutler.com">scott@gitbutler.com</a>
	</p>

	<p class="text">-------------------------------------</p>

	<pre class="gb-logo">
  <p>HOSTED BY:</p>
  <a href="https://gitbutler.com/" target="_blank">
░█▀▀█ ─▀─ ▀▀█▀▀ ░█▀▀█ █──█ ▀▀█▀▀ █── █▀▀ █▀▀█ 
░█─▄▄ ▀█▀ ──█── ░█▀▀▄ █──█ ──█── █── █▀▀ █▄▄▀
░█▄▄█ ▀▀▀ ──▀── ░█▄▄█ ─▀▀▀ ──▀── ▀▀▀ ▀▀▀ ▀─▀▀
</a>
  </pre>
</main>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 100%;
		min-height: 100vh;
		background-color: var(--clr-background);
		padding: 30px 20px 50px;
		overflow: hidden;
	}

	.container p,
	pre {
		letter-spacing: 0;
	}

	.main-info {
		font-size: 20px;
	}

	.text {
		width: 100%;
		max-width: 600px;
		text-wrap: balance;
	}

	.sponsors {
		font-size: 18px;
	}

	.cta {
		white-space: pre;
		text-decoration: none;
		width: fit-content;
		color: rgb(255, 196, 0);

		&:hover {
			color: rgb(255, 238, 127);
		}
	}

	.gb-logo {
		font-size: 12px;
		color: rgb(133, 160, 158);
	}

	.gb-logo p {
		font-size: 18px;
	}

	.gb-logo a {
		text-decoration: none;

		&:hover {
			color: rgb(88, 219, 202);
		}
	}

	@media (max-width: 900px) {
		.logo {
			font-size: 6.5px;
		}
	}
</style>
