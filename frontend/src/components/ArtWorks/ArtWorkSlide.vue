<template>
  <b-row id="art-work-body" class="centrify">
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
      slide: 0,
      sliding: null,
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
  },
  mounted() {
    this.$store.commit("setShowToTop", false);

    for (let i = this.images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.images[i];
      this.images[i] = this.images[j];
      this.images[j] = temp;
    }
    this.imagesShuffled = this.images;
  },
  computed: {
    loadingGIF() {
      return require("@/assets/resources/loading-buffering.gif");
    },
  },
};
</script>

<style>
#art-work-body {
  background: var(--header-color);
  border-radius: 10px;
  margin-top: 40px;
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
  width: 70vw;
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
#carousel-slide {
  height: 90vh;
}
@media only screen and (max-width: 500px) {
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
