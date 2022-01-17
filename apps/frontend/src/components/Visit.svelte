<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ObjData from '../models/ObjData';
  import type { VisitData } from '../models/VisitData';

  let dispatch = createEventDispatcher<{
    createObject: VisitData;
    updateObject: VisitData;
  }>();

  export let locked: boolean = false;
  export let creating: boolean = false;

  export let label: string;
  export let lat: number;
  export let lng: number;

  function handleSubmit() {
    const visitData: VisitData = {
      class: ObjData.Type.VisitData,
      label,
      lat,
      lng,
    };
    if (creating) {
      dispatch('createObject', visitData);
    } else {
      dispatch('updateObject', visitData);
    }
  }
</script>

Visit:
<form on:submit|preventDefault={() => handleSubmit()}>
  <input readonly={locked} placeholder="mode" bind:value={label} />
  <input readonly={locked} type="number" bind:value={lat} step="0.000001" />
  <input readonly={locked} type="number" bind:value={lng} step="0.000001" />
</form>
