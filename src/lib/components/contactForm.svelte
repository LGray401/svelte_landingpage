<script>
    export let contactformHeading;
    import IntersectionObserver from "./IntersectionObserver.svelte";
    import {blur} from 'svelte/transition';
</script>

<IntersectionObserver let:intersecting={intersecting} top={-250} once={true}>
  {#if intersecting}
<div id="contact-form" transition:blur="{{delay:200, amount: 10, duration:1500}}">

 
    <div class="form-header">
      <h1 >{contactformHeading}</h1>
    </div>
  
    <form action="submit">
      
        <select class="contact" type="text" placeholder="" name="">
          <option value="Herr">Herr</option>
          <option value="Herr">Frau</option>
          <option value="Herr">Divers</option>
        </select>
        <input class="contact" type="text" placeholder="Firma*" name="">
      
        <input class="contact" type="text" placeholder="Vorname*" name="">
        <input class="contact" type="text" placeholder="Nachname*" name="">
      
        <input class="contact" type="text" placeholder="Adresse*" name="">
        <input class="contact" type="text" placeholder="Postleihzahl*" name="">
      
        <input class="contact" type="text" placeholder="Ort*" name="">
        <input class="contact" type="text" placeholder="Email*" name="">
     
      
        <input class="contact" type="text" placeholder="Telefon*" name="">
        <input class="contact" type="text" placeholder="Anmerkungen" name="">
        <div class="datenschutz">
          <input class="checkbox" type="checkbox" name="datenschutz"> 
          <label for="datenschutz">Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden.
          </label>
        </div>
        <button type="submit" id="btn-submit"class="btn">Anfrage Senden</button>
       
    </form>
    
  </div>
  {/if}
</IntersectionObserver>
  <style>
      .form-header{
	display: flex;
	justify-content: center;
	margin-top: 2em;
	margin-bottom: 1.5em;
}

form{
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1em;
}

.contact{
	width: 28em;
	height: 2em;
	padding: .5em;
	border-radius: .5em;
	border: .1em solid gray;
	box-shadow: .2em .2em .4em .2em lightgray;
	box-sizing: content-box;
}

.datenschutz{
	margin: 1em 4em 1em 5em;
}

form > button {
	
	align-self: flex-start;
}

@media only screen and (max-width: 600px) {
  .form-header{
		text-align: center;
	}

	.datenschutz{
		margin: 1em .8em 0.5em .8em;
	}
	#btn-submit {
		width: 100%;
		align-self: center;
	}
      }
  </style>