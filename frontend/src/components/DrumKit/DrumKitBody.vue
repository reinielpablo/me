<template>
  <b-row v-if="mode">
    <b-col class="centrify" v-for="key in keys" :key="key.letter">
      <base-drum-kit-key :sound="key"></base-drum-kit-key>
    </b-col>
  </b-row>
  <b-row v-else>
    <span v-for="key in keys" :key="key.letter">
      <drum-kit-timing :sound="key"></drum-kit-timing>
    </span>
  </b-row>
</template>

<script>
import DrumKitTiming from "@/components/DrumKit/DrumKitTiming";
import BaseDrumKitKey from "@/components/DrumKit/BaseDrumKitKey";
export default {
  name: "DrumKitBody",
  props: ["mode"],
  components: {
    BaseDrumKitKey,
    DrumKitTiming,
  },
  data() {
    return {
      keys: [
        {
          name: "boom",
          audio: require("@/assets/drumkit/sounds/boom.wav"),
          letter: "A",
          timing: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "clap",
          audio: require("@/assets/drumkit/sounds/clap.wav"),
          letter: "S",
          timing: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "hihat",
          audio: require("@/assets/drumkit/sounds/hihat.wav"),
          letter: "D",
          timing: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "kick",
          audio: require("@/assets/drumkit/sounds/kick.wav"),
          letter: "F",
          timing: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "openhat",
          audio: require("@/assets/drumkit/sounds/openhat.wav"),
          letter: "G",
          timing: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "ride",
          audio: require("@/assets/drumkit/sounds/ride.wav"),
          letter: "Z",
          timing: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "snare",
          audio: require("@/assets/drumkit/sounds/snare.wav"),
          letter: "X",
          timing: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "tink",
          audio: require("@/assets/drumkit/sounds/tink.wav"),
          letter: "C",
          timing: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "tom",
          audio: require("@/assets/drumkit/sounds/tom.wav"),
          letter: "V",
          timing: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
