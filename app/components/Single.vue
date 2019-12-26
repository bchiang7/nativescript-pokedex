<template>
  <StackLayout v-if="single" class="container">
    <FlexboxLayout justifyContent="space-between" class="header">
      <Label :text="name || single.name" class="name" />
      <Label :text="`#${formatNum(index, gen)}`" class="number" />
    </FlexboxLayout>

    <Image
      :src="single.sprites.front_default"
      width="100%"
      class="img"
    />

    <StackLayout class="details">
      <FlexboxLayout class="types" justifyContent="center">
        <Label
          v-for="type in single.types"
          :key="type.slot"
          :text="type.type.name"
          textWrap="true"
          class="type"
        />
      </FlexboxLayout>

      <StackLayout v-if="singleEvolution" class="evolution-chain">
        <Label text="Evolution" />

        <FlexboxLayout v-if="singleEvolution.chain.evolves_to.length > 0">
          <Label :text="singleEvolution.chain.species.name" />
          <Label :text="singleEvolution.chain.evolves_to[0].species.name" />

          <Label
            v-for="(evolution, i) in singleEvolution.chain.evolves_to[0].evolves_to"
            :key="i"
            :text="evolution.species.name"
            textWrap="true"
            class="evolution"
          />
        </FlexboxLayout>
      </StackLayout>

      <StackLayout class="stats">
        <FlexboxLayout>
          <Label :text="`Height: ${single.height / 10}m`" />
          <Label :text="`Weight: ${single.weight}kg`" />
        </FlexboxLayout>

        <FlexboxLayout class="abilities">
          <Label text="Abilities: " />
          <Label
            v-for="ability in single.abilities"
            :key="ability.slot"
            :text="`${ability.ability.name}, `"
            textWrap="true"
            class="ability"
          />
        </FlexboxLayout>

        <Label
          v-if="singleSpecies"
          :text="description"
          textWrap="true"
          class="description"
        />
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import { mapState } from 'vuex';
import { formatNum, gens } from '@/utils';

export default {
  name: 'Single',

  props: {
    index: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: '',
    },
    gen: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      formatNum,
    };
  },

  computed: {
    ...mapState(['single', 'singleSpecies', 'singleEvolution']),

    description() {
      return this.singleSpecies.flavor_text_entries.find(e => e.language.name === 'en').flavor_text;
    },
  },

  created() {
    this.getData();
  },

  methods: {
    async getData() {
      try {
        const { offset } = gens[this.gen - 1];
        const id = this.index + 1 + offset;

        await this.$store.dispatch('setSingle', id);
        await this.$store.dispatch('setSingleSpecies', id);
        await this.$store.dispatch('setSingleEvolution', id);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.details {
  font-family: $ff-nunito;
}
.header {
  text-transform: uppercase;
  margin: 10 0 0;
}
.types {
  margin: 0 0 20;
  .type {
    margin-right: 5;
    text-transform: capitalize;
    background-color: $blue;
    border-radius: 3;
    padding: 2 7;
    font-size: 14;
    color: $white;
  }
}
.evolution-chain {
  margin-bottom: 20;
}
.stats {
  .description {
    font-size: 14;
    margin-top: 20;
  }
}
</style>
