<script>
    export let blockHeading;
    export let blockParagraph;
    export let blockSymbol;
	
    import { fly } from 'svelte/transition';
    import IntersectionObserver from "./IntersectionObserver.svelte";
	import { marked } from 'marked';
    export let richContent = blockParagraph;
    const renderer = new marked.Renderer();
    $: pageContent = marked(richContent, { renderer });
</script>



<IntersectionObserver let:intersecting={intersecting} top={-200} once={true}>
  {#if intersecting}
<div  class="block" transition:fly="{{ x: 300, duration: 2000 }}">
    <img class="block-symbol" src={blockSymbol} alt="images\loupe.png">
    <div class="block-text">
    <h1 class="block-heading">{blockHeading}</h1>
   <h1 class="block-paragraph">{blockParagraph}</h1> 
    </div>
    
  </div>
  {:else}
  <div hidden >console</div>
  {/if}
</IntersectionObserver>
  <style>

  .block{
	display: flex;
	margin: 4em;
	margin-left: -5em;
	gap: 2em;
}



.block-symbol{
	margin-top: 2em;
	width: 3em;
	height: 3em;
}

.block-text{
	width: 40em;
	
	
}
.block-heading{
	
}
.block-paragraph{
	color: gray;
}


@media only screen and (max-width: 600px) {
  .block{
		justify-content: center;
		margin: 0;
		flex-direction: column-reverse;
		align-items: center;
		gap: .2em;
	}
	.block-symbol{
		margin-top: 0;
		margin-bottom: 1.5em;
	}

	.block-text{
		width: 90%;
		font-size: .7em;	
		
	}

	.block-heading{
		text-align: center;
	}
	.block-paragraph{
		text-align: center;
	}  
      }
  </style>