<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import VisitData from '../models/VisitData';

  let dispatch = createEventDispatcher<{
    createObject: VisitData;
    updateObject: VisitData;
    deleteObject: VisitData;
  }>();

  // Behavioral props
  export let locked: boolean = false;
  export let readonly: boolean = false;

  // Behavioral reactive values
  $: creating = !readonly && obj.id === undefined;

  export let obj: VisitData = VisitData.newObject();

  function handleSubmit() {
    if (creating) {
      dispatch('createObject', obj);
    } else {
      dispatch('updateObject', obj);
    }
  }

  function handleDelete() {
    dispatch('deleteObject', obj);
  }
</script>

Visit:
<form on:submit|preventDefault={() => handleSubmit()}>
  <input readonly={locked} placeholder="mode" bind:value={obj.label} />
  <input readonly={locked} type="number" bind:value={obj.lat} step="0.000001" />
  <input readonly={locked} type="number" bind:value={obj.lng} step="0.000001" />
  {#if locked === false}
    <input type="submit" value={creating ? 'Create' : 'Update'} />
  {/if}
  {#if locked === false && creating === false}
    <input type="button" value={'Delete'} on:click={handleDelete} />
  {/if}
</form>
