<div>
	<h1><a href="/">DUFM</a></h1>
	<a href="#what">What we do</a>
</div>

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

	@media (max-width: 600px) {
		div {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
		}

		h1 {
			margin-bottom: 0.5rem;
		}

		a {
			margin-left: 0;
		}
	}
</style>
