<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section
    class="w-screen h-screen pt-24 bg-home-mobile md:bg-home-tablet xl:bg-home-desktop bg-cover xl:pt-96 xl:pb-32 xl:px-40"
  >
    <section class="px-6 py-12 h-full flex flex-col justify-between items-center md:justify-around md:h-auto md:px-40 xl:p-0 xl:flex-row xl:justify-between xl:items-end">
      <div class="flex flex-col gap-y-4 items-center md:gap-y-6 xl:w-[28rem] xl:items-start">
        <p
          class="font-barlow-condensed tracking-[0.16875rem] text-lavender md:text-xl xl:text-[1.75rem] xl:tracking-[0.295rem]"
        >SO, YOU WANT TO TRAVEL TO</p>
        <h1 class="font-bellefair text-[5rem] leading-[6.25rem] text-white md:text-[9rem] md:leading-[9rem]">SPACE</h1>
        <p
          class="font-barlow text-base text-center text-lavender md:leading-loose xl:text-lg xl:text-left"
        >Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sut back, and relaz because we'll give you a truly out of this world experience!</p>
      </div>
      <RouterLink
        :to="{ name: 'Destination' }"
        class="w-[9.5rem] h-[9.5rem] flex justify-center items-center rounded-full bg-white relative z-10 hover:shadow-[0_0_0.3rem_2rem_#151923dd] transition-shadow md:w-60 md:h-60"
      >
        <span class="font-bellefair text-xl tracking-wider md:text-3xl">EXPLORE</span>
      </RouterLink>
    </section>
  </section>
</template>