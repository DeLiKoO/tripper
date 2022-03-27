<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import TransportationData from '../models/TransportationData';

  let dispatch = createEventDispatcher<{
    createObject: TransportationData;
    updateObject: TransportationData;
    deleteObject: TransportationData;
  }>();

  // Behavioral props
  export let locked: boolean = false;
  export let readonly: boolean = false;

  // Behavioral reactive values
  $: creating = !readonly && obj.id === undefined;

  // Default object, if none is provided
  export let obj = TransportationData.newObject();

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

Transportation:
<form on:submit|preventDefault={() => handleSubmit()}>
  <input readonly={locked} placeholder="mode" bind:value={obj.mode} />
  <input
    readonly={locked}
    placeholder="distance"
    type="number"
    bind:value={obj.distance}
  />{obj.distanceUnit}
  <input
    readonly={locked}
    type="time"
    bind:value={obj.estimatedDurationInMinutes}
  />min
  {#if locked === false}
    <input type="submit" value={creating ? 'Create' : 'Update'} />
  {/if}
  {#if locked === false && creating === false}
    <input type="button" value={'Delete'} on:click={handleDelete} />
  {/if}
</form>
