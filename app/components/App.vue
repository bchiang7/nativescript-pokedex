<template>
  <Page>
    <AbsoluteLayout>
      <TopBar />

      <StackLayout class="main" top="120">
        <FlexboxLayout class="frame">
          <FrameTop />

          <StackLayout class="screen">
            <ScrollView>
              <StackLayout>
                <Menu v-if="view === 'menu'" />
                <List v-if="view === 'list'" :gen="1" />
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

export default {
  name: 'App',

  components: {
    TopBar,
    FrameTop,
    FrameBottom,
    Menu,
    List,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState(['view']),
  },

  created() {
    this.$store.dispatch('setView', 'menu');
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
