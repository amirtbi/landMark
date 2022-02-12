<template>
  <footer
    class="bg-dark-gray-blue flex w-full flex-row py-[80px] md:py-[100px]"
  >
    <!--Logo-->
    <div class="flex-1/2 flex flex-row items-center justify-center p-[2rem]">
      <img class="max-h-[100px]" src="../assets/images/logo.svg" alt="log" />
    </div>
    <!-- Links -->
    <nav class="flex w-full p-4 md:ml-[2rem]">
      <ul class="flex w-full flex-col items-center justify-center">
        <div
          class="flex w-full flex-col items-center justify-start md:flex-row"
        >
          <li class="p-[1rem]" v-for="link in links" :key="link.title">
            <a
              class="text-gray-blue hover:text-strong-cyan text-sm md:text-[1.2rem]"
              href="#"
              >{{ link.title }}</a
            >
          </li>
        </div>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "FAQ" },
        { title: "Contact Us" },
        { title: "Privacy Policy" },
        { title: "Press Kit" },
        { title: "Install Guide" },
      ],
    };
  },
};
</script>
