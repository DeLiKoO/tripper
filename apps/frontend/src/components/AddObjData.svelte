<script lang="ts">
  import Transportation from './Transportation.svelte';
  import Visit from './Visit.svelte';
  import Tabs from '../../lib/tabs/Tabs.svelte';
  import Tab from '../../lib/tabs/Tab.svelte';
  import TabList from '../../lib/tabs/TabList.svelte';
  import TabPanel from '../../lib/tabs/TabPanel.svelte';
  import TransportationData from '../models/TransportationData';
  import VisitData from '../models/VisitData';
  import type ObjData from '../models/ObjData';
import { createEventDispatcher } from 'svelte';

  // type CustomEventReceiver<T> = (e: CustomEvent<T>) => any;
  // type ObjDataEventReceiver<O extends ObjData<any>> = CustomEventReceiver<O>;

  // export let onCreateTransportation: ObjDataEventReceiver<TransportationData>;
  // export let onCreateVisit: ObjDataEventReceiver<VisitData>;

    let dispatch = createEventDispatcher<{
    createTransportation: TransportationData;
    createVisit: VisitData;
  }>();

</script>

<Tabs>
  <TabList>
    <Tab>Transportation</Tab>
    <Tab>Visit</Tab>
  </TabList>

  <TabPanel>
    <Transportation readonly={false} on:createObject={e => {
      const detail = TransportationData.newObject(e.detail);
      dispatch('createTransportation', detail);
    }} />
  </TabPanel>

  <TabPanel>
    <Visit readonly={false} on:createObject={e => {
      const detail = VisitData.newObject(e.detail);
      dispatch('createVisit', detail);
    }} />
  </TabPanel>
</Tabs>
