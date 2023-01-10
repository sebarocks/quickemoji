<script>
  import { filterGroup } from './lib/util.js';
  import { showGroup } from './lib/stores.js';  

  import emojis from 'emojibase-data/en/data.json';
  import messages from 'emojibase-data/en/messages.json';

  import { SvelteToast } from '@zerodevx/svelte-toast'

  import ButtonCategory from './lib/ButtonCategory.svelte';
  import EmojisGrid from './lib/EmojisGrid.svelte';

</script>

<header id="textbox">

</header>

<aside id="categories">
  {#each messages.groups as {message, order} }
    <ButtonCategory groupId={order} groupName={message} on:click={() => showGroup.set(order)}/>
  {/each}
</aside>

<main id="wholeGrid">
  {#each messages.groups as group }
    {#if group.order == $showGroup}

    <h2 class="group-title">{group.message}</h2>

    <EmojisGrid emojis={filterGroup(emojis,group.order)}/>

    {/if}
  {/each}
  
</main>

<SvelteToast />
