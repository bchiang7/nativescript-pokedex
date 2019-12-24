<template>
  <StackLayout class="container">
    <StackLayout v-if="!showList" class="buttons">
      <Button
        @tap="onButtonTap(1)"
        text="Generation 1"
        class="button green"
      />
      <Button
        @tap="onButtonTap(2)"
        text="Generation 2"
        class="button blue"
      />
      <Button
        @tap="onButtonTap(3)"
        text="Generation 3"
        class="button red"
      />
      <Button
        @tap="onButtonTap(4)"
        text="Generation 4"
        class="button yellow"
      />
      <Button
        @tap="onButtonTap(5)"
        text="Generation 5"
        class="button green"
      />
    </StackLayout>

    <StackLayout v-if="showList">
      <List />
    </StackLayout>
  </StackLayout>
</template>

<script>
import List from '@/components/List';

export default {
  name: 'Menu',

  components: {
    List,
  },

  data() {
    return {
      showList: false,
    };
  },

  methods: {
    onButtonTap(gen) {
      console.warn('📣: onButtonTap -> gen', gen);
      this.showList = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.buttons {
  padding: 20;
}
</style>
