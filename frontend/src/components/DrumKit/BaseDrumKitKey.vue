<template>
  <button :class="{ key: true, clicked: keyClicked }" @click="playSound()">
    {{ sound.letter }}
  </button>
</template>

<script>
export default {
  name: "BaseDrumKit",
  props: ["sound"],
  components: {},
  data() {
    return {
      keyClicked: false,
    };
  },
  methods: {
    playSound() {
      this.keyClicked = true;
      new Audio(this.sound.audio).play();

      setTimeout(() => {
        this.keyClicked = false;
      }, 150);
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (
        e.key.toLowerCase() === this.sound.letter.toLowerCase() &&
        this.$store.state.isDrumKitDisplayed
      ) {
        this.playSound();
      }
    });
  },
};
</script>

<style scoped>
button {
  height: 35vh;
  width: 35vh;
  border-radius: 7px;
  font-size: 8rem;
  font-weight: 800;
  background-color: rgb(241, 227, 188);
  color: rgb(199, 162, 52);
  transition: all 0.5s ease;
}
button:hover {
  transition: all 0.5s ease;
  opacity: 0.7;
  transform: scale(0.95);
}

button:active,
button.clicked {
  transform: scale(1.1);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.7);
}

@media only screen and (max-width: 500px) {
  button {
    appearance: none;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    height: 23vh;
    width: 11vh;
    border-radius: 7px;
    font-size: 3rem;
    font-weight: 800;
    background-color: rgb(241, 227, 188);
    color: rgb(199, 162, 52);
    transition: all 0.5s ease;
  }
}
</style>
