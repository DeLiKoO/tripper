<script lang="ts">
  import Transportation from './Transportation.svelte';
  import Visit from './Visit.svelte';
  import Tabs from './Tabs.svelte';

  // List of tab items with labels, values and assigned components
  let items = [
    { label: 'Transportation', value: 1, component: Transportation },
    { label: 'Visit', value: 2, component: Visit },
  ];
</script>

<Tabs {items} />
