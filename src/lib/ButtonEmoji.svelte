<script>
    import {getEmojiUrl, toastOptions} from './util.js';
    import { toast } from '@zerodevx/svelte-toast'

    export let emoji;

    const url = getEmojiUrl(emoji.hexcode);

    function sendtoClipboard(emojiText) {
        navigator.clipboard.writeText(emojiText)
        .then(() => toastCopied(emojiText))
    }

    function toastCopied(emojiText){
        toast.push(`copied ${emojiText}`, toastOptions)
    }

</script>

<button title="{emoji.label}" class="emoji" type="button" on:click={() => sendtoClipboard(emoji.emoji)}>
        <img alt="{emoji.label}" src="{url}"/>
</button>


