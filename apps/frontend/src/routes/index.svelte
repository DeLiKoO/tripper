<script lang="ts">
import Visit from "../components/Visit.svelte";
import Transportation from "../components/Transportation.svelte";
import type VisitData from "../models/VisitData";
import type TransportationData from "../models/TransportationData";
import AddObjData from "../components/AddObjData.svelte";

type ObjData = TransportationData | VisitData;

let trip: ObjData[] = [];
const onCreateTransportation = (e: CustomEvent<TransportationData>) => {
    trip.push(e.detail);
}
const onCreateVisit = (e: CustomEvent<VisitData>) => {
    trip.push(e.detail);
}
</script>
<h1>Current Roadmap</h1>

<!--
    <Transportation mode="Car" distance={20} distanceUnit="km" estimatedDurationInMinutes={1} on:createObject={onCreateTransportation} />
    <Visit label="Los Angeles International Airport" lat={33.942449} lng={-118.410452} on:createObject={onCreateVisit} />
-->

<h1>New Item</h1>
<AddObjData />
