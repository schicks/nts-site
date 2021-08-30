<script context="module" lang="ts">
	export const ssr = false;
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import type { P5 } from "../types/p5"



  export let sketch: (p5: P5) => void

  let canvas: HTMLDivElement | undefined = undefined
  let instance: unknown = undefined

  onMount(async () => {
    if (canvas) {
      const p5 = (await import('p5')).default
      console.log(canvas)
      instance = new p5(sketch, canvas)
    }
  })

</script>

<div bind:this={canvas} />