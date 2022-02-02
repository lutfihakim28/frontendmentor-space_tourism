<script setup lang="ts">
import { computed, ref } from 'vue';
import { goToNextImage, changeDetail, goToPrevImage, desktopChangeImage } from '../animationFunction';

const props = defineProps({
  technologies: { type: Object, required: true },
  screenWidth: { type: Number, required: true },
});

const emits = defineEmits({
  mounted: (path: string) => {
    if (path) {
      return true
    } else {
      return false
    }
  },
  contentScroll: (position: number) => {
    if (position || position == 0) {
      return true
    } else {
      return false
    }
  },
});

function contentScroll() {
  const position = container.value?.scrollTop;
  emits('contentScroll', position!);
};

const container = ref<HTMLElement>();

const currentTechImageElement = ref<HTMLElement>();
const currentTechImageId = ref(0);
const currentTechImage = computed(() => {
  if (currentTechImageId.value || currentTechImageId.value == 0) {
    let image = props.technologies[currentTechImageId.value].images.landscape;
    if (props.screenWidth >= 1280) {
      image = props.technologies[currentTechImageId.value].images.portrait;
    };
    return {
      alt: props.technologies[currentTechImageId.value].name,
      image: image,
    };
  };

  return { alt: null, image: null };
});

const nextTechImageElement = ref<HTMLElement>();
const nextTechImageId = ref();
const nextTechImage = computed(() => {
  if (nextTechImageId.value || nextTechImageId.value == 0) {
    let image = props.technologies[nextTechImageId.value].images.landscape;
    if (props.screenWidth >= 1280) {
      image = props.technologies[nextTechImageId.value].images.portrait;
    };
    return {
      alt: props.technologies[nextTechImageId.value].name,
      image: image,
    };
  };

  return { alt: null, image: null };
});

const prevTechImageElement = ref<HTMLElement>();
const prevTechImageId = ref();
const prevTechImage = computed(() => {
  if (prevTechImageId.value || prevTechImageId.value == 0) {
    let image = props.technologies[prevTechImageId.value].images.landscape;
    if (props.screenWidth >= 1280) {
      image = props.technologies[prevTechImageId.value].images.portrait;
    };
    return {
      alt: props.technologies[prevTechImageId.value].name,
      image: image,
    };
  };

  return { alt: null, image: null };
});

const currentTechDetailElement = ref<HTMLElement>();
const currentTechDetailId = ref(0);
const currentTechDetail = computed(() => {
  if (currentTechDetailId.value || currentTechDetailId.value == 0) {
    return {
      name: props.technologies[currentTechDetailId.value].name,
      description: props.technologies[currentTechDetailId.value].description,
    };
  };

  return {
    name: null,
    description: null,
  };
});

const targetTechDetailElement = ref<HTMLElement>();
const targetTechDetailId = ref();
const targetTechDetail = computed(() => {
  if (targetTechDetailId.value || targetTechDetailId.value == 0) {
    return {
      name: props.technologies[targetTechDetailId.value].name,
      description: props.technologies[targetTechDetailId.value].description,
    };
  };

  return {
    name: null,
    description: null,
  };
});

const targetTechId = ref(0);

const disableAllButton = ref(false);

function changeTechnology(id: number) {
  targetTechId.value = id;
  disableAllButton.value = true;

  if (props.screenWidth < 1280) {
    if (currentTechImageId.value < targetTechId.value) {
      nextTechImageId.value = targetTechId.value;
      goToNextImage(currentTechImageElement.value, nextTechImageElement.value);
    };

    if (currentTechImageId.value > targetTechId.value) {
      prevTechImageId.value = targetTechId.value;
      goToPrevImage(currentTechImageElement.value, prevTechImageElement.value);
    };
  } else {
    desktopChangeImage(currentTechImageElement.value);
  };

  targetTechDetailId.value = targetTechId.value;
  changeDetail(currentTechDetailElement.value, targetTechDetailElement.value);

  if (props.screenWidth < 1280) {
    setTimeout(() => {
      currentTechImageId.value = targetTechId.value;
      currentTechDetailId.value = targetTechId.value;
      setTimeout(() => {
        nextTechImageId.value = null;
        prevTechImageId.value = null;
        targetTechDetailId.value = null;
        disableAllButton.value = false;
        container.value?.scrollTo(0, 0);
      }, 0);
    }, 500);
  } else {
    setTimeout(() => {
      currentTechImageId.value = targetTechId.value;
      setTimeout(() => {
        currentTechDetailId.value = targetTechId.value;
        setTimeout(() => {
          targetTechDetailId.value = null;
          disableAllButton.value = false;
          container.value?.scrollTo(0, 0);
        }, 0);
      }, 250);
    }, 250);
  };
};
</script>

