<template>
  <Page>
    <ActionBar :title="name || single.name" />
    <ScrollView>
      <StackLayout v-if="single">
        <Label :text="`#${id}`" />
        <Label :text="name || single.name" />
        <Image :src="single.sprites.front_default" width="100%" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'List',

  props: {
    id: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
  },

  computed: {
    ...mapState(['single']),
  },

  created() {
    this.getPokemon();
  },

  methods: {
    async getPokemon() {
      try {
        await this.$store.dispatch('setSingle', this.id);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
StackLayout {
  padding: 30;
}
</style>
