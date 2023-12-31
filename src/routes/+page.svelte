<script lang="ts">
	import Voronoi from '$lib/Voronoi.svelte';
	import { testimonials } from '$lib/testimonial';
	import ClassPhoto from "$lib/images/class_photo.webp";

	import BigTree from "$lib/images/slideshow/big_tree.webp";
	import BigWork from "$lib/images/slideshow/big_work.webp";
	import DistraughtPhoto from "$lib/images/slideshow/distraught.webp";
	import GameGrid from "$lib/images/slideshow/game_grid.webp";
	import Grid from "$lib/images/slideshow/grid.webp";
	import HappyPhoto from "$lib/images/slideshow/happy.webp";
	import InJoke from "$lib/images/slideshow/injoke.webp";
	import MadnessPhoto from "$lib/images/slideshow/madness.webp";
	import OutsidePhoto from "$lib/images/slideshow/outside.webp";
	import PensivePhoto from "$lib/images/slideshow/pensive.webp";
	import WalkAndChill from "$lib/images/slideshow/walk_and_chill.webp";
	import GroupDesk from "$lib/images/slideshow/group_desk.webp";
	import TeachBobblehead from "$lib/images/slideshow/teach_bobblehead.webp";

	interface Image {
		url: string;
		alt: string;
		width?: number;
	}

	const images: Image[] = [
		{
			url: DistraughtPhoto,
			alt: "A student looking distraught while working on a graph theory problem"
		},
		{
			url: HappyPhoto,
			alt: "A student excited that they finished a game tree"
		},
		{
			url: MadnessPhoto,
			alt: "A student working on a convuluted game tree."
		},
		{
			url: OutsidePhoto,
			alt: "A student throwing a frisbee to their friend in the field"
		},
		{
			url: PensivePhoto,
			alt: "A student looking pensive while working on a problem"
		},
		{
			url: BigTree,
			alt: "A big combinatorial tree on the whiteboard"
		},
		{
			url: GroupDesk,
			alt: "A group of students at their desks, arranged in a circle, staring at the camera.."
		},
		{
			url: WalkAndChill,
			alt: "Multiple students outside, some walking towards the field and others sitting on benches."
		},
		{
			url: InJoke,
			alt: "A student posing in front of a class-joke about singularities"
		},
		{
			url: BigWork,
			alt: "Multiple students working together on the collaborative whiteboard"
		},
		{
			url: Grid,
			alt: "A student working on a problem of a game grid"
		},
		{
			url: GameGrid,
			alt: "A student working on a problem of a game grid"
		},
		{
			url: TeachBobblehead,
			alt: "Dr. Marc receiving a bobblehead of himself"
		}
	];

	$: widthSum = images.reduce((acc, image) => acc + (image.width ?? 0), 0);
</script>

