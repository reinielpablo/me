<template>
  <transition name="slide-fade">
    <b-container
      id="front-page"
      fluid
      class="front-page"
      @click="onClickOfFrontElement()"
      v-if="showFrontElement"
    >
      <b-row class="main-front-row-2 centrify"> {{ currentHello }}! </b-row>
      <b-row class="main-front-row-1 dan-logo centrify" v-if="showFront">
        <i class="fas fa-terminal" id="front-logo" />dan
      </b-row>
      <!-- <img class="front-bg-image centrify" :src="bgImage" alt="" /> -->
    </b-container>
  </transition>
</template>

<script>
let hellos = [
  "Hello",
  "Kumusta",
  "你好",
  "今日は",
  "안녕하세요",
  "Bonjour",
  "Hola",
];
export default {
  name: "TheFront",
  components: {},
  data() {
    return {
      showFrontElement: true,
      helloArray: hellos,
      currentHello: hellos[Math.floor(Math.random() * 7)],
      bgImage: require("@/assets/background/front_element_bg.jpg"),
      showFront: true,
    };
  },
  methods: {
    onClickOfFrontElement() {
      this.showFrontElement = false;
      this.$router.push("/home", () => {});
      this.selectHelloRandomly();
    },
    selectHelloRandomly() {
      const randomNumber = Math.floor(Math.random() * 7);
      return this.helloArray[randomNumber];
    },
  },
  created() {
    setInterval(() => {
      this.currentHello = this.selectHelloRandomly();
    }, 3000);

    setInterval(() => {
      this.showFront = !this.showFront;
    }, 750);

    this.$router.push("/home");
  },
};
</script>
<style scoped>
* {
  z-index: 10;
}
.front-page {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  font-size: 15vw;
  background-color: #0b0c10;
  /* mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 89%,
    transparent 100%
  ); */
  z-index: 501;
  color: #66fcf1;
  overflow: hidden;
}
.front-bg-image {
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0.1;
  overflow: hidden;
  background-size: contain;
}

.slide-fade-leave-active {
  transition: all 1s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-100vh);
  opacity: 0;
}

.main-front-row-1 {
  width: 100vw;
  height: 45vh;
  margin: 0px;
  padding: 0px;
  font-size: 5vw;
}
.main-front-row-2 {
  width: 100vw;
  height: 45vh;
  margin: 0px;
  margin-top: 10vh;
  padding: 0px;
}

#front-logo {
  margin: 0px;
  padding: 0px;
  width: auto;
}

.hide {
  display: none;
}

@media only screen and (max-width: 500px) {
  .main-front-row-2 {
    margin-top: 30vh;
    font-size: 19.5vw;
    margin-left: -2vw;
  }

  .main-front-row-1 {
    height: 0vh;
    margin-top: -15vh;
    margin-left: -2vw;
    font-size: 6vw;
  }
}
</style>
