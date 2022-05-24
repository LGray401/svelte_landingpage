<div class="flex" id="logo-container">
    <img class="logo" src="\images\b1d1 GmbH Logo.png">
    <img class="logo" src="\images\Conuti GmbH Logo.png">
    <img class="logo" src="\images\Fairmas GmbH Logo.png">
    <img class="logo" src="\images\RKI-Logo (1).svg" alt="">
    <img class="logo" src="\images\LeBit-Software-Consulting-GmbH-Logo.png">
    <img class="logo" src="\images\Microsoft-Partner-Silver-Partner-Logo-Silver-Data-Analyicst-Silver-Cloud-Platform.png" alt="">
</div>

<style>
    .flex {
	max-width: 100vw;
	display: flex;
	
	gap: 2em;
	margin: 1em;
	
	justify-content: center;
}
.logo {
	max-width: 25%;
	max-height: 100%;
	filter: grayscale(100%);
}
#logo-container{
	margin-top: 4em;
	height: 6vw;
}

@media only screen and (max-width: 600px) {
	#logo-container{
		
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 5.5em;
	}
    }
</style>