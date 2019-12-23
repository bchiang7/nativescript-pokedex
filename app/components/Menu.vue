<template>
  <StackLayout>
    <Button
      @tap="onButtonTap"
      text="Generation 1"
      class="button green"
    />
    <Button
      @tap="onButtonTap"
      text="Generation 2"
      class="button blue"
    />
    <Button
      @tap="onButtonTap"
      text="Generation 3"
      class="button red"
    />
    <Button
      @tap="onButtonTap"
      text="Generation 4"
      class="button yellow"
    />
    <Button
      @tap="onButtonTap"
      text="Generation 5"
      class="button green"
    />
  </StackLayout>
</template>

<script>
export default {
  name: 'Menu',

  data() {
    return {};
  },

  methods: {
    onButtonTap(e) {
      console.warn('📣: onButtonTap -> e', e);
    },
  },
};
</script>

<style lang="scss"></style>
