<script context="module" lang="ts">
	export const ssr = false;
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import type { P5 } from "../types/p5"



  export let sketch: Sketch | number
  export let title: string = "Sketch"
  export let width: number = 900
  export let height: number = 900
  type Sketch = (p5: P5) => void

  let canvas: HTMLDivElement | undefined = undefined
  let instance: unknown = undefined
  const sketchIsFn = (sketch: Sketch | number): sketch is Sketch => typeof sketch === 'function'

  onMount(async () => {
    if (canvas && sketchIsFn(sketch)) {
      const p5 = (await import('p5')).default
      console.log(canvas)
      instance = new p5(sketch, canvas)
    }
  })

</script>

{#if sketchIsFn(sketch)}
<div bind:this={canvas} />
{:else}
<iframe src={`https://openprocessing.org/sketch/${sketch}/embed/`} {width} {height} {title}></iframe>
{/if}