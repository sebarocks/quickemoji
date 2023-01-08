<script>
  import { filterGroup } from './lib/util.js';
  import { showGroup } from './lib/stores.js';

  import emojis from 'emojibase-data/en/data.json';
  import messages from 'emojibase-data/en/messages.json';

  import ButtonCategory from './lib/ButtonCategory.svelte';
  import EmojisGrid from './lib/EmojisGrid.svelte';

</script>

<header>
  {#each messages.groups as {message, order} }
    <ButtonCategory groupId={order} on:click={() => showGroup.set(order)}>
      {message}
    </ButtonCategory>
  {/each}
</header>

<main id="wholeGrid">
  {#each messages.groups as {order} }
    <EmojisGrid groupId={order} emojis={filterGroup(emojis,order)}/>
  {/each}
  
</main>


