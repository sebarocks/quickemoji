<script>
    import {getEmojiUrl} from './util.js';

    export let emoji;

    const url = getEmojiUrl(emoji.hexcode);
</script>

<img class="emoji" alt="{emoji.emoji}" src={url}>

