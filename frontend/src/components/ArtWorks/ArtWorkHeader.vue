<template>
  <b-row id="art-work-header" class="centrify">
    <b-col @click="setMode(0)" class="art-header-col centrify"> About</b-col>
    <b-col @click="setMode(1)" class="art-header-col centrify">Gallery</b-col>
    <b-col @click="setMode(2)" class="art-header-col centrify">Slideshow</b-col>
  </b-row>
</template>

<script>
export default {
  name: "ArtWorkHeader",
  components: {},
  methods: {
    setMode(mode) {
      this.$store.commit("setArtWorkPage", mode);
      this.$router.push("/projects/artworks/");
    },
  },
  mounted() {},
};
</script>

<style scoped>
#art-work-header {
  height: auto;
  width: 50vw;
  border-bottom: 2px solid var(--header-base);
  font-size: 1vw;
}

.art-header-col {
  cursor: pointer;
  transition: all 0.5s ease;
  border-top: 1px solid var(--header-base);
  height: 3vw;
}

.art-header-col:hover {
  cursor: pointer;
  color: var(--header-color);
  background-color: var(--header-base);
  transition: all 0.5s ease;
}

@media only screen and (max-width: 500px) {
  #art-work-header {
    width: 80vw;
    margin: 0px 0px;
    margin-left: auto;
    position: relative;
    left: 0px;
    border-bottom: none;
    font-size: 3vw;
    font-weight: 400;
  }
  .art-header-col {
    border-top: none;
    height: 10vw;
  }
  .art-header-col:hover {
    transition: all 0.5s ease;
  }
}
</style>
