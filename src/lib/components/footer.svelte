<script>
 // import ExampleMarkdown from "./exampleMarkdown.svelte";
import IntersectionObserver from "./IntersectionObserver.svelte";

</script>

<ExampleMarkdown markdown="# Hello from MAreatgh" />

<IntersectionObserver let:intersecting={intersecting} top={10} once={true}>
  {#if intersecting}
<footer>
    <h2 class="footer-text">Tel: +49 30 921 49 214</h2>
    <h2 class="footer-text">Email: info@sqlxpert.de</h2>
    <h2 class="footer-text"><a href="">Impressum</a></h2>
    <h2 class="footer-text"><a href="">Datenshutz</a></h2>
  </footer>
    
  {/if}
</IntersectionObserver>
  <style>
      footer{
	margin-top: 15em;
	margin-left: 2em;
	margin-right: 2em;
  margin-bottom: 2em;
	display: flex;
	justify-content: space-between;
	color: grey;
}

.blank{
  height: 400px;

}

@media only screen and (max-width: 600px) {
  footer{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-left: 1em;
		margin-right: 1em;
		margin-bottom: 1em;
	}
	.footer-text{
		margin: .2em;
	}
      }
  </style>