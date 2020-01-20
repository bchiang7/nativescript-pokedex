<template>
  <FlexboxLayout
    justifyContent="space-between"
    alignItems="center"
    class="wrapper"
  >
    <Button
      @tap="back"
      text="←"
      class=""
    />

    <FlexboxLayout
      class="lines"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <StackLayout class="line" height="2" />
      <StackLayout class="line" height="2" />
      <StackLayout class="line" height="2" />
      <StackLayout class="line" height="2" />
    </FlexboxLayout>

    <Button
      @tap="forward"
      text="→"
      class=""
    />
  </FlexboxLayout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'FrameBottom',

  computed: {
    ...mapState(['view', 'viewHistory']),
  },

  methods: {
    back() {
      this.$store.dispatch('back');
    },

    forward() {
      this.$store.dispatch('forward');
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 150;
  margin: 10 0;
}
.lines {
  width: 50;

  .line {
    width: 100%;
    height: 2;
    background-color: $black;
    margin: 2 auto;
  }
}
button {
  font-size: 30;
}
</style>
