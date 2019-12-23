<template>
  <StackLayout
    top="0"
    height="120"
    class="docked"
  >
    <FlexboxLayout class="lights-container" alignItems="flex-start">
      <StackLayout class="big-light">
        <StackLayout class="light" height="75">
          <StackLayout class="light__inner light__inner--bg" height="55">
            <StackLayout class="light__inner light__inner--depth" height="45">
              <StackLayout class="light__inner light__inner--surface" height="35">
                <StackLayout class="light__inner light__inner--reflect" height="15" />
              </StackLayout>
            </StackLayout>
          </StackLayout>
        </StackLayout>
      </StackLayout>

      <FlexboxLayout class="three-lights" alignItems="flex-start">
        <StackLayout class="light red" height="20">
          <StackLayout class="reflect" height="5" />
        </StackLayout>
        <StackLayout class="light yellow" height="20">
          <StackLayout class="reflect" height="5" />
        </StackLayout>
        <StackLayout class="light green" height="20">
          <StackLayout class="reflect" height="5" />
        </StackLayout>
      </FlexboxLayout>
    </FlexboxLayout>
  </StackLayout>
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
.docked {
  width: 100%;
  background-color: $red;
  border-color: $dark-red;
  border-width: 0 0 7 0;
}
.lights-container {
  padding: 20;
}
.big-light {
  .light {
    width: 75;
    border-radius: 100%;
    background-color: $off-white;
    border-width: 3;
    border-color: $dark-grey;

    &__inner {
      border-radius: 100%;

      &--bg {
        width: 55;
        background-color: $sky-blue;
        margin: 7;
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
}

.three-lights {
  margin-left: 20;

  .light {
    width: 20;
    height: 20;
    border-radius: 100%;
    background-color: $off-white;
    border-width: 3;
    border-color: $dark-grey;
    margin-right: 10;

    .reflect {
      width: 5;
      border-radius: 100%;
      background-color: $off-white;
      margin: 2 7 auto auto;
    }

    &.red {
      background-color: $red;
    }
    &.yellow {
      background-color: $yellow;
    }
    &.green {
      background-color: $green;
    }
  }
}
</style>
