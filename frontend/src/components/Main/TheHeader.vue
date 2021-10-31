<template>
  <b-container fluid id="nav" :class="{ 'open-header': !checkIfOpen }">
    {{ fromPropsIsOpen(isOpen) }}
    <span @click="onClickLink()">
      <b-row>
        <router-link to="/home"><i class="fas fa-home"></i> Home</router-link>
        <router-link to="/about"><i class="fas fa-user"></i> About</router-link>
      </b-row>

      <b-row>
        <router-link to="/projects/drumkit"
          ><i class="fas fa-drum"></i> Drum Kit</router-link
        >
        <router-link to="/projects/artworks"
          ><i class="fas fa-paint-brush" /> Artworks</router-link
        >
        <router-link to="/projects/data_science"
          ><i class="fas fa-chart-bar"></i> Data Science</router-link
        >
        <router-link to="/projects/pokemon"
          ><i class="fas fa-dragon"></i> Pokemon</router-link
        >
      </b-row>

      <b-row>
        <a href="/reiniel-dan/gamefront/index.html"
          ><i class="fas fa-gamepad"></i> Game Front (x)</a
        >
      </b-row>
    </span>
  </b-container>
</template>

<script>
export default {
  name: "TheHeader",
  props: ["isOpen"],
  data() {
    return {
      checkIfOpen: false,
    };
  },
  components: {},
  methods: {
    onClickLink() {
      this.fromPropsIsOpen(false);
      this.$emit("header", false);
    },
    fromPropsIsOpen(val) {
      this.checkIfOpen = val;
    },
  },
  computed: {},
};
</script>

<style scoped>
#nav {
  position: fixed;
  left: 0px;
  top: 2vh;
  /* height: 50vh; */
  width: 20vh;

  background-color: var(--header-base);
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px solid var(--header-border);
  border-left: transparent;
  transition: transform 0.5s;
  overflow: hidden;
  font-size: 1rem;
  z-index: 500;
}

a {
  color: var(--header-color);
  text-decoration: none;
  transition: font-size 0.5s;
  padding: 10px;
  /* border-bottom: 0.1px solid var(--header-color); */
}

a:hover,
a:active {
  background-color: var(--header-color);
  color: var(--header-base);
  font-size: 120%;
  transition: font-size 0.5s;
}

.open-header {
  transition: transform 0.5s;
  transform: translateX(-20vh);
}

@media only screen and (max-width: 500px) {
  #nav {
    font-size: 0.8rem;
  }
}
</style>
