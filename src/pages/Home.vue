<script lang="ts" setup>
import { RouterLink } from 'vue-router'

const emits = defineEmits({
  changeNav: () => true,
  mounted: (path: string) => {
    if (path) return true
    else return false
  },
})
</script>

<template>
  <section
    class="h-screen w-screen bg-home-mobile bg-cover pt-24 md:bg-home-tablet md:pt-26 xl:bg-home-desktop xl:px-40 xl:pt-96 xl:pb-32"
    @vnode-mounted="emits('mounted', 'home')"
  >
    <section class="flex h-full flex-col items-center gap-y-20 px-6 py-12 md:h-auto md:gap-y-39 md:px-40 xl:flex-row xl:items-end xl:justify-between xl:p-0">
      <div class="flex flex-col items-center gap-y-4 md:gap-y-6 xl:w-112 xl:items-start">
        <p class="font-barlow-condensed text-base tracking-2.7 text-lavender md:text-xl xl:text-7 xl:tracking-4.72">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 class="font-bellefair text-20 leading-25 text-white md:text-36 md:leading-36">
          SPACE
        </h1>
        <p class="text-center font-barlow text-base text-lavender md:leading-loose xl:text-left xl:text-lg">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sut
          back, and relaz because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <RouterLink
        :to="{ name: 'Destination' }"
        class="relative z-10 flex h-38 w-38 items-center justify-center rounded-full bg-white transition-shadow hover:shadow-explore md:h-60 md:w-60"
        @click="emits('changeNav')"
      >
        <span class="font-bellefair text-xl tracking-wider md:text-3xl"
          >EXPLORE</span
        >
      </RouterLink>
    </section>
  </section>
</template>
