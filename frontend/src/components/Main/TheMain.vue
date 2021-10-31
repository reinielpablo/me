<template>
  <b-container fluid id="main">
    <the-scroll-to-top></the-scroll-to-top>
    <span id="header-all" v-click-outside="onClickOutsideHeader">
      <the-header-tab
        @header-tab="isHeaderTabOpen"
        :isOpen="receivedIsTabOpen"
      ></the-header-tab>
      <the-header
        @header="closeHeaderTab"
        :isOpen="receivedIsTabOpen"
      ></the-header>
      <!-- <the-footer></the-footer> -->
    </span>
    <transition name="fade">
      <the-body></the-body>
    </transition>
  </b-container>
</template>

<script>
// import TheHeaderTab from "@/components/TheHeaderTab.vue";
// import TheHeader from "@/views/TheHeader.vue";
// import TheBody from "@/views/TheBody.vue";
import TheHeaderTab from "@/components/Main/TheHeaderTab";
import TheHeader from "@/components/Main/TheHeader";
import TheBody from "@/components/Main/TheBody";
import TheScrollToTop from "@/components/Main/TheScrollToTop";

export default {
  name: "TheMain",
  components: {
    TheHeader,
    TheBody,
    TheHeaderTab,
    TheScrollToTop,
  },
  data() {
    return {
      receivedIsTabOpen: false,
    };
  },
  methods: {
    isHeaderTabOpen(isTabOpen) {
      this.receivedIsTabOpen = isTabOpen;
    },
    closeHeaderTab(fromEmit) {
      this.receivedIsTabOpen = fromEmit;
    },
    onClickOutsideHeader() {
      this.receivedIsTabOpen = false;
    },
  },
};
</script>
<style scoped>
#main {
  margin: 0px;
  padding: 0px;
  width: 100vw;
}

#header-all {
  margin: 0px;
  padding: 0px;
  cursor: pointer;
}
</style>
