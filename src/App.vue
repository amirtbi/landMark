<template>
  <the-header></the-header>
  <main class="flex min-h-screen w-full flex-col items-center">
    <section class="container">
      <article
        class="container mt-[10px] flex flex-col items-center justify-center gap-4"
      >
        <h2 class="text-dark-gray-blue text-2xl font-bold md:text-3xl">
          Keep track of your snippets
        </h2>
        <p
          class="text-gray-blue selection:bg-strong-cyan max-w-[500px] text-center text-[14px] selection:text-white md:max-w-[700px] md:text-sm"
        >
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </article>
      <article
        class="mt-[2rem] flex flex-col items-center justify-center gap-8 p-7 md:flex-row md:items-start md:justify-center"
      >
        <div
          class="w-ful flex flex-row items-center justify-center self-center"
        >
          <img src="./assets/images/image-computer.png" alt="computer" />
        </div>
        <div class="flex w-full flex-col items-center justify-center md:w-1/2">
          <div
            class="flex w-full flex-col items-center justify-center gap-2 p-[1.2rem] pt-0 md:items-start"
          >
            <h3 class="title-content">Quick Search</h3>
            <p class="txt-content">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div
            class="flex w-full flex-col items-center justify-center gap-2 p-[1.2rem] md:items-start"
          >
            <h3 class="title-content">iCloud Sync</h3>
            <p class="txt-content">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div
            class="flex w-full flex-col items-center justify-center gap-2 p-[1.2rem] md:items-start"
          >
            <h3 class="title-content">Complete History</h3>
            <p class="txt-content">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </article>
    </section>
  </main>
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
