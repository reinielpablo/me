<template>
  <b-row class="is_fraud">
    <base-data-science-header :details="details"></base-data-science-header>
    <base-data-science-slide
      :slide="slide"
      v-for="slide in slides"
      :key="slide.key"
      folder="isFraud/"
    ></base-data-science-slide>
    <b-row class="footer"></b-row>
  </b-row>
</template>

<script>
import BaseDataScienceSlide from "@/components/DataScience/BaseDataScienceSlide";
import BaseDataScienceHeader from "@/components/DataScience/BaseDataScienceHeader";
import Slides from "@/assets/datascience/json/isFraudlist.json";
export default {
  name: "DataScienceIsFraud",
  components: {
    BaseDataScienceHeader,
    BaseDataScienceSlide,
  },
  data() {
    return {
      slides: Slides,
      details: {
        title: "CODEL IS_FRAUD?",
        titleIcon: "far fa-credit-card",
        subtitle: "Cohort 7 - Sprint 3 Big Data ",
        desc: "EDA of Credit Card Information Dataset And Predicting Fraudulent TransactionsUsing Different Machine Learning Models",
        subDesc:
          "Right Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere porro optio? Minus impedit ratione totam, odio cumque, commodi,",
        links: [
          {
            link: "https://docs.google.com/presentation/d/1h56Llfx8gFcTTPIj601rNMG3sJXebzck/edit#slide=id.p1",
            faIcon: "far fa-file-powerpoint",
            linkDesc: "Powerpoint Presentation",
          },
        ],
      },
    };
  },
  mounted() {
    this.$store.commit("changeHeaderColor", "#e2dac5");
    this.$store.commit("changeHeaderBorder", "#e2dac5");
    this.$store.commit("changeHeaderBase", "#ea5431");
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
