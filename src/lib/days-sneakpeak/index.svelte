<script lang="ts">
	import { inViewport } from '../../utils/inViewport';
	import { links } from '../../content-data';

	export let isDocLoaded: boolean;

	const data = {
		left: {
			image: 'images/days-sneakpeak/card-one-arrows-back.svg',
			text: '30 minute talks from people building Git, building on Git or building cool things in the wider VCS community.'
		},
		right: [
			{
				title: 'BoF Unconference Small Groups/Hacking',
				text: 'Everyone can suggest breakout conversations in an unconference style format to discuss or hack on ideas that came from the first day.'
			},
			{
				title: 'Food and Beer',
				text: 'Food, drinks and beer will be included with the ticket for everyone.'
			},
			{
				title: 'Afterparty',
				text: 'At the end of Day One, we’ll have an after party where you can talk more with the speakers and meet other awesome people in the Git community.'
			}
		]
	};

	$: isInViewport = false;
</script>

<section
	class="w-d"
	class:show={isDocLoaded && isInViewport}
	use:inViewport={() => {
		isInViewport = true;
	}}
>
	<div class="l-c">
		<div class="day-one-card">
			<div class="day-one-card__image">
				<img src={data.left.image} alt="" />
			</div>
			<p class="day-one-card__text">
				{data.left.text}
			</p>
		</div>
		<a class="cta-button" href={links.tickets} target="_blank"
			><span>Buy a ticket</span> <span class="cta-button__price">99€</span><svg
				class="cta-button__arrow"
				width="72"
				height="35"
				viewBox="0 0 72 35"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M43.25 4L67 17.5L43.25 31V17.5V4Z" />
				<path
					d="M0 17.5C0 24.1274 5.37258 29.5 12 29.5C18.6274 29.5 24 24.1274 24 17.5C24 10.8726 18.6274 5.5 12 5.5C5.37258 5.5 0 10.8726 0 17.5ZM67 17.5L68.1119 19.4561L71.5531 17.5L68.1119 15.5439L67 17.5ZM43.25 4L44.3619 2.04392L41 0.132963V4H43.25ZM43.25 31H41V34.867L44.3619 32.9561L43.25 31ZM12 19.75H43.25V15.25H12V19.75ZM43.25 19.75H67V15.25H43.25V19.75ZM68.1119 15.5439L44.3619 2.04392L42.1381 5.95608L65.8881 19.4561L68.1119 15.5439ZM65.8881 15.5439L42.1381 29.0439L44.3619 32.9561L68.1119 19.4561L65.8881 15.5439ZM41 4V17.5H45.5V4H41ZM41 17.5V31H45.5V17.5H41Z"
				/>
			</svg>
		</a>
	</div>

	<div class="r-c">
		<div class="r-c-lines">
			<div class="r-c-lines-left">
				<img src="images/days-sneakpeak/card-line-1.svg" alt="" />
			</div>
			<div class="r-c-lines-middle" />
			<div class="r-c-lines-right">
				<img src="images/days-sneakpeak/card-line-3.svg" alt="" />
			</div>
		</div>
		<div class="day-two-card">
			<div class="day-two-text-block">
				<h3>{data.right[0].title}</h3>
				<p>
					{data.right[0].text}
				</p>
			</div>

			<div class="day-two-text-block">
				<h3>{data.right[1].title}</h3>
				<p>
					{data.right[1].text}
				</p>
			</div>

			<div class="day-two-text-block">
				<h3>
					{data.right[2].title}
				</h3>
				<p>
					{data.right[2].text}
				</p>
			</div>
		</div>
	</div>
</section>

