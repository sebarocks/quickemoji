<script>
    import ButtonEmoji from "./ButtonEmoji.svelte";
    import { showGroup } from './stores.js';

    export let emojis;

</script>

<section id="emojigrid">
    {#each emojis as emoji}    
        <ButtonEmoji emoji={emoji}></ButtonEmoji>
    {/each} 
</section>