<main>
	<div class="canvas-parent">
		<Voronoi />
		<div class="hero">
			<h1>Real Problems, Real Math</h1>

			<p>
				Explore mathematics beyond the boundaries of high school in the <b>Dirt Under the Fingernails
				Mathematics</b> course at the 
				<a href="https://www.doe.virginia.gov/teaching-learning-assessment/specialized-instruction/governor-s-schools/summer-residential-governor-s-schools">
					Virginia Summer Residential Governer's School for STEM.
				</a>
			</p>
		</div>
	</div>

	<span class="anchor" id="what" />
	<h2>What we do</h2>

	<div class="what-container">
		<div class="section">
			<h3>Analyze Problems</h3>
			<p>
				Explore various topics in mathematics, from theory to automata,
				in order to hone your critical and creative thinking skills.
				Together, you will tackle a wide variety of problems
				with confidence.
			</p>
		</div>

		<div class="section">
			<h3>Explore and Create</h3>

			<p>
				Delve into fields of mathematics you've never even heard of. You'll work together
				to make connections and find patterns in the mysterious world of mathematics.
			</p>
		</div>

		<div class="section">
			<h3>Prove and Justify</h3>

			<p>
				Back up your conjectures with rigorous proofs. Learn to write proofs that are concise and
				correct. Use logic to justify your claims.<br />■
			</p>
		</div>
	</div>

	<span class="anchor" id="about-us" />
	
	<h2>About Us</h2>

	<p class="subtitle">
		Through hard problems and tireless collaboration, we've grown to create unbreakable bonds with each other.
		Out of every mathematics course our class has taken, each one of us believes that this course has been the
		most rewarding of all. With <a href="http://faculty.randolphcollege.edu/mordower/">Dr. Marc</a> as our
		excellent instructor, we've been able to explore mathematics in a way that we've never been able to before.
	</p>

	<div class="banner">
		<img src={ClassPhoto} alt="Class posing with a whiteboard behind them" />
	</div>

	<div class="slideshow-container">
		<div class="slideshow" style="--slide-width: -{widthSum}px">
			{#each images as image}
				<div class="wrapper-image" bind:clientWidth={image.width}>
					<img src={image.url} alt={image.alt} />
				</div>
			{/each}
			{#each images as image}
				<div class="wrapper-image">
					<img src={image.url} alt={image.alt} />
				</div>
			{/each}
		</div>
	</div>

	<span class="anchor" id="testimonials" />
	<h2>Testimonials</h2>

	<div class="testimonial-container">
		{#each testimonials as testimonial}
			<div class="testimonial">
				<div class="testimonial-body">
					{#if testimonial.image}
						<img src={testimonial.image} alt={testimonial.author} />
					{/if}
					<p>“{testimonial.quote}”</p>
				</div>
				<p class="author">- {testimonial.author}</p>
				{#if testimonial.title}
					<p class="title">({testimonial.title})</p>
				{/if}
			</div>
		{/each}
	</div>
</main>

<footer>
	Made by DUFM students. Source on <a href="https://github.com/dufm-srgs/dufm-srgs.github.io/"
		>GitHub.</a
	>
</footer>

<style lang="scss">

	.wrapper-image {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.slideshow {
		margin: 1rem;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 10rem;
		animation: slideshow 30s linear infinite;
		width: 200%;
		
		img {
			height: calc(100% - 2px); // account for border
			margin: 0 0.5rem;
			border: 1px solid black;
		}
	}

	.slideshow-container {
		width: 100%;
		overflow: hidden;
	}
	
	@keyframes slideshow {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(var(--slide-width, 0));
		}
	}

	p.subtitle {
		text-align: center;
		margin: 0 auto;
		margin-bottom: 1rem;
		width: 70%;
	}

	.banner {
		width: 60%;
		border: 1px solid black;
		margin: 0 auto;
		display: flex;
		

		img {
			width: 100%;
		}
	}

	.anchor {
		display: block;
		position: relative;
		top: -4rem;
		visibility: hidden;
	}

	@media (max-width: 700px) {
		.anchor {
			top: -10rem;
		}

		h2 {
			font-size: 2rem;
		}
	}

	.canvas-parent {
		position: relative;
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
	}

	div.testimonial-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: stretch;

		div.testimonial {
			display: block;
			width: 15rem;
			margin: 1rem;
			padding: 1rem;
			border: 1px solid black;
			background-color: #fcf5c7;
			border-radius: 1rem;
			text-align: center;
			flex-direction: column;
			font-size: 1.2rem;

			.testimonial-body {
				display: block;
			}

			img {
				border-radius: 100%;
				width: 7rem;
			}

			.author {
				font-style: italic;
				text-align: right;
				margin-right: 1rem;
				margin-bottom: 0;
			}

			.title {
				font-size: 0.8rem;
				text-align: right;
				margin: 0;
				margin-right: 1rem;
			}
		}
	}

	footer {
		background-color: #679436;
		color: white;
		width: calc(100% - 2rem);
		text-align: center;
		padding: 1rem;

		a {
			color: white;
		}
	}

	div.hero {
		width: calc(100% - 10rem);
		text-align: center;
		padding: 7rem 5rem;
		background: rgba(255, 255, 255, 0.7);

		p {
			font-size: 2rem;
		}
	}

	div.what-container {
		padding: 1rem;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;

		div.section {
			width: 30rem;
			margin: 1rem;
			padding: 1rem;
			background: lightgray;
			border-radius: 1rem;
			text-align: center;

			&:nth-child(1) {
				background: #ffc09f;
			}

			&:nth-child(2) {
				background: #ffee93;
			}

			&:nth-child(3) {
				background: #adf7b6;
			}
		}

		h3 {
			margin-top: 2rem;
			font-size: 2rem;
			text-align: center;
		}
	}

	h1 {
		font-size: 5rem;
	}

	h2 {
		margin-top: 2rem;
		text-align: center;
		font-size: 3rem;
	}

	h3 {
		margin-top: 1rem;
		font-size: 2rem;
		text-align: center;
	}

	@media (max-width: 600px) {
		p.subtitle {
			width: 90%;
		}

		h1 {
			font-size: 3rem;
		}

		h2 {
			font-size: 2rem;
		}

		div.hero {
			padding: 2rem;
			width: calc(100% - 4rem);
			padding-top: 8rem;
			padding-bottom: 6rem;

			h1 {
				font-size: 2.5rem;
			}

			p {
				font-size: 1.25rem;
			}
		}

		.banner {
			width: 90%;
		}
	}
</style>
