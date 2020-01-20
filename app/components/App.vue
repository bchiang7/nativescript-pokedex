<template>
  <Page actionBarHidden="true">
    <AbsoluteLayout>
      <TopBar />

      <StackLayout class="main" top="120">
        <FlexboxLayout class="frame">
          <FrameTop />

          <StackLayout class="screen">
            <ScrollView height="100%">
              <StackLayout>
                <Menu v-if="view.component === 'menu'" />
                <List v-if="view.component === 'list'" :gen="view.gen" />
                <Single
                  v-if="view.component === 'single'"
                  :index="view.index"
                  :name="view.name"
                  :gen="view.gen"
                />
              </StackLayout>
            </ScrollView>
          </StackLayout>

          <FrameBottom />
        </FlexboxLayout>
      </StackLayout>
    </AbsoluteLayout>
  </Page>
</template>

<script>
import { mapState } from 'vuex';

import TopBar from '@/components/TopBar';
import FrameTop from '@/components/FrameTop';
import FrameBottom from '@/components/FrameBottom';
import Menu from '@/components/Menu';
import List from '@/components/List';
import Single from '@/components/Single';

export default {
  name: 'App',

  components: {
    TopBar,
    FrameTop,
    FrameBottom,
    Menu,
    List,
    Single,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState(['view']),
  },

  created() {
    this.$store.dispatch('setView', { component: 'menu' });
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 85%;
  padding: 15;
}

.frame {
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: $off-white;
  border-color: $grey;
  border-width: 2 2 5 2;
  border-radius: 15;
  padding: 0 20;
}

.screen {
  width: 100%;
  height: 100%;
  background-color: $baby-blue;
  border-radius: 10;
  border-color: $black;
  border-width: 2;
}
</style>
