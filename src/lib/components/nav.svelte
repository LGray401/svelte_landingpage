<script>
    let show = false;
    let id = null;
    let menu;
function showMenu() {
    
    if(!show){
        var elem = menu;
        let shift  = -120;
        clearInterval(id);
        id = setInterval(frame, 0.5);
        function frame(){

        if (shift == 0) {
            clearInterval(id);
        }else{
            shift++;
            elem.style.left = shift +"vw";
        }
        }
        show = true;
    }else{
        var elem = menu;
        let shift  = 0;
        clearInterval(id);
        id = setInterval(frame, 1);
        function frame(){

        if (shift == -120) {
            clearInterval(id);
        }else{
            shift--;
            elem.style.left = shift +"vw";
        }
        }
        show = false;
    }
    
  }
</script>


<div id="menu" bind:this={menu}>
    <a href=""><h2>Details</h2></a>
    <a href=""><h2>Kundenreferenzen</h2></a>
    <a href=""><h2>Kontakt</h2></a>
</div>
<button class="menu-icon" on:click={showMenu}><img src="images\hamburger.svg" alt=""></button>

<style>
    #menu
    {
        display: flex;
	    gap: 1em;
    }
    .menu-icon{
	display: none;
}
    @media only screen and (max-width: 600px) {
        #menu
        {
        width: 100vw;
		height: 100vh;
		background-color: white;
		position: fixed;
		left: -120vw;
		top: 0;
		display: flex;
		flex-direction: column;
		padding: 1em;
        }
        .menu-icon{
		border: 0ch;
		background-color: transparent;
		height: 100%;
		display: flex;
		z-index: 3;
	}

	.menu-icon > img {
		height: 70%;
	}
    }
</style>