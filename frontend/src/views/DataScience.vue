<template>
  <b-row class="datascience centrify">
    <data-science-header></data-science-header>
    <data-science-home v-if="page === 'home'"></data-science-home>
    <data-science-mooe v-if="page === 'mooe'"></data-science-mooe>
    <data-science-spotify v-if="page === 'spotify'"></data-science-spotify>
    <data-science-is-fraud v-if="page === 'is_fraud'"></data-science-is-fraud>
    <data-science-hire-education
      v-if="page === 'hire_education'"
    ></data-science-hire-education>
    <data-science-check-app v-if="page === 'checkapp'"></data-science-check-app>
  </b-row>
</template>

<script>
import DataScienceHeader from "@/components/DataScience/DataScienceHeader";
import DataScienceHome from "@/components/DataScience/DataScienceHome";
import DataScienceMooe from "@/components/DataScience/DataScienceMooe";
import DataScienceSpotify from "@/components/DataScience/DataScienceSpotify";
import DataScienceIsFraud from "@/components/DataScience/DataScienceIsFraud";
import DataScienceHireEducation from "@/components/DataScience/DataScienceHireEducation";
import DataScienceCheckApp from "@/components/DataScience/DataScienceCheckApp";
export default {
  name: "DataScience",
  components: {
    DataScienceHeader,
    DataScienceHome,
    DataScienceMooe,
    DataScienceSpotify,
    DataScienceIsFraud,
    DataScienceHireEducation,
    DataScienceCheckApp,
  },
  mounted() {
    this.$store.commit("changeHeaderBase", "black");
    this.$store.commit("changeHeaderBorder", "black");
    this.$store.commit("changeHeaderColor", "white");
  },
  computed: {
    page() {
      return this.$store.state.dataSciencePage;
    },
  },
};
</script>
<style scoped>
.datascience {
  background-color: var(--header-color);
  color: var(--header-base);
}
</style>
