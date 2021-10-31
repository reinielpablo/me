<template>
  <b-row id="drum-kit-timing">
    <b-col
      id="timing-title"
      cols="1"
      class="centrify"
      @click="playTitleSound()"
      >{{ sound.name }}</b-col
    >
    <b-col
      v-for="(timing, timingIndex) in sound.timing"
      :key="timingIndex"
      @click="toggleKey(timingIndex)"
      ><button
        :class="{
          'key-on': timing,
          'key-off': !timing,
          'highlight-button-1': timingIndex === getSecondsNow && timing,
          'highlight-gray-button': timingIndex === getSecondsNow && !timing,
          'bg-1': timing === 1,
          'bg-2': timing === 2,
          'bg-3': timing === 3,
          'bg-4': timing === 4,
        }"
      >
        {{ playSound(timingIndex, getSecondsNow, timing) }}
        <span v-if="timing === 1">1</span>
        <span v-if="timing === 2">2</span>
        <span v-if="timing === 3">3</span>
        <span v-if="timing === 4">4</span>
        <!-- <i v-if="timing === 1" class="fas fa-dice-one" /> -->
        <!-- <i v-if="timing === 2" class="fas fa-dice-two" /> -->
        <!-- <i v-if="timing === 3" class="fas fa-dice-three" /> -->
        <!-- <i v-if="timing === 4" class="fas fa-dice-four" /> -->
      </button></b-col
    >
  </b-row>
</template>

<script>
export default {
  name: "Template",
  props: ["sound"],
  data() {
    return {
      timeSeconds: null,
    };
  },
  methods: {
    sleep(ms, f) {
      return setTimeout(f, ms);
    },
    toggleKey(timeIndex) {
      this.sound.timing[timeIndex] = this.sound.timing[timeIndex] + 1;
      this.sound.timing[timeIndex] = this.sound.timing[timeIndex] % 5;
      this.$forceUpdate();
    },
    playTitleSound() {
      new Audio(this.sound.audio).play();
    },
    playSound(timingIndex, getSecondsNow, timing) {
      if (timingIndex === getSecondsNow && timing) {
        let beat1 = new Audio(this.sound.audio);
        let beat2 = new Audio(this.sound.audio);
        let beat3 = new Audio(this.sound.audio);
        let beat4 = new Audio(this.sound.audio);

        if (timing === 2) {
          beat1.playbackRate = 1.5;
          beat2.playbackRate = 1.5;

          beat1.play();
          setTimeout(() => {
            beat2.play();
          }, 400);
        }
        if (timing === 3) {
          beat1.playbackRate = 1.67;
          beat2.playbackRate = 1.67;
          beat3.playbackRate = 1.67;

          beat1.play();
          setTimeout(() => {
            beat2.play();
          }, 200);
          setTimeout(() => {
            beat3.play();
          }, 400);
        }
        if (timing === 4) {
          beat1.playbackRate = 1.67;
          beat2.playbackRate = 1.67;
          beat3.playbackRate = 1.67;
          beat4.playbackRate = 1.67;

          beat1.play();
          setTimeout(() => {
            beat2.play();
          }, 200);
          setTimeout(() => {
            beat3.play();
          }, 400);
          setTimeout(() => {
            beat4.play();
          }, 600);
        } else {
          beat1.playbackRate = 1;
          beat1.play();
        }
      }
    },
  },
  computed: {
    getSecondsNow() {
      return this.$store.state.appTimeSeconds % 16;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
span {
  font-family: "Anton", sans-serif;
  font-size: 150%;
}
#drum-kit-timing {
  color: var(--header-base);
  font-size: 30%;
  margin-top: 2.5px;
}

#timing-title {
  width: 6vw;
  height: 2.5vw;
  background-color: rgb(241, 227, 188);
  border-radius: 10px;
  margin: 10px;
}

button {
  width: 4vw;
  height: 3.5vw;
  appearance: none;
  background: none;
  outline: none;
  border: none;
  border-radius: 7px;
  transition: all 0.5s ease;
}
button:hover {
  transition: all 0.5s ease;
  transform: scale(0.95);
}

.key-off {
  background-color: rgb(241, 227, 188);
  transition: all 0.5s ease;
}
.key-on {
  transition: all 0.5s ease;
  background-color: rgb(199, 162, 52);
}

.highlight-button-1 {
  /* border: 4px solid rgba(238, 238, 238, 0.473); */
  box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.7);
  transform: scale(1.1);
  transition: all 0.5s ease;
}

.bg-1 {
  transition: all 0.5s ease;
  background-color: rgb(255, 203, 46);
  color: rgb(182, 136, 0);
}

.bg-2 {
  transition: all 0.5s ease;
  background-color: rgb(75, 198, 255);
  color: rgb(0, 110, 161);
}

.bg-3 {
  transition: all 0.5s ease;
  background-color: rgb(255, 75, 159);
  color: rgb(170, 0, 79);
}

.bg-4 {
  transition: all 0.5s ease;
  background-color: rgb(75, 255, 150);
  color: rgb(0, 138, 57);
}

.highlight-gray-button {
  background-color: rgb(156, 156, 156);
  transform: scale(0.8);
  transition: all 0.5s ease;
}

@media only screen and (max-width: 500px) {
  div {
    margin: 0px;
    padding: 0px;
  }
  button {
    width: 10px;
    height: 50px;
    border-radius: 2px;
    margin: 0px;
    padding: 0px;
  }

  #timing-title {
    width: 5px;
    height: 5vh;
    font-size: 3vh;
    color: var(--header-base);
    background-color: transparent;
    border-radius: 2px;
    transform: rotate(-90deg);
  }
}
</style>
