<script>
    import ButtonEmoji from "./ButtonEmoji.svelte";
    import twemoji from 'twemoji';
    import { onMount  } from 'svelte';

    export let emojis;
    
    onMount( () => {
        let wholeGrid = document.getElementById('emojigrid');
        twemoji.parse(wholeGrid,  {
            folder: 'svg',
            ext: '.svg'
        })
     });

</script>

<section id="emojigrid">
    {#each emojis as emoji}
        <ButtonEmoji emoji={emoji}></ButtonEmoji>
    {/each} 
</section>