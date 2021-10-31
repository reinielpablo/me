<template>
  <!-- <h4>{{ image }}</h4> -->
  <b-col id="solo-image-all">
    {{ getImageObj() }}

    <span class="full-span centrify" @click="toShowFull(false)" v-if="showFull">
      <img :src="getImage(image.image)" alt="" class="full-image" />
    </span>
    <b-row class="solo-header centrify">
      {{ image.title }}
      <router-link :to="'/projects/artworks'" class="solo-link centrify">
        <i class="fas fa-times-circle"></i>
      </router-link>
    </b-row>
    <span class="solo-span">
      <b-row class="solo-image-row centrify">
        <img
          :src="getImage(image.image)"
          alt=""
          class="solo-image"
          @click="toShowFull(true)"
        />
      </b-row>
    </span>
  </b-col>
</template>

<script>
import ArtList from "@/assets/artworks/artlist.json";

export default {
  name: "BaseArtWork",
  props: ["id"],
  data() {
    return {
      image: null,
      showFull: false,
    };
  },

  methods: {
    getImage(path) {
      return require("@/assets/artworks/arts/" + path);
    },

    getImageObj() {
      let images = ArtList;
      let image = images.filter((img) => {
        return img.key === this.id;
      });
      this.image = image[0];
    },
    toShowFull(toggle) {
      this.showFull = toggle;
    },
  },
  mounted() {
    this.$store.commit("changeCurrentImage", this.image.key);
    this.$store.commit("setShowBaseArt", true);
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("setShowBaseArt", false);

    next();
  },
};
</script>

<style scoped>
#solo-image-all {
  width: 100vw;
  overflow: hidden;
}

.solo-header {
  font-size: 3vh;
  height: 7vh;
}

.solo-image {
  width: auto;
  height: 95vh;
  border: 2px solid white;
  background-color: var(--header-base);
  margin-bottom: 23px;
}

.solo-link {
  font-size: 2vh;
  z-index: 11;
  color: red;
  width: auto;
  text-decoration: none;
  transition: all 0.5s ease;
}

.solo-link:hover {
  transition: all 0.5s ease;
  color: var(--header-base);
  transform: rotate(270deg) scale(1.32);
  opacity: 0.5;
}

.full-span {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.623);
  z-index: 12;
}

.full-image {
  width: auto;
  height: 95vh;
  opacity: 1;
}
.solo-image-row {
  height: 100vh;
}

@media only screen and (max-width: 500px) {
  .full-image {
    width: 95vw;
    height: 100vh;
  }

  .solo-image {
    width: 90vw;
    height: auto;
  }

  .solo-image-row {
    height: 50vh;
  }

  .solo-header {
    margin-top: 20vh;
    height: auto;
  }
  #solo-image-all {
    height: 100vh;
  }

  .full-image {
    width: 95vw;
    height: auto;
    opacity: 1;
  }
}
</style>
