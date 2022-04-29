<script lang="ts">
  import AddObjData from '../components/AddObjData.svelte';
  import Roadmap from '../components/Roadmap.svelte';
  import ObjData from '../models/ObjData';
  import type TransportationData from '../models/TransportationData';
  import type VisitData from '../models/VisitData';
  import recreateTransportationGraph from '../logic/recreateTransportationGraph'

  type ObjData = TransportationData | VisitData;
  type TRoadmap = ObjData[];

  let trip: ObjData[] = [];
  const onCreateTransportation = (e: CustomEvent<TransportationData>) => {
    console.log({e});
    trip.push(e.detail);
    trip = trip; // Trigger svelte's reactivity
  };
  
  const onCreateVisit = (e: CustomEvent<VisitData>) => {
    console.log({e});
    trip.push(e.detail);
    trip = recreateTransportationGraph(trip);
    trip = trip; // Trigger svelte's reactivity
  };

</script>

<h1>Current Roadmap</h1>
<Roadmap items={trip} />

<h1>New Item</h1>
<AddObjData
  on:createTransportation={onCreateTransportation}
  on:createVisit={onCreateVisit}
/>
