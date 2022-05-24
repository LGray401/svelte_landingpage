<script>
    import Headerblock from "../lib/components/headerblock.svelte";
    import BigTextBlocks from "../lib/components/bigTextBlocks.svelte";
    import MetricsBox from "../lib/components/metricsBox.svelte";
    import ContactForm from "../lib/components/contactForm.svelte";
</script>



<Headerblock/>
<main>
    <div class="overview">
        <BigTextBlocks 
        blockHeading="Standortbestimmung"
        blockParagraph="Effiziente Informationssammlung und detaillierte Ursachenanalysen zur Bestimmung des Status-Quo Ihrer SQL Server-Umgebung."
        blockSymbol="\images\loupe.png"
        />
        <BigTextBlocks 
        blockHeading="Optimierungskonzept"
        blockParagraph="30 Jahre SQL-Expertise resultieren in Ihrem individuellen Auswertungsbericht mit konkreten Handlungsempfehlungen zur SQL-Optimierung."
        blockSymbol="\images\wireframe.png"
        />
        <BigTextBlocks 
        blockHeading="Optimale Performance"
        blockParagraph="Garantierte Performance-Optimierung von mindestens 30% nach Umsetzung des Handlungskonzepts mit dem sqlXpert Team."
        blockSymbol="\images\magic-wand.png"
        />
    </div>
    <div class="flex">
        <MetricsBox
        boxMain="30"
        boxUnder="Jahre Erfahrung"
        delayAnimation="250"
        />
        <MetricsBox
        boxMain="30"
        boxUnder="Kostenersparnis"
        delayAnimation="500"
        />
        <MetricsBox
        boxMain=">250"
        boxUnder="zufriedene Kunden"
        delayAnimation="7500"
        />
    </div>
    <ContactForm
    contactformHeading="UNVERBINDLICHE PERFORMANCE-ERSTBERATUNG"
    />
</main>

<style>
    .overview
    {
	margin-top: 0em;
	margin-bottom: 2em;
	}

    main{
	max-width: 50em;
	margin-left: auto;
	margin-right: auto;
    }

    .flex {
	max-width: 100vw;
	display: flex;
	gap: 2em;
	margin: 1em;	
	justify-content: center;
}

    :global(body){
        font-family: Arial, Helvetica, sans-serif;
	font-size: 100%;
	word-spacing: 0.3rem;
	margin: 0;
	background-color: #E5E6E2;
    }
    :global(a){
        color: inherit;
	text-decoration: none;
    }

@media only screen and (max-width: 600px) {
    main{
		max-width: 95%;
		margin-left: auto;
		margin-right: auto;
	}
    #overview{
	margin-top: 0em;
	margin-bottom: 2em;
	}
    .flex{
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
    }
    
}
</style>