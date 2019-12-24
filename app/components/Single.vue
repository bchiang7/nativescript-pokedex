<template>
  <StackLayout v-if="single" class="container">
    <FlexboxLayout justifyContent="space-between">
      <Label :text="name || single.name" class="name" />
      <Label :text="`#${formatNum(id)}`" class="number" />
    </FlexboxLayout>

    <Image :src="single.sprites.front_default" width="100%" />

    <FlexboxLayout class="types" justifyContent="center">
      <Label
        v-for="type in single.types"
        :key="type.slot"
        :text="type.type.name"
        textWrap="true"
        class="type"
      />
    </FlexboxLayout>

    <StackLayout class="stats">
      <Label :text="`Weight: ${single.weight}kg`" />

      <Label
        v-if="singleSpecies"
        :text="description"
        textWrap="true"
        class="description"
      />
    </StackLayout>
  </StackLayout>
</template>

<script>
import { mapState } from 'vuex';
import { formatNum } from '@/utils';

export default {
  name: 'List',

  props: {
    id: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      formatNum,
    };
  },

  computed: {
    ...mapState(['single', 'singleSpecies']),

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
.name {
  text-transform: uppercase;
}
.types {
  margin: 0 0 20;
  .type {
    margin-right: 5;
    font-family: $ff-nunito;
    text-transform: capitalize;
    background-color: $blue;
    border-radius: 3;
    padding: 2 7;
    font-size: 14;
    color: $white;
  }
}
.stats {
  font-family: $ff-nunito;

  .description {
    font-size: 14;
    margin-top: 20;
  }
}
</style>
