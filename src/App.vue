<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';
import data from './data.json';

const isMenuOpen = ref(false);
const pathLocation = ref<string>();
const navs = ['home', 'destination', 'crew', 'technology'];
const nav = ref<HTMLElement>();
const isScrollOnTop = ref(true);
const screenWidth = ref<number>();

window.addEventListener(
  'resize',
  () => {
    screenWidth.value = document.body.clientWidth;
  },
  false,
);

onMounted(() => {
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target as Element
      if (
        target.id == 'nav' ||
        target.id == 'nav-button' ||
        target.id == 'nav-button-hamburger' ||
        target.id == 'nav-button-close'
      ) {
        return
      } else {
        isMenuOpen.value = false
      }
    },
    false,
  );

  screenWidth.value = document.body.clientWidth;

  changePathOnReload();
});

function changePathOnReload() {
  const path = window.location.pathname.slice(1);
  if (path == '') {
    pathLocation.value = 'home';
  } else {
    pathLocation.value = path;
  };
};

function changePath(path: string) {
  pathLocation.value = path;
};

function clickedMenu(nav: string) {
  pathLocation.value = nav;
  isMenuOpen.value = false;
};

function clicked() {
  isMenuOpen.value = !isMenuOpen.value;
};

function pathTarget(path: string) {
  return path.charAt(0).toUpperCase() + path.slice(1);
};

function changeHeaderBackground(position: number) {
  if (position > 48) {
    isScrollOnTop.value = false;
  } else {
    isScrollOnTop.value = true;
  };
};
</script>

<template>
  <section class="relative h-full w-full overflow-hidden">
    <header
      class="absolute z-20 flex h-24 w-full items-center justify-between p-6 transition-colors duration-200 md:p-0 md:pl-10 xl:my-10 xl:pl-14"
      :class="{
        'bg-white/5': !isScrollOnTop,
        'backdrop-blur-xl': !isMenuOpen && !isScrollOnTop,
      }"
    >
      <img src="./assets/shared/logo.svg" alt="logo" class="h-12 w-12" />
      <button
        id="nav-button"
        class="z-50 flex items-center justify-center p-0.5 ring-lavender focus:outline-none focus:ring md:hidden"
        @click="clicked()"
      >
        <img
          id="nav-button-hamburger"
          src="./assets/shared/icon-hamburger.svg"
          alt="hamburger"
          v-if="!isMenuOpen"
        />
        <img
          id="nav-button-close"
          src="./assets/shared/icon-close.svg"
          alt="close"
          v-else
        />
      </button>
      <nav
        id="nav"
        class="absolute top-0 right-0 z-40 h-screen w-64 bg-white/5 pt-24 backdrop-blur-xl transition-transform ease-linear md:static md:h-full md:w-auto md:translate-x-0 md:px-12 md:py-0 xl:p-0 xl:pl-30 xl:pr-42"
        :class="{
          'translate-x-full': !isMenuOpen,
          'bg-transparent backdrop-blur-none': !isScrollOnTop && screenWidth! >= 768,
        }"
      >
        <ul class="flex flex-col font-barlow-condensed text-base tracking-2.7 text-white md:h-full md:flex-row md:gap-y-0 md:gap-x-9 md:text-sm md:tracking-2.36 xl:gap-x-12 xl:text-base xl:tracking-2.7">
          <li
            v-for="(nav, id) in navs"
            class="border-transparent md:border-b-4 hover:md:border-gray-500"
            :class="{
              'md:border-white hover:md:border-white': pathLocation == nav,
            }"
          >
            <RouterLink
              :to="{ name: pathTarget(nav) }"
              class="flex items-center gap-x-3 py-4 pl-8 md:h-full md:p-0"
              @click="clickedMenu(nav)"
            >
              <span class="font-bold md:hidden xl:inline">0{{ id }}</span>
              <span
                :class="[
                  'uppercase',
                  { 'font-bold': pathLocation == nav },
                  'md:font-normal',
                ]"
                >{{ nav }}</span
              >
            </RouterLink>
          </li>
        </ul>
      </nav>
      <div class="absolute right-200 z-50 hidden h-px w-28% bg-gray-500 xl:block"></div>
    </header>
    <RouterView
      @changeNav="pathLocation = 'destination'"
      @mounted="changePath"
      @contentScroll="changeHeaderBackground"
      :destinations="data.destinations"
      :crews="data.crew"
      :technologies="data.technology"
      :screenWidth="screenWidth"
    ></RouterView>
    <footer class="absolute bottom-0 w-full bg-white/5 p-0.5 text-center text-xs text-white backdrop-blur-xl">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="text-blue-300 hover:text-lavender"
        >Frontend Mentor</a
      >. Coded by
      <a
        href="https://lutfihakim.netlify.app"
        target="_blank"
        class="text-blue-300 hover:text-lavender"
        >Lutfi Hakim</a
      >.
    </footer>
  </section>
</template>