<template>
  <section
    ref="container"
    class="h-screen w-screen bg-tech-mobile bg-cover pt-24 overflow-x-hidden overflow-y-scroll scroll-smooth before:fixed before:top-0 before:w-full before:h-full before:bg-black/40 md:bg-tech-tablet xl:bg-tech-desktop xl:pt-52 xl:overflow-hidden"
    @vnode-mounted="emits('mounted', 'technology')"
    @scroll="contentScroll()"
  >
    <section class="relative grid grid-cols-1 place-items-center w-full gap-y-8 md:gap-y-14 md:pt-5 xl:h-full xl:pt-1 xl:grid-cols-auto-32 xl:pl-42 xl:pr-0 xl:gap-y-6 xl:grid-rows-2-32 xl:gap-x-32">
      <h2 class="font-barlow-condensed text-base tracking-2.7 text-white md:ml-10 md:text-xl md:place-self-start md:tracking-3.38 xl:row-start-1 xl:col-start-1 xl:row-span-2 xl:tracking-4.72 xl:text-7 xl:ml-0 leading-tight">
        <span class="pr-4 font-bold opacity-25">03</span>
        <span>SPACE LAUNCH 101</span>
      </h2>
      <section class="flex aspect-mobile w-screen items-center md:mt-1 xl:aspect-desktop xl:row-start-2 xl:col-start-2 xl:h-full xl:w-full">
        <section class="w-full h-full">
          <div class="relative h-full">
            <div class="w-full h-full absolute right-full xl:hidden">
              <div ref="prevTechImageElement" class="w-full h-full flex justify-center items-center text-white xl:z-0">
                <img :src="prevTechImage.image" :alt="prevTechImage.alt" class="h-full object-contain">
              </div>
            </div>
            <div class="w-full h-full absolute">
              <div ref="currentTechImageElement" class="w-full h-full flex justify-center items-center text-white xl:z-10">
                <img :src="currentTechImage.image" :alt="currentTechImage.alt" class="h-full object-contain">
              </div>
            </div>
            <div class="w-full h-full absolute left-full xl:hidden">
              <div ref="nextTechImageElement" class="w-full h-full flex justify-center items-center text-white xl:z-20">
                <img :src="nextTechImage.image" :alt="nextTechImage.alt" class="h-full object-contain">
              </div>
            </div>
            <img>
          </div>
        </section>
      </section>
      <section class="w-full h-full flex flex-col items-center gap-y-6 md:gap-y-11 xl:row-start-2 xl:col-start-1 xl:flex-row xl:gap-x-20 xl:items-start xl:h-auto">
        <div class="flex justify-center items-center gap-x-4 xl:flex-col xl:gap-y-8 xl:flex-shrink">
          <button
            v-for="(tech, id) in props.technologies"
            @click="changeTechnology(parseInt(id))"
            class="relative w-10 h-10 text-white border border-white/25 rounded-full flex items-center justify-center bg-transparent hover:border-white focus:outline-none transition-color duration-500 md:w-15 md:h-15 xl:w-20 xl:h-20"
            :class="{'border-white text-rich-black': parseInt(id) == targetTechId}"
            :disabled="parseInt(id) == targetTechId || disableAllButton"
          >
            <div class="absolute w-10 h-10 rounded-full bg-white z-0 scale-0 transition-transform duration-500 md:w-15 md:h-15 xl:w-20 xl:h-20" :class="{'scale-100': parseInt(id) == targetTechId}"></div>
            <span class="relative z-10 font-bellefair text-base md:text-2xl md:tracking-1.5">{{ id + 1 }}</span>
          </button>
        </div>
        <section class="relative w-full">
          <h3 class="text-sm font-barlow-condensed text-center text-lavender tracking-2.36 uppercase mb-2 md:text-base md:mb-4 xl:text-base xl:leading-tight xl:tracking-2.7 xl:text-left">The terminology...</h3>
          <div ref="targetTechDetailElement" class="absolute w-full px-6 hidden flex-col items-center gap-y-4 opacity-0 transition-opacity duration-250 md:px-39 xl:items-start xl:gap-y-7 xl:px-0 xl:max-w-2xl">
            <h1 class="text-2xl font-bellefair uppercase text-white md:text-10 md:leading-tight xl:text-14 xl:leading-tight">{{ targetTechDetail.name }}</h1>
            <p class="w-full text-base font-barlow text-lavender text-center xl:text-lg xl:text-left">{{ targetTechDetail.description }}</p>
          </div>
          <div ref="currentTechDetailElement" class="absolute w-full px-6 flex flex-col items-center gap-y-4 transition-opacity duration-250 md:px-39 xl:items-start xl:gap-y-7 xl:px-0 xl:max-w-2xl">
            <h1 class="text-2xl font-bellefair uppercase text-white md:text-10 md:leading-tight xl:text-14 xl:leading-tight">{{ currentTechDetail.name }}</h1>
            <p class="w-full text-base font-barlow text-lavender text-center xl:text-lg xl:text-left">{{ currentTechDetail.description }}</p>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>
