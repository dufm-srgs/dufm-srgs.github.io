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

	interface Image {
		url: string;
		alt: string;
	}

	const images: Image[] = [
		{
			url: DistraughtPhoto,
			alt: "A student looking distraught while working on a problem"
		},
		{
			url: HappyPhoto,
			alt: "A student smiling while working on a problem"
		},
		{
			url: MadnessPhoto,
			alt: "A student looking mad while working on a problem"
		},
		{
			url: OutsidePhoto,
			alt: "A student working on a problem outside"
		},
		{
			url: PensivePhoto,
			alt: "A student looking pensive while working on a problem"
		},
		{
			url: BigTree,
			alt: "A student standing in front of a big tree"
		},
		{
			url: GroupDesk,
			alt: "A group of students working on a problem at a desk"
		},
		{
			url: WalkAndChill,
			alt: "A student walking and chilling"
		},
		{
			url: InJoke,
			alt: "A student laughing at an inside joke"
		},
		{
			url: BigWork,
			alt: "A student working on a big problem"
		},
		{
			url: Grid,
			alt: "A student working on a problem on a grid"
		},
		{
			url: GameGrid,
			alt: "A student working on a problem on a grid"
		}
	];
</script>

<main>
	<div class="canvas-parent">
		<Voronoi />
		<div class="hero">
			<h1>Real Problems, Real Math</h1>

			<p>
				Explore mathematics beyond the boundaries of high school in the Dirt Under the Fingernails
				Mathematics course at the Virginia Summer Residential Governers School.
			</p>
		</div>
	</div>

	<span class="anchor" id="what" />
	<h2>What we do</h2>

	<div class="what-container">
		<div class="section">
			<h3>Analyze Problems</h3>
			<p>
				Explore various topics in mathematics in order to think critically and creatively about the
				world. Whether working alone or in groups, be ready to tackle a wide variety of problems
				with confidence.
			</p>
		</div>

		<div class="section">
			<h3>Explore and Create</h3>

			<p>
				Find patterns and make conjectures. Utilize college-level fields of mathematics to analyze
				new problems and create new solutions.
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
	<div class="banner">
		<img src={ClassPhoto} alt="Class posing with a whiteboard behind them" />
	</div>

	<div class="slideshow">
		{#each images as image}
			<img src={image.url} alt={image.alt} />
		{/each}
	</div>

	<span class="anchor" id="testimonials" />
	<h2>Testimonials</h2>

	<div class="testimonial-container">
		{#each testimonials as testimonial}
			<div class="testimonial">
				<p>“{testimonial.quote}”</p>
				<p class="author">- {testimonial.author}</p>
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

	.slideshow {
		margin: 1rem;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		overflow-x: scroll;
		height: 10rem;
		
		img {
			height: calc(100% - 2px); // account for border
			margin: 0 0.5rem;
			border: 1px solid black;
		}
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

		div.testimonial {
			width: 15rem;
			margin: 1rem;
			padding: 1rem;
			border: 1px solid black;
			background-color: #fcf5c7;
			border-radius: 1rem;
			text-align: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-size: 1.2rem;

			.author {
				font-style: italic;
				text-align: right;
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
