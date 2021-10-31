<template>
  <b-container fluid id="drum-kit" class="centrify">
    <b-col>
      <drum-kit-header id="drim-kit-header" class="centrify">
        <span id="color-tabs">
          <i class="fas fa-square-full bg-1" />
          <i class="fas fa-square-full bg-2" />
          <i class="fas fa-square-full bg-3" />
          <i class="fas fa-square-full bg-4" />
        </span>

        Vue JS Mini DRUM KIT<i
          :class="{
            fas: true,
            'fa-drum': true,
            'tilt-left': mode,
            'tilt-right': !mode,
            'style-icon': true,
          }"
          @click="toggleMode()"
        ></i
      ></drum-kit-header>
      <drum-kit-body
        id="drum-kit-body"
        class="centrify"
        :mode="mode"
      ></drum-kit-body>
    </b-col>
  </b-container>
</template>

<script>
import DrumKitHeader from "./DrumKitHeader.vue";
import DrumKitBody from "./DrumKitBody.vue";
export default {
  name: "DrumKitMain",
  components: {
    DrumKitHeader,
    DrumKitBody,
  },
  data() {
    return { mode: false };
  },
  methods: {
    toggleMode() {
      this.mode = !this.mode;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cute+Font&family=Fira+Sans+Extra+Condensed:wght@100;200;800&display=swap");
#drum-kit {
  font-family: "Fira Sans Extra Condensed", sans-serif;
  font-size: 5vw;
  background-color: rgb(241, 227, 188);
  width: 100vw;
  height: 100vh;
  user-select: none;
  color: rgb(211, 172, 55);
}
.fas.fa-drum {
  width: auto;
}
#drum-kit-header {
  height: 7vh;
  font-size: 10vw;
}
#drum-kit-body {
  height: 80vh;
  margin: 10px;
  background-color: rgb(216, 194, 130);
  border-radius: 20px;
}

.tilt-left {
  transform: rotate(10deg);
  transition: all 0.5s ease;
}

.tilt-right {
  transform: rotate(-10deg);
  transition: all 0.5s ease;
}
.style-icon {
  box-shadow: 0px 0px 10px rgba(255, 184, 103, 0.7);
  border-radius: 150px;
  background-color: rgb(211, 172, 55);
  border: 7px solid rgb(211, 172, 55);
  color: rgb(241, 227, 188);
}

.bg-1 {
  color: rgb(255, 203, 46);
}

.bg-2 {
  color: rgb(75, 198, 255);
}

.bg-3 {
  color: rgb(255, 75, 159);
}

.bg-4 {
  color: rgb(75, 255, 150);
}

.fas.fa-square-full {
  font-size: 20px;
  margin: 0px 3px;
}

#color-tabs {
  width: auto;
}

@media only screen and (max-width: 500px) {
  .style-icon {
    margin-left: 15px;
    border: 1px solid rgb(211, 172, 55);
  }
  .bg-1 {
    transform: scale(0.75);
    transition: all 0.5s ease;
  }

  .bg-2 {
    transform: scale(0.75);
    transition: all 0.5s ease;
  }

  .bg-3 {
    transform: scale(0.75);
    transition: all 0.5s ease;
  }

  .bg-4 {
    transform: scale(0.75);
    transition: all 0.5s ease;
  }
  #color-tabs {
    padding: 0px;
  }
}
</style>
