<template>
  <b-row class="artworks centrify">
    <art-work-front v-if="isLoaded === false"></art-work-front>
    <art-work-header v-if="isLoaded === true"></art-work-header>
    <art-work-about v-if="artPage === 0 && isLoaded === true"></art-work-about>
    <art-work-gallery v-if="artPage === 1"></art-work-gallery>
    <art-work-slide v-if="artPage === 2"></art-work-slide>
  </b-row>
</template>

<script>
import ArtWorkHeader from "@/components/ArtWorks/ArtWorkHeader";
import ArtWorkSlide from "@/components/ArtWorks/ArtWorkSlide";
import ArtWorkGallery from "@/components/ArtWorks/ArtWorkGallery";
import ArtWorkFront from "@/components/ArtWorks/ArtWorkFront";
import ArtWorkAbout from "@/components/ArtWorks/ArtWorkAbout";
export default {
  name: "Artworks",
  components: {
    ArtWorkHeader,
    ArtWorkSlide,
    ArtWorkGallery,
    ArtWorkFront,
    ArtWorkAbout,
  },
  mounted() {
    this.$store.commit("changeHeaderColor", "#171b25");
    this.$store.commit("changeHeaderBorder", "#171b25");
    this.$store.commit("changeHeaderBase", "white");
  },
  computed: {
    artPage() {
      return this.$store.state.artWorkPage;
    },
    isLoaded() {
      return this.$store.state.isArtWorkLoaded;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800&display=swap");
.artworks {
  background-color: var(--header-color);
  font-family: "Spartan", sans-serif;
  font-size: 3vw;
  color: var(--header-base);
}
</style>
