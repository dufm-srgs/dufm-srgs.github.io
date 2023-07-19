<script lang="ts">
	import { Canvas, Layer, t, type Render } from 'svelte-canvas';

    let width = 640;
    let height = 640;

    let render: Render;
	$: render = ({ context, width, height }) => {
		context.fillStyle = `hsl(${$t / 40}, 100%, 50%)`;
		context.beginPath();
		context.arc(($t / 4) % width, ($t / 4) % height, 100, 0, Math.PI * 2);
		context.fill();
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
    }
</style>
