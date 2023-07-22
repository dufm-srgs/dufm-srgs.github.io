<script lang="ts">
	let scrollY = 0;
</script>

<div class:short={scrollY > 0}>
	<h1><a href="/">DUFM</a></h1>
	<a href="#what">What we do</a>
	<a href="#testimonials">Testimonials</a>
</div>

<svelte:window bind:scrollY={scrollY}></svelte:window>

<style lang="scss">
	div {
		width: calc(100% - 2rem);
		padding: 1rem;
		position: fixed;
		background: #79ADDC;
		display: flex;
		justify-content: space-around;
		align-items: center;
		z-index: 1;
		max-height: 4rem;
		transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.short {
		max-height: 2.5rem;
	}

	h1 {
		font-size: 3rem;
		margin: 0;

		a {
			font-size: 3rem;
		}
	}

	a {
		font-size: 2rem;
		margin-left: 1rem;
		color: black;
	}

	@media (max-width: 700px) {
		div {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			max-height: 9rem;
		}

		h1 {
			font-size: 2rem;
		}

		a {
			font-size: 1.5rem;
			margin-left: 0;
		}

		.short {
			max-height: 8rem;
		}

		h1 {
			margin-bottom: 0.5rem;
		}

		a {
			margin-left: 0;
		}
	}
</style>
