<main>
	<div class="hero">
		<h1>Real Problems, Real Math</h1>

		<p>
			Explore mathematics beyond the boundaries of high school in the Dirt Under the Fingernails
			Mathematics course at the Virginia Summer Residential Governers School.
		</p>
	</div>

	<h2>What we do</h2>

	<div id="what">
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
				new problems.
			</p>
		</div>

		<div class="section">
			<h3>Prove and Justify</h3>

			<p>
				Back up your conjectures with rigorous proofs. Learn to write proofs that are concise and
				correct. Use logic to justify your claims.
			</p>
		</div>
	</div>
</main>

<style lang="scss">
	div.hero {
		width: calc(100% - 10rem);
		text-align: center;
		padding: 5rem;
		padding-top: 7rem;
		background-color: skyblue;

		p {
			font-size: 2rem;
		}
	}

	div#what {
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

			&:nth-child(2n) {
				background: lightblue;
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
