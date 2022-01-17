<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import ObjData from "../models/ObjData";
	import type { TransportationData } from "../models/TransportationData";
	
	let dispatch = createEventDispatcher<{
		createObject: TransportationData,
		updateObject: TransportationData,
	}>();

	export let locked: boolean = false;
	export let creating: boolean = false;

	export let mode: string;
	export let distance: number;
	export let distanceUnit: "mi" | "km";
	export let estimatedDurationInMinutes: number;
	// export let departureTime: Date;
	// export let fromTimezone: string;
	// export let arrivalTime: Date;
	// export let toTimezone: string;
	
	function handleSubmit() {
		const transportationData: TransportationData = {
			class: ObjData.Type.TransportationData,
			mode,
			distance,
			distanceUnit,
			estimatedDurationInMinutes,
		};
		if(creating) {
			dispatch('createObject', transportationData);
		} else {
			dispatch('updateObject', transportationData);
		}
	}
</script>

Transportation: 
<form on:submit|preventDefault={() => handleSubmit()}>
	<input readonly={locked} placeholder="mode" bind:value={mode}>
	<input readonly={locked} placeholder="distance" type="number" bind:value={distance}>{distanceUnit}
	<input readonly={locked} type="time" bind:value={estimatedDurationInMinutes}>min
</form>
                                                                                                                                      