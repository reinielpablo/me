<template>
  <span id="base-component">
    <h5 id="image-title" class="centrify">{{ image.title }}</h5>
    <b-img-lazy
      :src="getImage(image.image)"
      alt="loading..."
      class="base-image"
    />
  </span>
</template>

<script>
export default {
  name: "BaseArtWorkImage",
  props: ["image"],
  methods: {
    getImage(path) {
      return require("@/assets/artworks/arts/" + path);
    },
  },
  computed: {
    loadingGIF() {
      return require("@/assets/resources/loading-buffering.gif");
    },
  },
};
</script>

<style scoped>
.base-image {
  height: 25vw;
  width: auto;
  border: 0.25vw solid var(--header-base);
  border-radius: 0px;
}

img {
  border: 0.25vw solid var(--header-base);
  margin: auto;
  transition: all 0.5s ease;
  opacity: 1;
}

img:hover {
  transition: all 0.5s ease;
  transform: scale(0.95);
  opacity: 0.1;
}

#base-component {
  transition: all 0.5s ease;
  color: transparent;
}

#base-component:hover {
  transition: all 0.5s ease;
  color: var(--header-base);
}

#image-title {
  position: relative;
  top: 50%;
}
.wrap {
  width: auto;
  height: auto;
  background: red;
}

.click-enlarge {
  transform: scale(1.2);
}
@media only screen and (max-width: 500px) {
  .base-image {
    height: auto;
    width: 40vh;
    border: 2vw solid var(--header-base);
    border-radius: 0px;
    margin: 0px 5px;
  }

  img {
    margin: 5px 5px;
    transition: all 0.5s ease;
  }

  img:hover {
    transition: all 0.5s ease;
    transform: scale(0.95);
  }

  #base-component {
    transition: all 0.5s ease;
    color: transparent;
  }

  #base-component:hover {
    transition: all 0.5s ease;
    color: var(--header-base);
  }

  #image-title {
  }
}
</style>
