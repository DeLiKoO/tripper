<script lang="ts">
  import Transportation from './Transportation.svelte';
  import Visit from './Visit.svelte';
  import Tabs from '../../lib/tabs/Tabs.svelte';
  import Tab from '../../lib/tabs/Tab.svelte';
  import TabList from '../../lib/tabs/TabList.svelte';
  import TabPanel from '../../lib/tabs/TabPanel.svelte';
  import type TransportationData from '../models/TransportationData';
  import type { VisitData } from '../models/VisitData';

  export let onCreateTransportation: (
    e: CustomEvent<TransportationData>
  ) => any;
  export let onCreateVisit: (e: CustomEvent<VisitData>) => any;
</script>

<Tabs>
  <TabList>
    <Tab>Transportation</Tab>
    <Tab>Visit</Tab>
  </TabList>

  <TabPanel>
    <Transportation readonly={false} on:createObject={onCreateTransportation} />
  </TabPanel>

  <TabPanel>
    <Visit readonly={false} on:createObject={onCreateVisit} />
  </TabPanel>
</Tabs>
