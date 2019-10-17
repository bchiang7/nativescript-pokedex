<template>
  <ScrollView>
    <FlexboxLayout flexWrap="wrap" class="list">
      <StackLayout
        v-for="(item, index) in pokemon"
        :key="index"
        @tap="showDetails(index + 1)"
        class="cell"
      >
        <Label :text="`#${index + 1}`" />
        <Label :text="item.name" />
      </StackLayout>
    </FlexboxLayout>
  </ScrollView>
</template>

<script>
import axios from 'axios';
import Single from '@/components/Single';

export default {
  name: 'List',

  component: {
    Single,
  },

  data() {
    return {
      pokemon: [],
    };
  },

  mounted() {
    this.getPokemon();
  },

  methods: {
    async getPokemon() {
      try {
        const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
        this.pokemon = pokemon.data.results;
      } catch (e) {
        console.error(e);
      }
    },

    showDetails(id) {
      this.$navigateTo(Single, {
        props: { id },
        animated: true,
        // https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition
        transition: {
          name: 'slide',
          duration: 250,
          curve: 'ease',
        },
      });
    },
  },
};
</script>

<style lang="scss">
.list {
  width: 100%;
  justify-content: space-between;
  padding: 10;
}
.cell {
  padding: 20;
  margin: 5 0;
  border-radius: 10;
  background-color: #eee;
  width: 30%;
  height: 100;

  label {
    text-transform: capitalize;
  }
}
</style>
