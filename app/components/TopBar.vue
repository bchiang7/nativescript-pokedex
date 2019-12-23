<template>
  <DockLayout stretchLastChild="false">
    <StackLayout
      dock="top"
      height="120"
      backgroundColor="#a83131"
    >
      <FlexboxLayout class="lights-container">
        <StackLayout class="light" height="70">
          <StackLayout class="light__inner light__inner--bg" height="55">
            <StackLayout class="light__inner light__inner--depth" height="45">
              <StackLayout class="light__inner light__inner--surface" height="35">
                <StackLayout class="light__inner light__inner--reflect" height="15" />
              </StackLayout>
            </StackLayout>
          </StackLayout>
        </StackLayout>
      </FlexboxLayout>
    </StackLayout>
  </DockLayout>
</template>

<script>
export default {
  name: 'TopBar',

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.lights-container {
  padding: 20;
}
.light {
  width: 70;
  border-radius: 100%;
  background-color: $off-white;
  border-width: 3;
  border-color: $dark-grey;
  position: relative;

  &__inner {
    border-radius: 100%;

    &--bg {
      width: 55;
      background-color: $sky-blue;
      margin-top: 5;
    }
    &--depth {
      width: 45;
      background-color: $dull-blue;
      margin: 7 0 auto 7;
    }
    &--surface {
      width: 35;
      background-color: $sky-blue;
      margin: 2 10 auto auto;
    }
    &--reflect {
      width: 15;
      background-color: $off-white;
      margin: 5 15 auto auto;
    }
  }
}
</style>
