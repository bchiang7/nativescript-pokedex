<template>
  <StackLayout class="container">
    <Label :text="`Generation ${gen}`" class="region" />

    <FlexboxLayout
      v-if="pokemon && pokemon.length > 0"
      flexWrap="wrap"
      class="list"
    >
      <StackLayout
        v-for="(item, index) in pokemon"
        :key="index"
        @tap="showSingle(index, item.name)"
        class="cell"
      >
        <StackLayout class="cell__inner">
          <Image :src="getSprite(index)" class="sprite" />
          <Label :text="`#${formatNum(index, gen)}`" class="number" />
          <Label :text="item.name" class="name" />
        </StackLayout>
      </StackLayout>
    </FlexboxLayout>
  </StackLayout>
</template>

<script>
import { mapState } from 'vuex';
import { formatNum } from '@/utils';

export default {
  name: 'List',

  props: {
    gen: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      formatNum,
      pokemon: null,
    };
  },

  computed: {
    ...mapState(['gen1', 'gen2', 'gen3', 'gen4', 'gen5']),
  },

  created() {
    this.getPokemon();
  },

  methods: {
    async getPokemon() {
      try {
        await this.$store.dispatch(`setGen${this.gen}`);

        this.pokemon =
          this.gen === 1
            ? this.gen1
            : this.gen === 2
              ? this.gen2
              : this.gen === 3
                ? this.gen3
                : this.gen === 4
                  ? this.gen4
                  : this.gen === 5
                    ? this.gen5
                    : this.gen1;
      } catch (e) {
        console.error(e);
      }
    },

    getSprite(index) {
      const num = this.formatNum(index, this.gen);
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${num}.png`;
    },

    showSingle(index, name) {
      this.$store.dispatch('setView', {
        component: 'single',
        index,
        name,
        gen: this.gen,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.region {
  margin: 20 0;
}

.list {
  width: 100%;
  justify-content: space-between;

  .cell {
    width: 33%;

    &__inner {
      padding: 10;
      text-align: center;

      .sprite {
        width: 80%;
        max-width: 50;
      }
      .number {
        font-size: 14;
        margin: 5 0;
      }
      .name {
        font-family: $ff-nunito;
        text-transform: capitalize;
        font-size: 14;
      }
    }
  }
}
</style>
