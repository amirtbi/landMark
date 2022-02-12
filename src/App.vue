<template>
  <the-header></the-header>
  <main class="flex min-h-screen w-full flex-col items-center">
    <section class="container">
      <!-- Features -->
      <article
        class="container mt-[10px] flex flex-col items-center justify-center gap-4"
      >
        <h2
          class="text-dark-gray-blue text-center text-2xl font-bold md:text-[2rem]"
        >
          Keep track of your snippets
        </h2>
        <p
          class="text-gray-blue selection:bg-strong-cyan max-w-[500px] text-center text-[0.75rem] selection:text-white md:max-w-[700px] md:text-sm"
        >
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </article>
      <article
        class="mt-[2rem] flex flex-col items-center justify-center gap-8 p-7 md:flex-row md:items-start md:justify-center"
      >
        <div class="w-ful mr-2 flex-1 items-center justify-center self-center">
          <img src="./assets/images/image-computer.png" alt="computer" />
        </div>
        <div
          class="flex w-full flex-col items-start justify-center gap-4 md:w-1/2"
        >
          <feature-item Col v-for="feature in features" :key="feature.title">
            <template #default>
              <h3
                class="title-content w-full pb-2 text-center text-[1.2rem] md:text-left md:text-[1.5rem]"
              >
                {{ feature.title }}
              </h3>
              <p class="txt-content w-full text-center md:text-left">
                {{ feature.description }}
              </p>
            </template>
          </feature-item>
        </div>
      </article>
      <!-- Access-->
      <article
        class="container flex flex-col items-center justify-center gap-4 md:py-[80px]"
      >
        <div class="flex flex-col items-center justify-center">
          <h2 class="title-content text-center text-[1rem] md:text-[2rem]">
            Access Clipboard anywhere
          </h2>
          <p
            class="text-gray-blue max-w-[600px] py-[20px] text-center text-[0.75rem] md:max-w-[800px] md:text-sm"
          >
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
        </div>
        <!-- Access image-->
        <div class="flex-1">
          <img src="./assets/images/image-devices.png" alt="access" />
        </div>
      </article>
      <!--SuperCharge workflow-->
      <article
        class="container flex flex-col items-center justify-center gap-4 py-[80px]"
      >
        <div class="flex-1">
          <h2 class="title-content text-[1.2rem] md:text-[2rem]">
            Supercharge your workflow
          </h2>
          <p
            class="text-gray-blue max-w-[600px] py-[20px] text-center text-[0.75rem] md:max-w-[800px] md:text-sm"
          >
            We’ve got the tools to boost your productivity.
          </p>
        </div>
        <div
          class="flex flex-col items-center justify-center gap-12 md:flex-row"
        >
          <feature-item
            icon
            v-for="feature in workflows"
            :icon-profile="feature.icon"
            :key="feature.title"
          >
            <template #default>
              <h3
                class="title-content w-full self-start py-[1rem] text-center text-[0.75rem] md:text-[1rem]"
              >
                {{ feature.title }}
              </h3>
              <p
                class="text-gray-blue w-full max-w-[400px] text-center text-sm text-[0.75rem]"
              >
                {{ feature.description }}
              </p>
            </template>
          </feature-item>
        </div>
      </article>
      <!-- Collaboratoncompanies-->
      <article class="container py-[50px] md:py-[80px]">
        <div
          class="flex flex-col items-center justify-between gap-8 md:flex-row"
        >
          <logo-item
            v-for="logo in Companies"
            :key="logo.image"
            :logo-icon="logo.image"
          ></logo-item>
        </div>
      </article>
      <article class="container py-[50px]">
        <div class="flex flex-col items-center justify-center">
          <h3
            class="title-content w-full self-start py-[1rem] text-center text-[1.2rem] md:text-[2rem]"
          >
            Clipboard for iOS and Mac OS
          </h3>
          <p
            class="text-gray-blue w-full max-w-[600px] text-center text-sm text-[0.75rem]"
          >
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
          <div
            class="mt-2 flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <button class="btn btn-strong-cyan">Download for iOS</button>
            <button class="btn btn-light-blue">Download for Mac</button>
          </div>
        </div>
      </article>
    </section>
  </main>
  <the-footer></the-footer>
</template>

<script>
// Importing Components
import TheHeader from "./components/TheHeader.vue";
import FeatureItem from "./components/featureItems.vue";
import logoItem from "./components/CompanyLogos.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    FeatureItem,
    logoItem,
    TheFooter,
  },
  data() {
    return {
      features: [
        {
          title: "Quick Search",
          description:
            "Easily search your snippets by content, category, web address, application, and more.",
        },
        {
          title: "iCloud Sync",
          description:
            "Instantly saves and syncs snippets across all your devices.",
        },
        {
          title: "Complete History",
          description:
            "Retrieve any snippets from the first moment you started using the app",
        },
      ],
      workflows: [
        {
          icon: "icon-blacklist",
          title: "Create blacklists",
          description:
            "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
        },
        {
          icon: "icon-text",
          title: "Plain text snippets",
          description:
            "Remove unwanted formatting from copied text for a consistent look.",
        },
        {
          icon: "icon-preview",
          title: "Sneak preview",
          description:
            "Quick preview of all snippets on your Clipboard for easy access.",
        },
      ],
      Companies: [
        { image: "logo-google" },
        { image: "logo-ibm" },
        { image: "logo-microsoft" },
        { image: "logo-vector-graphics" },
        { image: "logo-hp" },
      ],
    };
  },
  computed: {},
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
