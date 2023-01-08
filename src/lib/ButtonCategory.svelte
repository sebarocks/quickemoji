<script>
    import {getGroupIconEmoji} from './util.js';

    export let groupId;

    let iconEmoji = getGroupIconEmoji(groupId);
</script>

<button class="btn" type="button" on:click >{iconEmoji.unicode}<slot></slot></button>