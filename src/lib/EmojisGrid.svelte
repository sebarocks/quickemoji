<script>
    import ButtonEmoji from "./ButtonEmoji.svelte";
    import { showGroup } from './stores.js';

    export let emojis;
    export let groupId;


</script>

<section id="emojigrid">
    {#each emojis as emoji}
    {#if $showGroup==groupId}
        <ButtonEmoji emoji={emoji}></ButtonEmoji>
    {/if}
    {/each} 
</section>

