<template>
  <StackLayout class="container">
    <Label
      text="Select a generation"
      textWrap="true"
      class="label"
    />

    <StackLayout class="buttons">
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
  </StackLayout>
</template>

<script>
export default {
  name: 'Menu',

  data() {
    return {
      showList: false,
      listGen: null,
    };
  },

  methods: {
    onButtonTap(gen) {
      this.$store.dispatch('setView', {
        component: 'list',
        gen,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  text-transform: uppercase;
  text-align: center;
  line-height: 10;
  margin: 20 auto;
}
</style>
