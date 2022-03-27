<script lang="ts">
  import type TransportationData from '../models/TransportationData';
  import type VisitData from '../models/VisitData';
  import Transportation from './Transportation.svelte';
  import Visit from './Visit.svelte';
  import ObjData from '../models/ObjData';

  export let items = [];

  function onDeleteTransportation(e: CustomEvent<TransportationData>) {
    items = items.filter(item => e.detail.id !== item.id);
  }

  function onDeleteVisit(e: CustomEvent<VisitData>) {
    items = items.filter(item => e.detail.id !== item.id);
  }

</script>

{#each items as item}
  {#if item.class === ObjData.Type.TransportationData}
    <Transportation
      obj={item}
      readonly={true}
      on:deleteObject={onDeleteTransportation}
    />
  {:else if item.class === ObjData.Type.VisitData}
    <Visit
      obj={item}
      readonly={true}
      on:deleteObject={onDeleteVisit}
    />
  {/if}
{:else}
  Your roadmap is empty. Please add an item.
{/each}
