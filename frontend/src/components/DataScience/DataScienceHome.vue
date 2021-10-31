<template>
  <b-row class="is_fraud centrify">
    <h1>Data Science Home page</h1>
  </b-row>
</template>

<script>
import Slides from "@/assets/datascience/json/mooeList.json";
export default {
  name: "DataScienceHome",
  components: {},
  data() {
    return {
      slides: Slides,
      details: {
        title: "MOOE : The Great and the Powerful",
        titleIcon: "fas fa-book",
        subtitle: "Cohort 7 - Sprint 1 DepEd dataset",
        desc: "An exploratory analysis of the nature and effect of MOOE in PH public schools",
        subDesc:
          "Right Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere porro optio? Minus impedit ratione totam, odio cumque, commodi,",
        links: [
          {
            link: "https://docs.google.com/presentation/d/1YxbnCW98FW-RGrfqWfGglaxiAIkENGZI/",
            faIcon: "far fa-file-powerpoint",
            linkDesc: "Powerpoint Presentation",
          },
          {
            link: "https://group-2-app.herokuapp.com/",
            faIcon: "fas fa-desktop",
            linkDesc: "Heroku App",
          },
        ],
      },
    };
  },
  mounted() {
    this.$store.commit("changeHeaderBase", "black");
    this.$store.commit("changeHeaderBorder", "black");
    this.$store.commit("changeHeaderColor", "white");
    this.$store.commit("setShowToTop", false);
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("changeHeaderBase", "black");
    this.$store.commit("changeHeaderBorder", "black");
    this.$store.commit("changeHeaderColor", "white");
    next();
  },
};
</script>

<style scoped>
.is_fraud {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
}

.footer {
  height: 15vh;
}
</style>
