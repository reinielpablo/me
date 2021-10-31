<template>
  <b-row class="is_fraud">
    <base-data-science-header :details="details"></base-data-science-header>
    <base-data-science-slide
      :slide="slide"
      v-for="slide in slides"
      :key="slide.key"
      folder="checkapp/"
    ></base-data-science-slide>
    <b-row class="footer"></b-row>
  </b-row>
</template>

<script>
import BaseDataScienceSlide from "@/components/DataScience/BaseDataScienceSlide";
import BaseDataScienceHeader from "@/components/DataScience/BaseDataScienceHeader";
import Slides from "@/assets/datascience/json/checkAppList.json";
export default {
  name: "DataScienceCheckApp",
  components: {
    BaseDataScienceHeader,
    BaseDataScienceSlide,
  },
  data() {
    return {
      slides: Slides,
      details: {
        title: "Check-App",
        titleIcon: "fas fa-stethoscope",
        subtitle: "Bootcamp Final Capstone",
        desc: "Optimizing Medical Check-ups using Machine Learning",
        subDesc:
          "Right Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere porro optio? Minus impedit ratione totam, odio cumque, commodi,",
        links: [
          {
            link: "https://docs.google.com/presentation/d/1rM4nDJl4lgbk-BL-9xeDTlfxOX3z49d5aoOoyQRfj8Y/",
            faIcon: "far fa-file-powerpoint",
            linkDesc: "Powerpoint Presentation",
          },
          {
            link: "https://www.youtube.com/watch?v=WdFQ-yIsnG0&feature=youtu.be",
            faIcon: "fab fa-youtube",
            linkDesc: "Video Presentation",
          },
          {
            link: "https://www.facebook.com/CheckAppPage",
            faIcon: "fab fa-facebook",
            linkDesc: "Facebook Page",
          },
          {
            link: "https://github.com/reidan22/check-app",
            faIcon: "fab fa-github",
            linkDesc: "Github",
          },
        ],
      },
    };
  },
  mounted() {
    this.$store.commit("changeHeaderBase", "rgb(234,234,234)");
    this.$store.commit("changeHeaderBorder", "#007985");
    this.$store.commit("changeHeaderColor", "#007985");
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
