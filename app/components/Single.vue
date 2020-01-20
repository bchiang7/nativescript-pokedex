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
      <FlexboxLayout class="section types">
        <Label
          text="Type: "
          fontWeight="bold"
          class="label"
        />

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
      </FlexboxLayout>

      <StackLayout v-if="singleEvolution" class="section evolution-chain">
        <Label
          text="Evolution"
          fontWeight="bold"
          class="label"
        />

        <FlexboxLayout v-if="singleEvolution.chain.evolves_to.length > 0">
          <Label
            v-for="(evolution, i) in evoChain"
            :key="i"
            textWrap="true"
            class="evolution"
          >
            <FormattedString>
              <Span :text="evolution.name" />
              <Span v-if="i !== evoChain.length - 1" class="arrow"> → </Span>
            </FormattedString>
          </Label>
        </FlexboxLayout>
      </StackLayout>

      <FlexboxLayout class="section height-weight">
        <Label textWrap="true">
          <FormattedString>
            <Span
              text="Height: "
              fontWeight="bold"
              class="label"
            />
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

      <StackLayout class="section abilities">
        <StackLayout>
          <Label
            text="Abilities"
            fontWeight="bold"
            class="label"
          />
        </StackLayout>
        <FlexboxLayout v-if="single.abilities.length > 0" class="list">
          <Label
            v-for="(ability, i) in single.abilities"
            :key="ability.slot"
            textWrap="true"
            class="ability"
          >
            <FormattedString>
              <Span :text="ability.ability.name" />
              <Span v-if="i !== single.abilities.length - 1">, </Span>
            </FormattedString>
          </Label>
        </FlexboxLayout>
      </StackLayout>

      <StackLayout class="section abilities">
        <StackLayout>
          <Label
            text="Description"
            fontWeight="bold"
            class="label"
          />
        </StackLayout>
        <StackLayout>
          <Label
            v-if="singleSpecies"
            :text="description"
            textWrap="true"
            class="description"
          />
        </StackLayout>
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
      evoChain: [],
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

        try {
          const evolutionChainURL = this.singleSpecies.evolution_chain.url;
          if (!evolutionChainURL) {
            return;
          }
          const urlParts = evolutionChainURL.split('/');
          const evolutionID = urlParts[urlParts.length - 2];
          await this.$store.dispatch('setSingleEvolution', evolutionID);

          this.getEvolutionChain();
        } catch (e) {
          console.error(e);
        }
      } catch (e) {
        console.error(e);
      }
    },

    getEvolutionChain() {
      let evoData = this.singleEvolution.chain;

      do {
        this.evoChain.push({ name: evoData.species.name });
        evoData = evoData['evolves_to'][0];
      } while (!!evoData && !!evoData['evolves_to']);
    },
  },
};
</script>

<style lang="scss" scoped>
.details {
  font-family: $ff-nunito;
  color: #333333;

  .label {
    color: $black;
  }
}
.header {
  margin: 10 0 0;
  .name {
    text-transform: capitalize;
  }
}
.image {
  padding: 20 50;

  .img {
    width: 50%;
    margin: 0 auto;
  }
}

.section {
  margin-bottom: 10;
}

.types {
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
  .evolution {
    text-transform: capitalize;
    .arrow {
      font-family: $ff-press-start;
      font-size: 10;
    }
  }
}

.height-weight {
  justify-content: space-between;
  label {
    width: 50%;
  }
}
.abilities {
  .ability {
    text-transform: capitalize;
  }
}
.description {
  font-size: 14;
}
</style>
