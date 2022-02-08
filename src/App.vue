<template>
  <the-header></the-header>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  direction: rtl;
}
</style>
