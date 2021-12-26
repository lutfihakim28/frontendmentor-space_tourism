<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const isMenuOpen = ref(false)
const activeMenu = ref('Home')
const navs = ['Home', 'Destination', 'Crew', 'Technology']

function clickedMenu(nav: string) {
  activeMenu.value = nav,
    isMenuOpen.value = false
}
</script>

<template>
  <section class="w-full h-screen relative overflow-hidden">
    <header
      class="w-full h-24 p-6 md:p-0 md:pl-6 absolute flex justify-between items-center xl:pl-14 xl:my-10"
    >
      <img src="./assets/shared/logo.svg" alt="logo" class="w-12 h-12" />
      <button
        class="p-0.5 flex justify-center items-center focus:outline-none z-20 focus:ring ring-lavender md:hidden"
        @click="isMenuOpen = !isMenuOpen"
      >
        <img src="./assets/shared/icon-hamburger.svg" alt="hamburger" v-if="!isMenuOpen" />
        <img src="./assets/shared/icon-close.svg" alt="close" v-else />
      </button>
      <nav
        class="w-64 h-screen absolute pl-8 pt-28 top-0 right-0 bg-white/5 backdrop-blur-xl z-10 transition-transform ease-linear md:h-full md:static md:w-auto md:translate-x-0 md:px-12 md:py-0 xl:p-0 xl:pl-[7.5rem] xl:pr-[10.5rem]"
        :class="{ 'translate-x-full': !isMenuOpen }"
      >
        <ul
          class="flex flex-col gap-y-8 font-barlow-condensed text-base tracking-[0.16875rem] text-white md:h-full md:text-sm md:tracking-[0.1475rem] md:flex-row md:gap-y-0 md:gap-x-3 xl:gap-x-12 xl:text-base xl:tracking-[0.16875rem]"
        >
          <li
            v-for="(nav, id) in navs"
            class="md:flex md:justify-center md:items-center md:border-b border-transparent hover:md:border-gray-500"
            :class="{ 'md:border-white': activeMenu == nav }"
          >
            <RouterLink :to="{ name: nav }" class="flex gap-x-3" @click="clickedMenu(nav)">
              <span class="font-bold md:hidden xl:inline">0{{ id }}</span>
              <span class="uppercase">{{ nav }}</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
      <div class="hidden xl:block absolute left-[10.5rem] w-[29.5rem] h-px bg-gray-500 z-30"></div>
    </header>
    <RouterView></RouterView>
    <footer class="absolute bottom-0 w-full p-0.5 text-center text-sm text-white">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="text-blue-300 hover:text-lavender"
      >Frontend Mentor</a>.
      Coded by
      <a
        href="https://twitter.com/upilMarkupil"
        target="_blank"
        class="text-blue-300 hover:text-lavender"
      >Lutfi Hakim</a>.
    </footer>
  </section>
</template>
