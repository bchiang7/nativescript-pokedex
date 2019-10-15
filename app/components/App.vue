<template>
  <Page>
    <ActionBar title="Pokédex" />
    <List />
  </Page>
</template>

<script>
import List from '@/components/List';

export default {
  name: 'App',

  components: {
    List,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
ActionBar {
  background-color: $red;
  color: $white;
}
</style>
