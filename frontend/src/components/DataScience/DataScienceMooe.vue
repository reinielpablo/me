<template>
  <b-row class="is_fraud">
    <base-data-science-header :details="details"></base-data-science-header>

    <base-data-science-slide
      :slide="slide"
      v-for="slide in slides"
      :key="slide.key"
      folder="mooe/"
    ></base-data-science-slide>
    <b-row class="footer"></b-row>
  </b-row>
</template>

<script>
import BaseDataScienceSlide from "@/components/DataScience/BaseDataScienceSlide";
import BaseDataScienceHeader from "@/components/DataScience/BaseDataScienceHeader";
import Slides from "@/assets/datascience/json/mooeList.json";
export default {
  name: "DataScienceMooe",
  components: {
    BaseDataScienceHeader,
    BaseDataScienceSlide,
  },
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
    this.$store.commit("changeHeaderColor", "#c9b487");
    this.$store.commit("changeHeaderBorder", "#c9b487");
    this.$store.commit("changeHeaderBase", "#2e3236");
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