<section class="w-t">
	<div class="t-r">
		<div class="t-r-graphics">
			<img src="images/days-sneakpeak/tablet-day-one.svg" alt="" />
		</div>
		<div class="t-r__text">
			<p>
				{data.left.text}
			</p>
		</div>
	</div>

	<div class="b-r">
		<div class="b-r-graphics">
			<img src="images/days-sneakpeak/tablet-day-two.svg" alt="" />
		</div>
		<div class="b-r-content">
			<div class="b-r-text-block">
				<h3>
					{data.right[0].title}
				</h3>
				<p>
					{data.right[0].text}
				</p>
			</div>

			<div class="b-r-text-block">
				<h3>
					{data.right[1].title}
				</h3>
				<p>
					{data.right[1].text}
				</p>
			</div>

			<div class="b-r-text-block">
				<h3>
					{data.right[2].title}
				</h3>
				<p>
					{data.right[2].text}
				</p>
			</div>
		</div>
	</div>

	<a class="cta-button" href={links.tickets}
		><span>Buy a ticket</span> <span class="cta-button__price">99€</span><svg
			class="cta-button__arrow"
			width="72"
			height="35"
			viewBox="0 0 72 35"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M43.25 4L67 17.5L43.25 31V17.5V4Z" />
			<path
				d="M0 17.5C0 24.1274 5.37258 29.5 12 29.5C18.6274 29.5 24 24.1274 24 17.5C24 10.8726 18.6274 5.5 12 5.5C5.37258 5.5 0 10.8726 0 17.5ZM67 17.5L68.1119 19.4561L71.5531 17.5L68.1119 15.5439L67 17.5ZM43.25 4L44.3619 2.04392L41 0.132963V4H43.25ZM43.25 31H41V34.867L44.3619 32.9561L43.25 31ZM12 19.75H43.25V15.25H12V19.75ZM43.25 19.75H67V15.25H43.25V19.75ZM68.1119 15.5439L44.3619 2.04392L42.1381 5.95608L65.8881 19.4561L68.1119 15.5439ZM65.8881 15.5439L42.1381 29.0439L44.3619 32.9561L68.1119 19.4561L65.8881 15.5439ZM41 4V17.5H45.5V4H41ZM41 17.5V31H45.5V17.5H41Z"
			/>
		</svg>
	</a>
</section>

<section class="w-m">
	<div class="t-r">
		<p class="t-r__text">
			{data.left.text}
		</p>
		<div class="t-r-graphics">
			<img src="images/days-sneakpeak/day-one-two.svg" alt="" />
		</div>
	</div>

	<div class="b-r">
		<div class="b-r-text-block">
			<h3>
				{data.right[0].title}
			</h3>
			<p>
				{data.right[0].text}
			</p>
		</div>

		<div class="b-r-text-block">
			<h3>
				{data.right[1].title}
			</h3>
			<p>
				{data.right[1].text}
			</p>
		</div>

		<div class="b-r-text-block">
			<h3>
				{data.right[2].title}
			</h3>
			<p>
				{data.right[2].text}
			</p>
		</div>
	</div>
</section>

