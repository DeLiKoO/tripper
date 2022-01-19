<script lang="ts">
  import TransportationData from '../models/TransportationData';
  import Transportation from './Transportation.svelte';
  import Visit from './Visit.svelte';
  import VisitData from '../models/VisitData';

  export let items = [];

  const t = TransportationData.from;
  const v = VisitData.from;
</script>

{#each items as item}
  {#if t(item)}
    <Transportation
      obj={item}
      readonly={true}
    />
  {:else if v(item)}
    <Visit
      obj={item}
      readonly={true}
    />
  {/if}
{:else}
  Your roadmap is empty. Please add an item.
{/each}
