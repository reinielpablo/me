<template>
  <b-row class="artwork-about centrify">
    <h1>About page for ArtWorks</h1>
  </b-row>
</template>

<script>
export default {
  name: "ArtWorkAbout",
  components: {},
  mounted() {
    this.$store.commit("setShowToTop", false);
  },
};
</script>

<style scoped>
.artwork-about {
  height: 100vh;
}
</style>
