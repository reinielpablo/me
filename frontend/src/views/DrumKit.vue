<template>
  <b-row class="drumkit">
    <drum-kit-main></drum-kit-main>
  </b-row>
</template>

<script>
import DrumKitMain from "@/components/DrumKit/DrumKitMain.vue";
export default {
  name: "Drumkit",
  components: {
    DrumKitMain,
  },
  mounted() {
    this.$store.commit("changeHeaderColor", "#F1E3BC");
    this.$store.commit("changeHeaderBorder", "#b3890d");
    this.$store.commit("changeHeaderBase", "#b3890d");
    this.$store.commit("toggleDrumKitDisplayed", true);
    this.$store.commit("setShowToTop", false);
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("toggleDrumKitDisplayed", false);
    next();
  },
  created() {
    setInterval(() => {
      let secondsNow = new Date().getTime() / 1000;
      this.$store.commit("countUpAppTimeSeconds", secondsNow);
    }, 1000);
  },
};
</script>
<style scoped>
.home {
  height: 100vh;
  background-color: var(--header-base);
}
</style>
