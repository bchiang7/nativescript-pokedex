<template>
  <Page>
    <ActionBar :title="name || single.name" />
    <ScrollView>
      <StackLayout v-if="single">
        <Label :text="`#${id}`" />
        <Label :text="name || single.name" />
        <Image :src="single.sprites.front_default" width="100%" />
        <Label :text="`Weight: ${single.weight}kg`" />
        <Label text="Types: " />
        <Label
          v-for="type in single.types"
          :key="type.slot"
          :text="type.type.name"
        />
        <Label
          v-if="singleSpecies"
          :text="description"
          textWrap="true"
        />
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
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },

  computed: {
    ...mapState(['single', 'singleSpecies']),

    description() {
      return this.singleSpecies.flavor_text_entries.find(e => e.language.name === 'en').flavor_text;
    },
  },

  created() {
    this.getPokemon();
  },

  methods: {
    async getPokemon() {
      try {
        await this.$store.dispatch('setSingle', this.id);
        await this.$store.dispatch('setSingleSpecies', this.id);
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
