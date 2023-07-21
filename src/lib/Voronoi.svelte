<script lang="ts">
	import { onMount } from 'svelte';
	import { Canvas, Layer, t, type Render } from 'svelte-canvas';
    import * as Voronoi from "voronoi"
    import randomColor from 'randomcolor';

    let width = 640;
    let height = 640;

    $: sites = Array(20).fill(0).map(() => {
        return {
            x: Math.random() * width,
            y: Math.random() * height
        }
    })

    let render: Render;
	$: render = ({ context, width, height }) => {
        const voronoi = new Voronoi();

        const boundingBox = {
            xl: 0,
            xr: width,
            yt: 0,
            yb: height
        }
        const diagram = voronoi.compute(sites, boundingBox);

        for (const cell of diagram.cells) {
            const color = randomColor();
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
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>
