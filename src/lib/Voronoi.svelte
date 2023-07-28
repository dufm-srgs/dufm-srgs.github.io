<script lang="ts">
	import { Canvas, Layer, t, type Render } from 'svelte-canvas';
	import Voronoi from 'voronoi';
	import randomColor from 'randomcolor';

	let width = 640;
	let height = 640;

	const colors = Array(300)
		.fill(0)
		.map(() => randomColor());

	const generatedSites = colors.map((color) => {
		return {
			x: Math.random() * 3 - 1,
			y: Math.random() * 3 - 1,
			color
		};
	});

	$: sites = generatedSites.map((site) => ({
		...site,
		x: ((site.x * width + $t / 50) % (width * 3)) - width,
		y: site.y * height
	}));

	let render: Render;
	$: render = ({ context, width, height }) => {
		const voronoi = Voronoi ? new Voronoi() : new globalThis.Voronoi();

		const boundingBox = {
			xl: -width * 10,
			xr: 20 * width,
			yt: -height * 10,
			yb: height * 20
		};

		const { cells } = voronoi.compute(sites, boundingBox);
		for (let i = 0; i < sites.length; i++) {
			const cell = cells[i];
			const color = sites[i].color;
			context.fillStyle = color;
			context.strokeStyle = color;
			context.beginPath();
			context.moveTo(cell.halfedges[0].getStartpoint().x, cell.halfedges[0].getStartpoint().y);
			for (const halfedge of cell.halfedges) {
				context.lineTo(halfedge.getEndpoint().x, halfedge.getEndpoint().y);
			}
			context.closePath();
			context.fill();
			context.stroke();
		}
	};
</script>

<div class="container" bind:clientWidth={width} bind:clientHeight={height}>
	<Canvas {width} {height}>
		<Layer {render} />
	</Canvas>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>
