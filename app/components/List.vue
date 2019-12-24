<template>
  <StackLayout class="container">
    <StackLayout v-if="!showSingle && gen1">
      <Label text="Generation 1" class="region" />

      <FlexboxLayout flexWrap="wrap" class="list">
        <StackLayout
          v-for="(item, index) in gen1"
          :key="index"
          @tap="showDetails(index, item.name)"
          class="cell"
        >
          <StackLayout class="cell__inner">
            <Image :src="getSprite(index)" class="sprite" />
            <Label :text="`#${formatNum(index)}`" class="number" />
            <Label :text="item.name" class="name" />
          </StackLayout>
        </StackLayout>
      </FlexboxLayout>
    </StackLayout>

    <StackLayout v-if="showSingle">
      <Single :id="singleId" :name="singleName" />
    </StackLayout>
  </StackLayout>
</template>

<script>
import { mapState } from 'vuex';
import { formatNum } from '@/utils';
import Single from '@/components/Single';

export default {
  name: 'List',

  components: {
    Single,
  },

  props: {
    gen: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      formatNum,
      showSingle: false,
      singleId: null,
      singleName: null,
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
        await this.$store.dispatch('setAllPokemon');
      } catch (e) {
        console.error(e);
      }
    },

    getSprite(index) {
      const num = this.formatNum(index);
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${num}.png`;
    },

    showDetails(index, name) {
      this.singleId = index;
      this.singleName = name;
      this.showSingle = true;
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
