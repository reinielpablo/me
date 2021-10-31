<template>
  <b-row>
    <router-view v-if="isBaseArtShown"> </router-view>
    <b-row id="art-work-body" v-if="!isBaseArtShown">
      <b-col
        v-for="data in imagesShuffled"
        :key="data.key"
        class="base-image"
        :ref="'image_' + data.key"
        @click="showBaseArt()"
      >
        <router-link
          :to="'/projects/artworks/' + data.key"
          class="art-work-router"
        >
          <base-art-work-image :image="data"></base-art-work-image>
        </router-link>
      </b-col>
    </b-row>
  </b-row>
</template>

<script>
import BaseArtWorkImage from "@/components/ArtWorks/BaseArtWorkImage";
import ArtList from "@/assets/artworks/artlist.json";
export default {
  name: "ArtWorkMain",
  components: {
    BaseArtWorkImage,
  },
  data() {
    return {
      images: ArtList,
      imagesShuffled: null,
      isPageLoaded: null,
    };
  },
  methods: {
    getImage(path) {
      return require("@/assets/artworks/arts/" + path);
    },
    showBaseArt() {
      this.$store.commit("setShowBaseArt", true);
    },
  },
  mounted() {
    this.$store.commit("setShowToTop", true);
    for (let i = this.images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.images[i];
      this.images[i] = this.images[j];
      this.images[j] = temp;
    }
    this.imagesShuffled = this.images;
    this.isPageLoaded = true;
  },
  computed: {
    loadingGIF() {
      return require("@/assets/resources/loading-buffering.gif");
    },
    currentRoute() {
      return this.$route.name;
    },
    isBaseArtShown() {
      return this.$store.state.showBaseArt;
    },
  },
};
</script>

<style>
#art-work-body {
  background: var(--header-color);
  height: 100%;
  border-radius: 10px;
  overflow-x: auto;
  margin-bottom: 2vw;
}
.base-image {
  height: auto;
  width: auto;
  margin: 0px;
  padding: 0px;
  border-radius: 0px;
  transition: all 0.5s ease;
}

.art-work-router {
  text-decoration: none;
}

@media only screen and (max-width: 500px) {
  .base-image {
    height: auto;
    width: 45vh;
    border-radius: 0px;
    margin: 0px 5px;
    transition: all 0.5s ease;
  }
}
</style>
