<template>
  <div>
    <img :src="logo" alt="company" />
  </div>
</template>

<script>
export default {
  props: ["logoIcon"],
  computed: {
    logo() {
      // Binding dynamic image source in 'Vite'
      // In case of vueCli, use require
      const path = `../assets/images/${this.logoIcon}.png`;
      const modules = import.meta.globEager("../assets/images/*.png");
      return modules[path].default;
    },
  },
};
</script>
