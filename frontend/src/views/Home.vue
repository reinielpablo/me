<template>
  <b-row class="home centrify">
    <h1>This is the home page</h1>
  </b-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  mounted() {
    this.$store.commit("changeHeaderColor", "#66fcf1");
    this.$store.commit("changeHeaderBase", "#0b0c10a2");
    this.$store.commit("changeHeaderBorder", "#66fcf1");
    this.$store.commit("setShowToTop", false);
  },
};
</script>
<style scoped>
.home {
  height: 100vh;
  background-color: var(--header-base);
}
</style>
