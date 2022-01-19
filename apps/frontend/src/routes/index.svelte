<script lang="ts">
  import AddObjData from '../components/AddObjData.svelte';
  import Roadmap from '../components/Roadmap.svelte';
  import type TransportationData from '../models/TransportationData';
  import type VisitData from '../models/VisitData';

  type ObjData = TransportationData | VisitData;

  let trip: ObjData[] = [];
  const onCreateTransportation = (e: CustomEvent<TransportationData>) => {
    console.log({e});
    trip.push(e.detail);
    trip = trip; // Trigger svelte's reactivity
  };
  const onCreateVisit = (e: CustomEvent<VisitData>) => {
    console.log({e});
    trip.push(e.detail);
    trip = trip; // Trigger svelte's reactivity
  };
</script>

<h1>Current Roadmap</h1>
<Roadmap items={trip} />
<!--
    <Transportation mode="Car" distance={20} distanceUnit="km" estimatedDurationInMinutes={1} on:createObject={onCreateTransportation} />
    <Visit label="Los Angeles International Airport" lat={33.942449} lng={-118.410452} on:createObject={onCreateVisit} />
-->

<h1>New Item</h1>
<AddObjData
  on:createTransportation={onCreateTransportation}
  on:createVisit={onCreateVisit}
/>
