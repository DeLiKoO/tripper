<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ObjData from '../models/ObjData';
  import type TransportationData from '../models/TransportationData';

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

  function newObject(): TransportationData {
    const DEFAULT_VALUE: TransportationData = {
      class: ObjData.Type.TransportationData,
      mode: 'Car',
      distance: 0,
      distanceUnit: 'km',
      estimatedDurationInMinutes: 0,
    };
    let instance = {};
    Object.assign(instance, DEFAULT_VALUE);
    delete instance['id'];
    return instance as TransportationData;
  }

  // Default object, if none is provided
  export let obj = newObject();

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
