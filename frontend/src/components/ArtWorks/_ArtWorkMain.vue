<template>
  <b-container fluid id="art-work" class="centrify">
    <b-col>
      <!--------------------------------------- Individual Photos ---------------------------------------->
      <b-row>
        <router-view v-if="currentRoute === 'BaseArtWork'"> </router-view>
      </b-row>
      <!--------------------------------------- Gallery ---------------------------------------->
      <b-row
        id="art-work-body"
        v-if="mode === 0 && currentRoute === 'ArtWorks'"
      >
        <b-col
          v-for="data in imagesShuffled"
          :key="data.key"
          class="base-image"
          :ref="'image_' + data.key"
        >
          <router-link
            :to="'/projects/artworks/' + data.key"
            class="art-work-router"
          >
            <base-art-work-image :image="data"></base-art-work-image>
          </router-link>
        </b-col>
      </b-row>
      <!--------------------------------------- Carousel ---------------------------------------->
      <b-row id="art-work-body" v-if="mode === 1" class="centrify">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="2500"
          controls
          indicators
          background="transparent"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          class="centrify"
        >
          <b-carousel-slide
            v-for="data in imagesShuffled"
            :key="data.key"
            id="carousel-slide"
          >
            <template #img>
              <p class="carousel-title">{{ data.title }}</p>
              <img
                :src="getImage(data.image)"
                :alt="loadingGIF"
                class="base-image-carousel"
                loading="lazy"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </b-row>
    </b-col>
  </b-container>
</template>

<script>
import ArtWorkHeader from "./ArtWorkHeader.vue";
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
      mode: 0,
      slide: 0,
      sliding: null,
      isPageLoaded: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    getImage(path) {
      return require("@/assets/artworks/arts/" + path);
    },
    toggleMode() {
      this.mode = !this.mode;
    },
    setMode(mode) {
      this.mode = mode;
      this.$router.push("/projects/artworks");

      // let cur = this.$store.state.currentImage;
      // if (cur) {
      //   this.scrollTo(cur);
      // }
    },

    // scrollTo(refName) {
    //   this.$nextTick(() => {
    //     let pos = this.$refs[refName][0]["offsetTop"];
    //     this.$refs[refName][0].scrollTo({ top: pos, behavior: "smooth" });
    //   });
    // },
  },
  mounted() {
    // this.$store.commit("changeHeaderColor", "#171b25");
    // this.$store.commit("changeHeaderBorder", "#171b25");
    // this.$store.commit("changeHeaderBase", "white");

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

    currentImg() {
      return this.$store.state.currentImage;
    },
  },
};
</script>

<style>
#art-work {
}

#art-work-body {
  background: var(--header-color);
  height: 90vh;
  border-radius: 10px;
  overflow-x: auto;
}
.base-image {
  height: auto;
  width: auto;
  margin: 0px;
  padding: 0px;
  border-radius: 0px;
  transition: all 0.5s ease;
}

.base-image-carousel {
  height: 75vh;
  width: auto;
  border: 0.25vw solid var(--header-base);
  border-radius: 0px;
  transition: all 0.5s ease;
  margin: 10px 5px;
}

#carousel-1 {
  border-radius: 10px;
  transition: all 0.5s ease;
  text-shadow: 1px 1px 2px #333;
  height: 40vw;
  width: 70vw;
}
.fas.fa-toggle-off,
.fas.fa-toggle-on {
  width: auto;
  transition: all 0.5s ease;
  font-size: 50%;
}
#toggle:hover {
  transition: all 0.5s ease;
  transform: scale(0.9);
}

a.carousel-control-next,
a.carousel-control-prev {
  transition: all 0.5s ease;
}

a.carousel-control-next:hover,
a.carousel-control-prev:hover {
  transition: all 0.5s ease;
  background: rgba(255, 255, 255, 0.418);
}
.carousel-control-prev-icon {
  transition: all 0.5s ease;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}
.carousel-control-next-icon {
  transition: all 0.5s ease;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}
.carousel-control-prev-icon:hover {
  transition: all 0.5s ease;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23171b25' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}
.carousel-control-next-icon:hover {
  transition: all 0.5s ease;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23171b25' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

.carousel-title {
  font-size: 1rem;
}

.carousel-title:hover {
  font-size: 1rem;
}

.art-work-router {
  text-decoration: none;
}

@media only screen and (max-width: 500px) {
  .base-image,
  .base-image-carousel {
    height: auto;
    width: 45vh;
    border-radius: 0px;
    margin: 0px 5px;
    transition: all 0.5s ease;
  }
  #carousel-1 {
    text-shadow: 1px 1px 2px #333;
    height: 90vh;
    width: 100vw;
    transition: all 0.5s ease;
  }
}
</style>
