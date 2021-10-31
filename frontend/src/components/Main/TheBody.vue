<template>
  <b-container fluid id="the-body">
    <router-view />
  </b-container>
</template>

<script>
export default {
  name: "TheBody",
  components: {},
};
</script>

<style scoped>
#the-body {
  width: 100vw;
  margin: 0px;
  padding: 0px;
}
</style>
