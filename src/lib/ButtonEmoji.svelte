<script>
    import {getEmojiUrl} from './util.js';

    export let emoji;

    const url = getEmojiUrl(emoji.hexcode);

    function sendtoClipboard(emojiText) {
        navigator.clipboard.writeText(emojiText)
        .then(() => console.log(`copied ${emojiText}`))
    }

</script>

<button title="{emoji.label}" class="emoji" type="button" on:click={() => sendtoClipboard(emoji.emoji)}>
        <img alt="{emoji.label}" src="{url}"/>
</button>
