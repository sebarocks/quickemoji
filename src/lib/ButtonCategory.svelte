<script>
    import {getEmojiUrl, getGroupIconEmoji} from './util.js';

    export let groupId;
    export let groupName;

    let iconEmoji = getGroupIconEmoji(groupId);
    let url = getEmojiUrl(iconEmoji.hexcode)
</script>

<button class="btn" type="button" on:click >
    <img class="emoji" alt="{groupName}" src={url}>
</button>