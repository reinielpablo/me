<template>
  <b-container fluid id="data_science">
    <b-row id="ds_nav" class="centrify">
      <b-col class="nav-items centrify">
        <router-link to="/projects/data_science"
          ><i class="fas fa-home"></i
        ></router-link>
      </b-col>
      <b-col class="nav-items centrify">
        <router-link to="/projects/data_science/mooe"
          ><i class="fas fa-book"></i
        ></router-link>
      </b-col>
      <b-col class="nav-items centrify">
        <router-link to="/projects/data_science/spotify"
          ><i class="fab fa-spotify"></i
        ></router-link>
      </b-col>
      <b-col class="nav-items centrify">
        <router-link to="/projects/data_science/is_fraud"
          ><i class="far fa-credit-card"></i
        ></router-link>
      </b-col>
      <b-col class="nav-items centrify">
        <router-link to="/projects/data_science/hire_education"
          ><i class="fas fa-user-graduate"></i
        ></router-link>
      </b-col>
      <b-col class="nav-items centrify">
        <router-link to="/projects/data_science/checkapp"
          ><i class="fas fa-stethoscope"></i
        ></router-link>
      </b-col>
    </b-row>
    <transition name="fade">
      <router-view id="ds_body" class="centrify" />
    </transition>
  </b-container>
</template>

<script>
export default {
  name: "DataScienceMain",
  components: {},
  mounted() {
    this.$store.commit("changeHeaderBase", "black");
    this.$store.commit("changeHeaderBorder", "black");
    this.$store.commit("changeHeaderColor", "white");
  },
};
</script>

<style>
#data_science {
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
}
.nav-items a {
  margin: 3vh 2vh;
  height: 7vw;
  color: var(--header-base);
  text-decoration: none;
  transition: all 0.5s ease;
}

.nav-items a:hover,
.nav-items a:active {
  opacity: 0.9;
  color: var(--header-base);
  transition: all 0.5s ease;
  transform: scale(1.1);
}

@media only screen and (max-width: 500px) {
  #ds_nav {
    height: 8vh;
    width: 80vw;
    margin: 0px;
    margin-left: 18vw;
    font-size: 3.5vw;
  }

  .nav-items a {
    margin: 0px;
  }
}
</style>
