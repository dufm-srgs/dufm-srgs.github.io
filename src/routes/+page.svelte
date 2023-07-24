<script lang="ts">
	import Voronoi from '$lib/Voronoi.svelte';
	import { testimonials } from '$lib/testimonial';
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

	<span class="anchor" id="testimonials" />
	<h2>Testimonials</h2>

	<div class="testimonial-container">
		{#each testimonials as testimonial}
			<div class="testimonial">
				<span class="quote">‘‘</span>
				<p>{testimonial.quote}</p>
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
			width: 30rem;
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

			.quote {
				font-weight: 600;
				font-size: 5rem;
				padding: 0;
				height: 4rem;
			}

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

	@media (max-width: 600px) {
		h1 {
			font-size: 3rem;
		}

		h2 {
			font-size: 3rem;
		}

		div.hero {
			padding: 2rem;
			width: calc(100% - 4rem);
			padding-top: 10rem;
		}
	}
</style>
