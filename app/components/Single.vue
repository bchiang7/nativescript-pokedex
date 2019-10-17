<template>
  <Page>
    <ActionBar title="Pokédex" />
    <ScrollView>
      <StackLayout v-if="pokemon">
        <Label :text="pokemon.name" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import axios from 'axios';

export default {
  name: 'List',

  props: {
    id: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      pokemon: null,
    };
  },

  mounted() {
    this.getPokemon();
  },

  methods: {
    async getPokemon() {
      try {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        this.pokemon = pokemon.data;
        // console.log('📣: getPokemon -> this.pokemon ', JSON.stringify(this.pokemon.name));
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
