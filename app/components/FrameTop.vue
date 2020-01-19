<template>
  <FlexboxLayout
    class="dots"
    justifyContent="center"
    alignItems="center"
  >
    <StackLayout class="dot left" />
    <StackLayout class="dot right" />
  </FlexboxLayout>
</template>

<script>
export default {
  name: 'FrameTop',
};
</script>

<style lang="scss" scoped>
.dots {
  margin: 20 0;

  .dot {
    width: 15;
    height: 15;
    border-radius: 100%;
    background-color: $red;
    border-width: 2;
    border-color: $black;

    &.left {
      margin-right: 20;
    }
  }
}
</style>
