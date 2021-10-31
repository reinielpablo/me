<template>
  <b-row id="data_science">
    <b-row id="ds_nav" class="centrify">
      <b-col class="nav-items centrify" @click="setDataSciencePage('home')">
        <i class="fas fa-home"></i>
      </b-col>
      <b-col class="nav-items centrify" @click="setDataSciencePage('mooe')">
        <i class="fas fa-book"></i>
      </b-col>
      <b-col class="nav-items centrify" @click="setDataSciencePage('spotify')">
        <i class="fab fa-spotify"></i>
      </b-col>
      <b-col class="nav-items centrify" @click="setDataSciencePage('is_fraud')">
        <i class="far fa-credit-card"></i>
      </b-col>
      <b-col
        class="nav-items centrify"
        @click="setDataSciencePage('hire_education')"
      >
        <i class="fas fa-user-graduate"></i>
      </b-col>
      <b-col class="nav-items centrify" @click="setDataSciencePage('checkapp')">
        <i class="fas fa-stethoscope"></i>
      </b-col>
    </b-row>
  </b-row>
</template>

<script>
export default {
  name: "DataScienceHeader",
  components: {},
  data() {
    return {
      ds_page: 0,
    };
  },
  methods: {
    setDataSciencePage(page) {
      this.$store.commit("setDataSciencePage", page);
      window.scrollTo(0, 0);
    },
  },
  mounted() {},
};
</script>

<style>
#data_science {
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: var(--header-color);
  color: var(--header-base);
  height: auto;
}

#ds_nav {
  height: 6vw;
  width: 50vw;
  font-size: 2vw;
  background-color: var(--header-color);
  margin-left: 50vw;
  color: var(--header-color);
}
#ds_body {
  font-size: 2rem;
}
.nav-items {
  width: auto;
  margin-bottom: 2vw;
  height: 6vw;
  color: var(--header-base);
  cursor: pointer;
  transition: all 0.5s ease;
}

.nav-items:hover {
  opacity: 0.8;
  color: var(--header-base);
  transition: all 0.5s ease;
  transform: scale(1.2);
}

@media only screen and (max-width: 500px) {
  #ds_nav {
    height: 8vh;
    width: 100vw;
    margin-left: 10vw;
    font-size: 3.5vw;
  }

  .nav-items {
    margin: 0px;
  }
}
</style>
