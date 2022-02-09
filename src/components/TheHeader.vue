<template>
  <header class="bg-hero w-full bg-cover">
    <div
      class="container flex flex-col items-center py-[80px] text-center md:py-[120px]"
    >
      <img
        class="mb-14 w-[125px] lg:w-[140px]"
        src="../assets/images/logo.svg"
        alt="clipboard logo"
      />
      <h1 class="text-dark-gray-blue mb-4 text-3xl md:text-4xl">
        A history of everything you copy
      </h1>
      <p
        class="selection:bg-strong-cyan text-gray-blue mb-16 max-w-[500px] text-[14px] first-line:font-bold selection:text-white md:max-w-[700px] md:text-[18px]"
      >
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div
        class="mt-2 flex flex-col items-center justify-center gap-5 sm:flex-row"
      >
        <button class="btn btn-strong-cyan">Download for iOS</button>
        <button class="btn btn-light-blue">Download for Mac</button>
      </div>
    </div>
  </header>
</template>
