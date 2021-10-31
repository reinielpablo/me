<template>
  <b-container
    fluid
    id="app"
    :style="{
      '--header-base': headerBase,
      '--header-color': headerColor,
      '--header-border': headerBorder,
    }"
  >
    <the-front></the-front>
    <the-main></the-main>
  </b-container>
</template>

<script>
import TheFront from "@/components/Main/TheFront";
import TheMain from "@/components/Main/TheMain";

export default {
  name: "App",
  components: {
    TheMain,
    TheFront,
  },
  mounted() {
    this.$store.commit("changeHeaderColor", "#66fcf1");
    this.$store.commit("changeHeaderBase", "#0b0c10a2");
    this.$store.commit("changeHeaderBorder", "#66fcf1");
  },
  computed: {
    headerBase() {
      return this.$store.state.headerBase;
    },
    headerColor() {
      return this.$store.state.headerColor;
    },
    headerBorder() {
      return this.$store.state.headerBorder;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap");

html,
body {
  margin: 0px;
  padding: 0px;
  user-select: none;
  scroll-behavior: smooth;
}
#app {
  /* font-family: Helvetica, Avenir, Arial, sans-serif; */
  font-family: "Quicksand", sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #66fcf1;
  background-color: var(--header-base);
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  height: max(auto, 100vh);
}

button {
  appearance: none;
  background: none;
  outline: none;
  border: none;
}
.centrify {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* 
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.568);
  border: 1px solid var(--header-color);
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: var(--header-base);
  border: 1px solid var(--header-color);
  height: 20%;
} */

.dan-logo {
  font-family: "Quicksand", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: aqua;
}
</style>
