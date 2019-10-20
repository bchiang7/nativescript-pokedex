<template>
  <ScrollView>
    <StackLayout>
      <Label text="Kanto" />
      <StackLayout v-if="gen1">
        <FlexboxLayout flexWrap="wrap" class="list">
          <StackLayout
            v-for="(item, index) in gen1"
            :key="index"
            @tap="showDetails(getPokeNum(index, 'kanto'), item.name)"
            class="cell"
          >
            <StackLayout class="cell__inner">
              <Label :text="`#${getPokeNum(index, 'kanto')}`" />
              <Label :text="item.name" />
            </StackLayout>
          </StackLayout>
        </FlexboxLayout>
      </StackLayout>

      <Label text="Johto" />
      <StackLayout v-if="gen2">
        <FlexboxLayout flexWrap="wrap" class="list">
          <StackLayout
            v-for="(item, index) in gen2"
            :key="index"
            @tap="showDetails(getPokeNum(index, 'johto'), item.name)"
            class="cell"
          >
            <StackLayout class="cell__inner">
              <Label :text="`#${getPokeNum(index, 'johto')})`" />
              <Label :text="item.name" />
            </StackLayout>
          </StackLayout>
        </FlexboxLayout>
      </StackLayout>

      <Label text="Hoenn" />
      <StackLayout v-if="gen3">
        <FlexboxLayout flexWrap="wrap" class="list">
          <StackLayout
            v-for="(item, index) in gen3"
            :key="index"
            @tap="showDetails(getPokeNum(index, 'hoenn'), item.name)"
            class="cell"
          >
            <StackLayout class="cell__inner">
              <Label :text="`#${getPokeNum(index, 'hoenn')}`" />
              <Label :text="item.name" />
            </StackLayout>
          </StackLayout>
        </FlexboxLayout>
      </StackLayout>

      <Label text="Sinnoh" />
      <StackLayout v-if="gen4">
        <FlexboxLayout flexWrap="wrap" class="list">
          <StackLayout
            v-for="(item, index) in gen4"
            :key="index"
            @tap="showDetails(getPokeNum(index, 'sinnoh'), item.name)"
            class="cell"
          >
            <StackLayout class="cell__inner">
              <Label :text="`#${getPokeNum(index, 'sinnoh')}`" />
              <Label :text="item.name" />
            </StackLayout>
          </StackLayout>
        </FlexboxLayout>
      </StackLayout>

      <Label text="Unova" />
      <StackLayout v-if="gen5">
        <FlexboxLayout flexWrap="wrap" class="list">
          <StackLayout
            v-for="(item, index) in gen5"
            :key="index"
            @tap="showDetails(getPokeNum(index, 'unova'), item.name)"
            class="cell"
          >
            <StackLayout class="cell__inner">
              <Label :text="`#${getPokeNum(index, 'unova')}`" />
              <Label :text="item.name" />
            </StackLayout>
          </StackLayout>
        </FlexboxLayout>
      </StackLayout>
    </StackLayout>
  </ScrollView>
</template>

<script>
import { mapState } from 'vuex';
import { genOffsets } from '@/utils';
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

    getPokeNum(index, gen) {
      const { offset } = genOffsets[gen];
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
.list {
  width: 100%;
  justify-content: space-between;

  .cell {
    width: 50%;
    height: 100;
    padding: 5 10;

    &__inner {
      background-color: #eee;
      border-radius: 10;
      padding: 20;
    }

    label {
      text-transform: capitalize;
    }
  }
}
</style>
