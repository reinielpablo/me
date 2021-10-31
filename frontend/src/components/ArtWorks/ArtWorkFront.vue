<template>
  <b-container fluid class="centrify" id="art-work-all">
    <b-col cols="4" class="row-logo centrify" v-if="!isLoaded">
      <span class="dan-logo"><i class="fas fa-terminal" />dan</span>
      &nbsp;<span>| ART</span>
    </b-col>
    <b-col cols="4" class="row-button centrify" v-if="!isLoaded">
      <button id="art-work-front-button" class="centrify" @click="hideFront()">
        &nbsp;ENTER&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-chevron-right"></i
        >&nbsp;
      </button>
    </b-col>
    <b-row id="art-work-front" class="centrify" v-if="!isLoaded && randomImage">
      <img
        id="art-work-front-image"
        :src="getImage(randomImage.image)"
        alt=""
      />
    </b-row>
    <!-- <art-work-main v-else-if="isLoaded"></art-work-main> -->
  </b-container>
</template>

<script>
// import ArtWorkMain from "@/views/projects/artworks/ArtWorkMain";
import ArtList from "@/assets/artworks/artlist.json";
export default {
  name: "ArtWorkFront",
  components: {
    // ArtWorkMain,
  },
  data() {
    return {
      images: ArtList,
      randomImage: null,
    };
  },
  methods: {
    getImage(path) {
      return require("@/assets/artworks/arts/" + path);
    },
    hideFront() {
      this.$store.commit("artWorkIsLoaded");
    },
  },
  mounted() {
    this.$store.commit("changeHeaderColor", "#171b25");
    this.$store.commit("changeHeaderBorder", "#171b25");
    this.$store.commit("setShowToTop", false);
    this.$store.commit("changeHeaderBase", "white");

    for (let i = this.images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.images[i];
      this.images[i] = this.images[j];
      this.images[j] = temp;
    }
    this.randomImage = this.images[0];
  },
  computed: {
    isLoaded() {
      return this.$store.state.isArtWorkLoaded;
    },
  },
};
</script>

<style>
#art-work-all {
  font-size: 1.5vw;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0px;
  padding: 0px;
}

#art-work-front {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
}

#art-work-front-image {
  position: absolute;
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: auto;
  left: 0px;
  top: -20%;
  opacity: 0.3;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 89%,
    transparent 100%
  );
}

#art-work-front-button {
  background-color: var(--header-color);
  color: var(--header-base);
  width: 12rem;
  height: 3.5rem;
  transition: all 0.5s ease;
  z-index: 20;
}

#art-work-front-button:hover,
#art-work-front-button:active {
  border: 1px solid var(--header-base);
  transition: all 0.5s ease;
  background-color: var(--header-base);
  color: var(--header-color);
}

.row-logo {
  z-index: 20;
  transform: scale(5);
  font-family: "Encode Sans Condensed", sans-serif;
  color: var(--header-base);
  text-shadow: 0px 0px 2px var(--header-color);
}

.dan-logo {
  font-family: "Quicksand", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: aqua;
}

@media only screen and (max-width: 500px) {
  #art-work-all {
    font-size: 7vw;
  }
  #art-work-front {
    overflow: hidden;
    background: "black";
  }

  #art-work-front-image {
    top: 20vw;
    opacity: 0.4;
    transform: scale(1.5);
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 50%,
      transparent 100%
    );
  }

  #art-work-front-button {
    border: 0.5px solid var(--header-base);
    transform: scale(0.6) translateX(30px);
  }

  .row-logo {
    transform: scale(1.5);
  }
}
</style>