<style>
	.w-d {
		--radius: 50px;
		display: flex;
		gap: 24px;
		padding-bottom: 70px;
		margin-top: 100px;
		/* initial */
		opacity: 0;
	}

	.w-t,
	.w-m {
		display: none;
	}

	.w-d .l-c {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.w-d .day-one-card {
		display: flex;
		flex-direction: column;
		background-color: #3f69ff;
		border-radius: var(--radius);
		overflow: hidden;
	}

	.w-d .day-one-card__image {
		position: relative;
		display: flex;
		width: 100%;
		height: 270px;
	}

	.w-d .day-one-card__image img {
		position: absolute;
		right: 0;
		width: 100%;
		min-width: 670px;
	}

	.w-d .day-one-card__text {
		font-size: 52px;
		text-align: center;
		padding: 30px 40px 60px;
		color: #f4de8e;
	}

	.w-d .cta-button,
	.w-t .cta-button {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 16px;
		font-family: 'Martian Mono';
		font-weight: 400;
		letter-spacing: -2px;
		background-color: #ff4455;
		padding: 70px 60px;
		border-radius: var(--radius);
		text-decoration: none;
		color: var(--color-white);
		font-size: 35px;

		transition:
			filter 0.2s,
			transform 0.2s;

		&:hover {
			filter: brightness(0.9) contrast(1.1);
			transform: translateX(2px);

			& .cta-button__arrow {
				transform: translateX(6px);
			}
		}
	}

	.cta-button__price {
		opacity: 0.6;
	}

	.cta-button__arrow {
		fill: var(--clr-white);
		transition: transform 0.2s;
	}

	.w-d .r-c {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.w-d .day-two-card {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 40px;
		background-color: #21c362;
		padding: 160px 60px 60px;
		border-radius: var(--radius);
		height: 100%;
	}

	.w-d .day-two-text-block h3 {
		font-size: 52px;
		margin-bottom: 20px;
		font-weight: 400;
		line-height: 90%;
		max-width: 500px;
		text-wrap: baalnce;
	}

	.w-d .day-two-text-block p {
		font-size: 24px;
		line-height: 110%;
		text-wrap: baalnce;
	}

	.w-d .r-c-lines {
		display: flex;
		height: 120px;
		width: 100%;
		/* background-color: rgba(200, 0, 0, 0.2); */
	}

	.w-d .r-c-lines-left {
		position: relative;
		/* background-color: rgba(0, 200, 0, 0.2); */
		width: 370px;
	}

	.w-d .r-c-lines-left img {
		position: absolute;
		top: -110.5px;
		right: -60px;
		min-width: 658.98px;
	}

	.w-d .r-c-lines-middle {
		flex: 1;
		position: relative;
		/* background-color: rgba(200, 0, 0, 0.2); */
	}

	.w-d .r-c-lines-middle::after {
		content: '';
		position: absolute;
		top: 58px;
		left: 0;
		width: 100%;
		height: 11px;
		background-color: #ffbdc5;
	}

	.w-d .r-c-lines-right {
		position: relative;
		/* background-color: rgba(0, 0, 200, 0.2); */
		width: 140px;
	}

	.w-d .r-c-lines-right img {
		position: absolute;
		top: 57.5px;
		right: 35px;
		min-width: 167px;
	}

	@media (max-width: 1400px) {
		.w-d .day-one-card__text {
			font-size: 38px;
		}

		.w-d .day-two-card {
			padding: 180px 40px 40px;
		}

		.w-d .day-two-text-block h3 {
			font-size: 42px;
		}

		.w-d .day-two-text-block p {
			font-size: 22px;
		}

		.w-d .cta-button {
			font-size: 30px;
		}
	}

	@media (max-width: 1200px) {
		.w-d {
			display: none;
		}

		.w-t {
			--radius: 40px;
			display: flex;
			flex-direction: column;
			margin-top: 70px;
			padding-bottom: 70px;
		}

		.w-t .t-r {
			display: flex;
			background-color: #3f69ff;
			border-radius: var(--radius);
		}

		.w-t .t-r-graphics,
		.w-t .b-r-graphics {
			flex: 1;
			width: 300px;
			display: flex;
			justify-content: center;
			max-width: 300px;
		}

		.w-t .t-r-graphics {
			align-items: flex-end;
		}

		.w-t .b-r-graphics {
			align-items: flex-start;
		}

		.w-t .t-r-graphics img,
		.w-t .b-r-graphics img {
			width: 200px;
		}

		.w-t .b-r-graphics img {
			transform: translateY(-32px);
		}

		.w-t .t-r__text,
		.w-t .b-r-content {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 30px;
			padding: 40px 40px 40px 10px;
		}

		.w-t .t-r__text p {
			font-size: 38px;
		}

		.w-t .b-r {
			display: flex;
			background-color: #21c362;
			border-radius: var(--radius);
			margin-top: 32px;
			margin-bottom: 32px;
		}

		.b-r-text-block h3 {
			font-size: 32px;
			font-weight: 400;
			margin-bottom: 12px;
			text-wrap: balance;
		}

		.b-r-text-block p {
			font-size: 24px;
			line-height: 110%;
		}
	}

	@media (max-width: 840px) {
		.w-t {
			display: none;
		}

		.w-m {
			--radius: 40px;
			display: flex;
			flex-direction: column;
			gap: 24px;
			margin-top: 70px;
			padding-bottom: 50px;
		}

		.w-m .t-r {
			display: flex;
			flex-direction: column;
			background-color: #3f69ff;
			border-radius: var(--radius);
		}

		.w-m .t-r__text {
			font-size: 32px;
			padding: 20px;
		}

		.w-m .t-r-graphics {
			position: relative;
			width: 100%;
			display: flex;
			height: 170px;
			padding: 0 20px;
			/* justify-content: center; */
		}

		.w-m .t-r-graphics img {
			position: absolute;
			width: 100%;
			max-width: 160px;
		}

		.w-m .b-r {
			display: flex;
			flex-direction: column;
			gap: 30px;
			background-color: #21c362;
			border-radius: var(--radius);
			padding: 180px 20px 20px;
		}

		.w-m .b-r-text-block h3 {
			margin-bottom: 8px;
		}
	}
</style>
