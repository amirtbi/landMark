<template>
  <div class="flex flex-1 flex-col items-center self-center" v-if="icon">
    <img class="mb-6 w-[44px]" :src="iconSource" alt="bracketList" />
    <slot name="default"> </slot>
  </div>
  <div v-else class="mb-4 flex w-full flex-col items-start justify-center">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  props: {
    iconProfile: {
      type: String,
      required: false,
    },
    // Col: {
    //   type: Boolean,
    //   required: false,
    // },
    // Row: {
    //   type: Boolean,
    //   required: false,
    // },

    icon: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    // Classes() {
    //   if (this.Col) {
    //     return "flex-col justify-center items-center";
    //   } else {
    //     return "flex-row items-center justify-center";
    //   }
    // },
    iconSource() {
      // Binding dynamic image source in 'Vite'
      // In case of vueCli, use require
      const path = `../assets/images/${this.iconProfile}.svg`;
      const modules = import.meta.globEager("../assets/images/*.svg");
      return modules[path].default;
    },
  },
};
</script>
