<template>
  <b-row
    id="base-slide"
    :class="{
      centrify: true,
      'w0-bg': slide.key % 2 === 1,
      'w-bg': slide.key % 2 === 0,
    }"
  >
    <b-col
      ><span class="page-number" v-if="slide.key % 2">{{ slide.key }}</span>
      <p class="page-details" v-if="slide.key % 2 == 0">
        Left Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        facere porro optio? Minus impedit ratione totam, odio cumque, commodi,
      </p>
    </b-col>
    <b-col>
      <b-img class="slideImg centrify" :src="getImage(slide.slide)"></b-img>
    </b-col>
    <b-col cols>
      <span class="page-number" v-if="slide.key % 2 == 0">{{ slide.key }}</span>
      <p class="page-details" v-if="slide.key % 2 == 1">
        Right Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        facere porro optio? Minus impedit ratione totam, odio cumque, commodi,
      </p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "BaseDataScienceSlide",
  props: ["slide", "folder"],
  components: {},
  methods: {
    getImage(path) {
      return require("@/assets/datascience/presentations/" +
        this.folder +
        path);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Viga&display=swap");
#base-slide {
  width: 120vw;
  height: 40vw;
  box-shadow: 15px 0px 15px var(--header-base);
  font-family: "Viga", sans-serif;
  font-size: 1rem;
}

.w-bg {
  border: 10px solid var(--header-base);
  background-color: var(--header-base);
  color: var(--header-color);
}

.wo-bg {
  background-color: transparent;
  color: var(--header-base);
}

.slideImg {
  border: 5px solid var(--header-base);
  background-color: var(--header-base);
  border-radius: 15px;
  width: 55vw;
}

.page-details {
  font-size: 1.25rem;
}
.page-number {
  font-size: 20rem;
}

@media only screen and (max-width: 500px) {
  #base-slide {
    width: 120vw;
    height: 30vh;
    box-shadow: 15px 0px 15px var(--header-base);
    margin: 0px;
    padding: 0px;
  }

  .page-details {
    height: auto;
    font-size: 5px;
    margin: 0px;
    padding: 0px;
  }
  .page-number {
    font-size: 1rem;
  }

  img {
    transition: all 0.5s ease;
  }
  img:hover {
    transform: scale(2);
    transition: all 0.5s ease;
  }
  .page-details {
    transition: all 0.5s ease;
  }
  .page-details:hover {
    transform: scale(2);
    transition: all 0.5s ease;
  }
}
</style>
