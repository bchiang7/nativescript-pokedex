<template>
  <ScrollView>
    <StackLayout class="container">
      <Label text="Gen 1: Kanto" class="region" />
      <StackLayout v-if="gen1">
        <FlexboxLayout flexWrap="wrap" class="list">
          <StackLayout
            v-for="(item, index) in gen1"
            :key="index"
            @tap="showDetails(getPokeNum(index), item.name)"
            class="cell"
          >
            <StackLayout class="cell__inner">
              <Label :text="`#${getPokeNum(index)}`" class="number" />
              <Label :text="item.name" class="name" />
            </StackLayout>
          </StackLayout>
        </FlexboxLayout>
      </StackLayout>
    </StackLayout>
  </ScrollView>
</template>

<script>
import { mapState } from 'vuex';
import { gens } from '@/utils';
import Single from '@/components/Single';

export default {
  name: 'List',

  component: {
    Single,
  },

  data() {
    return {};
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

    getPokeNum(index) {
      const { offset } = gens[0];
      return `${index + 1 + offset}`;
    },

    showDetails(id, name) {
      this.$navigateTo(Single, {
        props: { id, name },
        animated: true,
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
.container {
  padding: 20;
}

.region {
  font-family: $ff-space-mono;
  font-size: 24;
  font-weight: 700;
}

.list {
  width: 100%;
  justify-content: space-between;

  .cell {
    width: 32%;
    padding: 3;

    &__inner {
      height: 150;
      background-color: #eee;
      border-radius: 10;
      padding: 20;

      .number {
        font-family: $ff-space-mono;
        font-size: 20;
      }
      .name {
        font-size: 14;
      }
    }
  }
}
</style>
