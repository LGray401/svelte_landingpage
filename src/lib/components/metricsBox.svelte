
<script>
    export let boxMain;
    export let boxUnder;
	export let delayAnimation
	import { fly } from "svelte/transition";
	import IntersectionObserver from "./IntersectionObserver.svelte";
</script>

<IntersectionObserver let:intersecting={intersecting} top={-300} once={true}>
	{#if intersecting}
<div class="box" transition:fly="{{ y:200, delay:200, duration: 2000 }}">
    <h1>{boxMain}</h1>
    <h3>{boxUnder}</h3>
  </div>
  {/if}
</IntersectionObserver>
  <style>
    .box{
	background-color: white ;
	
	display: flex;
	flex-direction: column;
	font-size: 1em;
	gap: 0.1em;
	align-items: center;
	border-radius: 0.4em;
	margin-top: 2em;
	margin-bottom: 2em;
	box-shadow: .2em .2em .4em .2em lightgray;

}



.box > h1{
	margin-bottom: 0.1em;
}
.box > h3{
	margin-top: .1em;
	
}

@media only screen and (max-width: 600px) {
	.box{
		background-color: white ;
		width: 90%;
		margin-top: .5em;
		margin-bottom: .5em;
	}
    }
  </style>