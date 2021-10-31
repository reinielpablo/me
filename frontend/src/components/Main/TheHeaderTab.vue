<template>
  <b-container fluid>
    {{ isLinkClicked() }}
    <span
      id="header-tab"
      @click="
        clickHeaderTab();
        $emit('header-tab', isHeaderTabOpen);
      "
      :class="{
        'close-span': !isHeaderTabOpen,
        'open-span': isHeaderTabOpen,
        centrify: true,
      }"
    >
      <i
        id="icon-span"
        :class="{
          fas: true,
          'fa-chevron-circle-right': !isHeaderTabOpen,
          'fa-times-circle': isHeaderTabOpen,
          'icon-open': isHeaderTabOpen,
          'icon-close': !isHeaderTabOpen,
        }"
      ></i>
    </span>
  </b-container>
</template>

<script>
export default {
  name: "TheHeaderTab",
  components: {},
  props: ["isOpen"],
  data() {
    return {
      isHeaderTabOpen: false,
    };
  },
  methods: {
    clickHeaderTab() {
      this.isHeaderTabOpen = !this.isHeaderTabOpen;
    },
    isLinkClicked() {
      if (!this.isOpen) {
        this.isHeaderTabOpen = false;
      }
    },
  },
};
</script>

<style scoped>
#header-tab {
  position: fixed;
  top: 2vh;
  left: 20vh;
  height: 5vh;
  font-size: 20px;
  z-index: 500;
}

#icon-span {
  transition: all 0.5s ease;
}

#icon-span:hover {
  transition: all 0.5s ease;
  transform: scale(1.3);
}

.icon-open {
  transform: rotate(-180deg);
}

.icon-close {
  transform: rotate(0deg);
}
.open-span {
  width: 5vh;
  background-color: var(--header-color);
  border: solid 1px var(--header-base);
  color: var(--header-base);
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  transition: all 0.5s ease, border-radius 0.5s ease;
}

.close-span {
  width: 8vh;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  transform: translateX(-20vh);
  background-color: var(--header-base);
  color: var(--header-color);
  border: solid 1px var(--header-color);
  border-left: none;
  transition: all 0.5s ease, border-radius 2.25s ease;
}

@media only screen and (max-width: 500px) {
  .close-span {
    width: 5vh;
  }
}
</style>
