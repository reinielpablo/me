<template>
  <b-row class="pokemon centrify">
    <b-row
      class="centrify pkmn-row"
      v-for="pokemon in pokemons"
      :key="pokemon.name"
    >
      <base-sprite-image :pokemon="pokemon"></base-sprite-image>
    </b-row>
  </b-row>
</template>

<script>
// @ is an alias to /src
import BaseSpriteImage from "@/components/Pokemon/BaseSpriteImage";
export default {
  name: "Pokemon",
  components: {
    BaseSpriteImage,
  },
  data() {
    return {
      pokemons: null,
    };
  },
  mounted() {
    this.$store.commit("changeHeaderColor", "#f0f0f0");
    this.$store.commit("changeHeaderBase", "#ee1515");
    this.$store.commit("changeHeaderBorder", "#ee1515");
    this.$store.commit("setShowToTop", true);

    fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
      .then((res) => res.json())
      .then((data) => {
        this.pokemons = data.results;
      });
  },
  methods: {},
};
</script>
<style scoped>
.pokemon {
  height: auto;
  background-color: var(--header-color);
  color: var(--header-base);
  padding: 10vw 1vw 5vw 1vw;
}

.pkmn-row {
  width: auto;
  height: auto;
  padding: 0px;
  margin: 0px;
}
</style>
