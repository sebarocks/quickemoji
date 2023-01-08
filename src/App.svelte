<script>
  import {filterGroup} from './lib/util.js';

  import emojis from 'emojibase-data/en/compact.json';
  import messages from 'emojibase-data/en/messages.json';
  import ButtonCategory from './lib/ButtonCategory.svelte';

  import EmojisGrid from './lib/EmojisGrid.svelte';

  let smileys = filterGroup(emojis,0);

  let loadGroup = (groupId) =>{
    console.log(groupId);
    smileys = filterGroup(emojis, groupId);
  };

</script>

<header>
  {#each messages.groups as {message, order} }
    <ButtonCategory groupId={order} on:click={() => loadGroup(order)}>{message}</ButtonCategory>
  {/each}
</header>

<main>
  <EmojisGrid emojis={smileys}/>
</main>


