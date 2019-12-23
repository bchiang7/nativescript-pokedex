<template>
  <Page>
    <AbsoluteLayout>
      <TopBar />

      <StackLayout class="frame-container" top="120">
        <FlexboxLayout
          class="frame"
          flexDirection="column"
          justifyContent="space-between"
        >
          <FlexboxLayout
            class="dots"
            justifyContent="center"
            alignItems="center"
          >
            <StackLayout class="dot left" />
            <StackLayout class="dot right" />
          </FlexboxLayout>

          <StackLayout class="screen">
            <ScrollView>
              <StackLayout>
                <Label text="this" />
                <Label text="text" />
                <Label text="scrolls" />
                <Label text="horizontally" />
                <Label text="if necessary" />
                <Label text="this" />
                <Label text="text" />
                <Label text="scrolls" />
                <Label text="horizontally" />
                <Label text="if necessary" />
                <Label text="this" />
                <Label text="text" />
                <Label text="scrolls" />
                <Label text="horizontally" />
                <Label text="if necessary" />
                <Label text="this" />
                <Label text="text" />
                <Label text="scrolls" />
                <Label text="horizontally" />
                <Label text="if necessary" />
                <Label text="this" />
                <Label text="text" />
                <Label text="scrolls" />
                <Label text="horizontally" />
                <Label text="if necessary" />
                <Label text="if necessary" />
                <Label text="this" />
                <Label text="text" />
                <Label text="scrolls" />
                <Label text="horizontally" />
                <Label text="if necessary" />
                <Label text="if necessary" />
                <Label text="this" />
                <Label text="text" />
                <Label text="scrolls" />
                <Label text="horizontally" />
                <Label text="if necessary" />
                <Label text="if necessary" />
                <Label text="this" />
                <Label text="text" />
                <Label text="scrolls" />
                <Label text="horizontally" />
                <Label text="if necessary" />
              </StackLayout>
            </ScrollView>
          </StackLayout>

          <StackLayout>
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
          </StackLayout>
        </FlexboxLayout>
      </StackLayout>

      <!-- <List /> -->
    </AbsoluteLayout>
  </Page>
</template>

<script>
import TopBar from '@/components/TopBar';

export default {
  name: 'App',

  components: {
    TopBar,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.frame-container {
  width: 100%;
  height: 85%;
  padding: 25 15 15;
}
.frame {
  width: 100%;
  height: 100%;
  padding: 0 20 40;
  background-color: $off-white;
  border-radius: 10;
  border-color: $dark-grey;
  border-width: 3;

  .dots {
    margin: 20 0;

    .dot {
      width: 15;
      height: 15;
      border-radius: 100%;
      background-color: $red;
      border-width: 2;
      border-color: $dark-grey;

      &.left {
        margin-right: 20;
      }
    }
  }

  .lines {
    margin: 20;

    .line {
      width: 50;
      background-color: $dark-grey;
      margin-bottom: 3;
    }
  }

  .screen {
    width: 100%;
    height: 100%;
    background-color: $baby-blue;
    border-radius: 7;
    padding: 20;
    border-color: $dark-grey;
    border-width: 2;
  }
}
</style>
