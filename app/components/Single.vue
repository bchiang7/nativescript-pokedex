<template>
  <StackLayout v-if="single" class="container">
    <FlexboxLayout justifyContent="space-between" class="header">
      <Label :text="name || single.name" class="name" />
      <Label :text="`#${formatNum(index, gen)}`" class="number" />
    </FlexboxLayout>

    <StackLayout class="image">
      <Image
        :src="
          `https://pokeres.bastionbot.org/images/pokemon/${id}.png` || single.sprites.front_default
        "
        width="100%"
        class="img"
      />
    </StackLayout>

    <StackLayout class="details">
      <StackLayout class="types">
        <Label text="Type" fontWeight="bold" />

        <FlexboxLayout class="type-list">
          <Label
            v-for="type in single.types"
            :key="type.slot"
            :text="type.type.name"
            :style="{ backgroundColor: typeColors[type.type.name] }"
            textWrap="true"
            class="type"
          />
        </FlexboxLayout>
      </StackLayout>

      <StackLayout v-if="singleEvolution" class="evolution-chain">
        <Label text="Evolution" fontWeight="bold" />

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
        <FlexboxLayout class="height-weight">
          <Label textWrap="true">
            <FormattedString>
              <Span text="Height: " fontWeight="bold" />
              <Span :text="`${single.height / 10}m`" />
            </FormattedString>
          </Label>
          <Label textWrap="true">
            <FormattedString>
              <Span text="Weight: " fontWeight="bold" />
              <Span :text="`${single.weight}kg`" />
            </FormattedString>
          </Label>
        </FlexboxLayout>

        <FlexboxLayout class="abilities">
          <StackLayout>
            <Label text="Abilities: " fontWeight="bold" />
          </StackLayout>
          <StackLayout class="list">
            <Label
              v-for="ability in single.abilities"
              :key="ability.slot"
              :text="ability.ability.name"
              textWrap="true"
              class="ability"
            />
          </StackLayout>
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
import { formatNum, gens, typeColors } from '@/utils';

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
      typeColors,
      id: null,
    };
  },

  computed: {
    ...mapState(['single', 'singleSpecies', 'singleEvolution']),

    description() {
      return this.singleSpecies.flavor_text_entries.find(e => e.language.name === 'en').flavor_text;
    },
  },

  created() {
    const { offset } = gens[this.gen - 1];
    this.id = this.index + 1 + offset;
    this.getData();
  },

  methods: {
    async getData() {
      try {
        await this.$store.dispatch('setSingle', this.id);
        await this.$store.dispatch('setSingleSpecies', this.id);
        await this.$store.dispatch('setSingleEvolution', this.id);
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
  margin: 10 0 0;
  .name {
    text-transform: capitalize;
  }
}
.image {
  padding: 50;

  .img {
    width: 50%;
    margin: 0 auto;
  }
}
.types {
  margin: 0 0 20;
  .type-list {
    margin: 10 0 0;
  }
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
  .evolution {
    text-transform: capitalize;
  }
}
.stats {
  .height-weight {
    justify-content: space-between;
    margin: 0 0 10 0;
    label {
      width: 50%;
    }
  }
  .abilities {
    .list {
      flex-grow: 1;
      label {
        width: 100%;
        text-transform: capitalize;
      }
    }
  }
  .description {
    font-size: 14;
    margin: 20 0;
  }
}
</style>
