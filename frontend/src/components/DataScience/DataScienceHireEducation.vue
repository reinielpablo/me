<template>
  <b-row class="is_fraud">
    <base-data-science-header :details="details"></base-data-science-header>
    <base-data-science-slide
      :slide="slide"
      v-for="slide in slides"
      :key="slide.key"
      folder="hire_education/"
    ></base-data-science-slide>
    <b-row class="footer"></b-row>
  </b-row>
</template>

<script>
import BaseDataScienceSlide from "@/components/DataScience/BaseDataScienceSlide";
import BaseDataScienceHeader from "@/components/DataScience/BaseDataScienceHeader";
import Slides from "@/assets/datascience/json/hireEducationList.json";
export default {
  name: "DataScienceHireEducation",
  components: {
    BaseDataScienceHeader,
    BaseDataScienceSlide,
  },
  data() {
    return {
      slides: Slides,
      details: {
        title: "Hire Education",
        titleIcon: "fas fa-user-graduate",
        subtitle: "Cohort 7 - Sprint 4 Scraping & NLP",
        desc: "Online course recommender for 'Data Science' using web scraping and NLP",
        subDesc:
          "Right Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere porro optio? Minus impedit ratione totam, odio cumque, commodi,",
        links: [
          {
            link: "https://docs.google.com/presentation/d/1pyTkMu7-pH7-fmbHDhf6MO9CUtgb9-Etrx6FDcevAGQ",
            faIcon: "far fa-file-powerpoint",
            linkDesc: "Powerpoint Presentation",
          },
          {
            link: "https://share.streamlit.io/heide-b/sprint4_dsc7_team2/main/Hire_Education.py",
            faIcon: "fas fa-desktop",
            linkDesc: "Heroku App",
          },
        ],
      },
    };
  },
  mounted() {
    this.$store.commit("changeHeaderBase", "#3d2f30");
    this.$store.commit("changeHeaderBorder", "#e2c0b5");
    this.$store.commit("changeHeaderColor", "#e2c0b5");
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
