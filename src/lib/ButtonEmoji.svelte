<script>
    import {getEmojiUrl} from './util.js';

    export let emoji;

    const url = getEmojiUrl(emoji.hexcode);

    function copy(emojiText) {
        navigator.clipboard.writeText(emojiText)
        .then(() => console.log(`copied ${emojiText}`))
    }

</script>

<img class="emoji" title="{emoji.label}" alt="{emoji.emoji}" on:click ={() => copy(emoji.emoji)} src={url}>

