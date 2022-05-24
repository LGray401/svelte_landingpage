<script>
    import Logostripe from "./logostripe.svelte";
</script>


<div class="gradient ">
    <svg id="x" viewBox="0 0 303 558" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.4445 29L244.005 274.513L35 529" stroke="#93292C" stroke-width="70"/>
      </svg>
  
  <div id="header-block">
  <div class="content">
      <div class="center">
      <h1 id="heading">Kosten senken mit Performance Optimierung</h1>
        <button class="btn">Anfrage senden</button>
      </div>
    </div>
    <Logostripe></Logostripe>
</div>

</div>

<style>
    #x{
	position: absolute;
	right: -57%;
	top: -12%;
	height: 130%;
	width: 130%;
}

.gradient {
	position: relative;
	background-image: linear-gradient(#f8ab26, #E5E6E2);
	overflow: hidden;
	
}
#header-block{
	max-width: 50em;
	margin-left: auto;
	margin-right: auto;
}
.content {
	display: flex;
	align-items: flex-end;
	
	min-height: 85vh;
}
.center {
	width: 75%;
}

#heading {
	font-size: 3.5rem;
}

.btn {
	background-color: #93292c;
	border: none;
	border-radius: 0.2em;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1em;
	width: 16em;
	font-size: 1rem;
	color: white;
}

@media only screen and (max-width: 600px) {
        
	#x{
		position: absolute;
		right: -18%;
		top: -15%;
		height: 80%;
		width: 80%;
	}

	.content {
		
		display: flex;
		align-items: flex-end;
		margin: 13em 0 2em 1em;
		min-height: 50vh;
	}
	.center {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5em;
	}
	#heading {
		position: relative;
		z-index: 2;
		font-size: 2.5rem;
		align-self: flex-start;
		width: 80%;
	}

    }
</style>