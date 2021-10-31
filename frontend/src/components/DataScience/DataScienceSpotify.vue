<template>
  <b-row class="is_fraud">
    <base-data-science-header :details="details"></base-data-science-header>
    <base-data-science-slide
      :slide="slide"
      v-for="slide in slides"
      :key="slide.key"
      folder="spotify/"
    ></base-data-science-slide>
    <b-row class="footer"></b-row>
  </b-row>
</template>

<script>
import BaseDataScienceSlide from "@/components/DataScience/BaseDataScienceSlide";
import BaseDataScienceHeader from "@/components/DataScience/BaseDataScienceHeader";
import Slides from "@/assets/datascience/json/spotifyList.json";
export default {
  name: "DataScienceSpotify",
  components: {
    BaseDataScienceSlide,
    BaseDataScienceHeader,
  },
  data() {
    return {
      slides: Slides,
      details: {
        title: "Titanium Beats",
        titleIcon: "fab fa-spotify",
        subtitle: "Cohort 7 - Sprint 2 Spotify dataset",
        desc: "Exploratory Data Analysis of David Guetta and EDM using Spotify PH Dataset",
        subDesc:
          "Right Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere porro optio? Minus impedit ratione totam, odio cumque, commodi,",
        links: [
          {
            link: "https://docs.google.com/presentation/d/1fDjaEXZVDpma3M25MphIGaRCMiRtA1mn/edit#slide=id.p1",
            faIcon: "far fa-file-powerpoint",
            linkDesc: "Powerpoint Presentation",
          },
          {
            link: "https://sprint2-david-guetta-ph-strat.herokuapp.com/",
            faIcon: "fas fa-desktop",
            linkDesc: "Heroku App",
          },
        ],
      },
    };
  },
  mounted() {
    this.$store.commit("changeHeaderColor", "#d98484");
    this.$store.commit("changeHeaderBorder", "#d98484");
    this.$store.commit("changeHeaderBase", "#2a315f");
    this.$store.commit("setShowToTop", true);
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
}

.footer {
  height: 15vh;
}
</style>
