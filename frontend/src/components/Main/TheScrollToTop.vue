<template>
  <div id="to-top" @click="onClickToTop()" v-if="toShow">
    <div id="to-top-component">
      <i class="fas fa-angle-up scroll-icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheScrollToTop",
  components: {},
  methods: {
    onClickToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    toShow() {
      return this.$store.state.showToTop;
    },
  },
};
</script>

<style scoped>
#to-top {
  position: fixed;
  bottom: 1vw;
  right: 1vw;
  padding: 0px;
  margin: 0px;
  font-size: 25px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: var(--header-base);
  color: var(--header-color);
  border: 1px solid var(--header-color);
  z-index: 100;
  cursor: pointer;
}
</style>
