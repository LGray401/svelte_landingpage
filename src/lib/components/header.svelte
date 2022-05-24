<script>
    import Nav from "./nav.svelte";
</script>

<header>
    <img id="logo" src="/images/sqlXpert-Logo_rgb-300x62.png" alt="Sqlxpert_Logo">
    <Nav/>
</header>

<style>
    header
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4em;
        padding: 1em;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 3;
    }

    @media only screen and (max-width: 600px) {
        #logo{
		width: 50%;
	}
    }
</style>