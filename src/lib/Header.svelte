<script lang="ts">
	let scrollY = 0;
</script>

<nav class:short={scrollY > 0}>
	<h1><a href="/">DUFM</a></h1>
	<div class="links">
		<a href="#what">What we do</a>
		<a href="#about-us">About Us</a>
		<a href="#testimonials">Testimonials</a>
	</div>
</nav>

<svelte:window bind:scrollY />

<style lang="scss">
	nav {
		width: calc(100% - 2rem);
		padding: 1rem;
		position: fixed;
		background: #79addc;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 1;
		max-height: 4rem;
		transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.links {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-grow: 1;
	}

	.short {
		max-height: 2.5rem;
	}

	a {
		font-size: 2rem;
		margin-left: 1rem;
		color: black;
	}

	h1 {
		font-size: 3rem;
		margin: 0;
		margin-right: 1rem;

		a {
			font-size: 3rem;
		}
	}

	@media (max-width: 800px) {
		a {
			font-size: 1.5rem;
		}

		h1 {
			font-size: 2.5rem;
		}
	}

	@media (max-width: 670px) {
		div {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			max-height: 9rem;
		}

		a {
			font-size: 1.1rem;
			margin-left: 0;
		}

		h1 {
			margin-bottom: 0.5rem;

			a {
				font-size: 2rem;
			}
		}

		.short {
			max-height: 8rem;
		}
	}
</style>
