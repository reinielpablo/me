<template>
  <b-row class="data-science-header centrify">
    <b-row class="centrify ds-header-title"
      ><i :class="getDetails.titleIcon + ' title-icon'" /> &nbsp;{{
        getDetails.title
      }}</b-row
    >
    <b-row class="centrify ds-header-subtitle">{{ getDetails.subtitle }}</b-row>
    <b-row class="centrify ds-header-content">
      <b-col cols="8" class="details">
        <b-row class="detail-desc centrify">{{ getDetails.desc }}</b-row>
        <b-row class="detail-subdesc centrify">{{ getDetails.subDesc }}</b-row>
      </b-col>
      <b-col>
        <b-row
          class="centrify buttons"
          v-for="link in getDetails.links"
          :key="link"
        >
          <a :href="link.link" class="ds-header-link centrify" target="_blank">
            <button class="ds-header-button centrify">
              <i :class="link.faIcon"></i>&nbsp;
              {{ link.linkDesc }}
            </button>
          </a>
        </b-row>
      </b-col>
    </b-row>
  </b-row>
</template>

<script>
export default {
  props: ["details"],
  name: "BaseDataScienceHeader",
  components: {},
  mounted() {
    console.log(this.details);
  },
  computed: {
    getDetails() {
      return this.details;
    },
  },
};
</script>

<style scoped>
.data-science-header {
  color: var(--header-color);
  background: var(--header-base);
  width: 100vw;
  height: 25vw;
  font-size: 1vw;
  margin-top: 7vw;
}

.ds-header-title {
  height: 4vw;
  margin: 0px;
  padding: 0px;
  font-size: 2.5rem;
  font-weight: 800;
}
.ds-header-subtitle {
  height: 2vw;
  margin: 0px;
  padding: 0px;
  font-size: 1.5rem;
  font-weight: 500;
}

.ds-header-content {
  height: 17vw;
  margin: 0px;
  padding: 0px;
}

.ds-header-link {
  color: var(--header-base);
  text-decoration: none;
  margin: 0.2vw;
}

.ds-header-link:hover,
.ds-header-link:active {
  text-decoration: none;
}

.ds-header-button {
  color: var(--header-base);
  /* font-weight: 800; */
  font-size: 1rem;
  background: var(--header-color);
  text-decoration: none;
  border-radius: 5px;
  width: 15vw;
  height: auto;
  transition: all 0.5s ease;
  margin: 0vw;
  padding: 0px;
}

.ds-header-button:hover {
  transform: scale(1.1);
  opacity: 0.8;
  font-weight: 800;
  transition: all 0.5s ease;
}

.buttons {
  margin-right: 15vw;
}
.detail-desc {
  width: 100%;
  font-weight: 800;
  font-size: 1rem;
}

.detail-subdesc {
  width: 100%;
}

.title-icon {
  width: auto;
  margin: 0px;
  padding: 0px;
}

@media only screen and (max-width: 500px) {
  * div {
    margin: 0px;
    padding: 0px;
  }
  .data-science-header {
    height: 50vh;
    font-size: 1vw;
    margin: 0px;
    padding: 0px;
  }

  .ds-header-title {
    height: auto;
    font-size: 1.2rem;
    margin-top: auto;
  }
  .ds-header-subtitle {
    height: 5vh;
    font-size: 0.8rem;
    margin-bottom: auto;
  }

  .ds-header-content {
    height: 80vw;
  }

  .detail-desc {
    font-size: 0.6rem;
    margin: auto;
  }

  .detail-subdesc {
    font-size: 0.5rem;
    margin: auto;
  }

  .ds-header-button {
    font-size: 0.7rem;
    width: 65vw;
    height: 10vw;
    transition: all 0.5s ease;
    margin: 0px;
  }

  .ds-header-button:hover {
    transform: scale(1);
    opacity: 1;
  }

  .buttons {
    margin-right: 0vw;
    height: 13vw;
  }

  .title-icon {
    width: auto;
    font-size: 1.2rem;
    margin: 0px;
    padding: 0px;
  }

  .ds-header-link {
    text-decoration: none;
    width: 100vw;
    margin: auto;
    padding: 0px;
  }
}
</style>
