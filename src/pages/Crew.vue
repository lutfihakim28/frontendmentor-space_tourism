<script setup lang="ts">
import { computed, ref } from 'vue'
import { changeDetail, desktopChangeImage, goToNextImage, goToPrevImage } from '../animationFunction';
import douglas from '../assets/crew/image-douglas-hurley.png';
import anousheh from '../assets/crew/image-anousheh-ansari.png';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import victor from '../assets/crew/image-victor-glover.png';

const props = defineProps({
  crews: { type: Object, required: true },
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
    if (position) {
      return true
    } else {
      return false
    }
  },
});

function contentScroll() {
  const position = container.value?.scrollTop
  emits('contentScroll', position!)
};

const images = [douglas, mark, victor, anousheh]

const container = ref<HTMLElement>();

const currentCrewImageElement = ref<HTMLElement>();
const currentCrewImageId = ref(0);
const currentCrewImage = computed(() => {
  if (currentCrewImageId.value || currentCrewImageId.value == 0) {
    return {
      alt: props.crews[currentCrewImageId.value].name,
      image: images[currentCrewImageId.value],
    };
  };

  return { alt: undefined, image: undefined };
});

const nextCrewImageElement = ref<HTMLElement>();
const nextCrewImageId = ref();
const nextCrewImage = computed(() => {
  if (nextCrewImageId.value || nextCrewImageId.value == 0) {
    return {
      alt: props.crews[nextCrewImageId.value].name,
      image: images[nextCrewImageId.value],
    };
  };

  return { alt: undefined, image: undefined };
});

const prevCrewImageElement = ref<HTMLElement>();
const prevCrewImageId = ref();
const prevCrewImage = computed(() => {
  if (prevCrewImageId.value || prevCrewImageId.value == 0) {
    return {
      alt: props.crews[prevCrewImageId.value].name,
      image: images[prevCrewImageId.value],
    };
  };

  return { alt: undefined, image: undefined };
});

const currentCrewDetailElement = ref<HTMLElement>();
const currentCrewDetailId = ref(0);
const currentCrewDetail = computed(() => {
  if (currentCrewDetailId.value || currentCrewDetailId.value == 0) {
    return {
      name: props.crews[currentCrewDetailId.value].name,
      role: props.crews[currentCrewDetailId.value].role,
      bio: props.crews[currentCrewDetailId.value].bio,
    };
  };

  return {
    name: null,
    role: null,
    bio: null,
  };
});

const targetCrewDetailElement = ref<HTMLElement>();
const targetCrewDetailId = ref();
const targetCrewDetail = computed(() => {
  if (targetCrewDetailId.value || targetCrewDetailId.value == 0) {
    return {
      name: props.crews[targetCrewDetailId.value].name,
      role: props.crews[targetCrewDetailId.value].role,
      bio: props.crews[targetCrewDetailId.value].bio,
    };
  };

  return {
    name: null,
    role: null,
    bio: null,
  };
});

const targetCrewId = ref(0);

const disableAllButton = ref(false);

function changeCrew(id: number) {
  targetCrewId.value = id;
  disableAllButton.value = true;

  if (props.screenWidth < 1280) {
    if (currentCrewImageId.value < targetCrewId.value) {
      nextCrewImageId.value = targetCrewId.value;
      goToNextImage(currentCrewImageElement.value, nextCrewImageElement.value);
    };

    if (currentCrewImageId.value > targetCrewId.value) {
      prevCrewImageId.value = targetCrewId.value;
      goToPrevImage(currentCrewImageElement.value, prevCrewImageElement.value);
    };
  } else {
    desktopChangeImage(currentCrewImageElement.value);
  };

  targetCrewDetailId.value = targetCrewId.value;
  changeDetail(currentCrewDetailElement.value, targetCrewDetailElement.value);

  if (props.screenWidth < 1280) {
    setTimeout(() => {
      currentCrewImageId.value = targetCrewId.value;
      currentCrewDetailId.value = targetCrewId.value;
      setTimeout(() => {
        nextCrewImageId.value = null;
        prevCrewImageId.value = null;
        targetCrewDetailId.value = null;
        disableAllButton.value = false;
        container.value?.scrollTo(0, 0);
      }, 0);
    }, 500);
  } else {
    setTimeout(() => {
      currentCrewImageId.value = targetCrewId.value;
      setTimeout(() => {
        currentCrewDetailId.value = targetCrewId.value;
        setTimeout(() => {
          targetCrewDetailId.value = null;
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
    class="h-screen w-screen bg-crew-mobile bg-cover pt-24 overflow-x-hidden overflow-y-scroll scroll-smooth before:fixed before:top-0 before:w-full before:h-full before:bg-black/40 md:bg-crew-tablet xl:bg-crew-desktop xl:pt-52 xl:overflow-hidden"
    @vnode-mounted="emits('mounted', 'crew')"
    @scroll="contentScroll()"
  >
    <section class="relative grid grid-cols-1 place-items-center w-full gap-y-8 px-10 md:pt-5 xl:h-full xl:pt-1 xl:grid-cols-2 xl:pl-42 xl:pr-0 xl:gap-y-0 xl:grid-rows-11-auto">
      <h2 class="font-barlow-condensed text-base tracking-2.7 text-white md:text-xl md:place-self-start md:tracking-3.38 xl:tracking-4.72 xl:text-7 leading-tight">
        <span class="pr-4 font-bold opacity-25">02</span>
        <span>MEET YOUR CREW</span>
      </h2>
      <section class="flex h-56 w-screen items-center md:h-135 md:row-start-4 xl:row-start-1 xl:row-span-2 xl:col-start-2 xl:h-full xl:w-full">
        <section class="w-full h-full">
          <div class="relative h-full">
            <div class="w-full h-full absolute right-full xl:hidden">
              <div ref="prevCrewImageElement" class="w-full h-full flex justify-center items-center text-white xl:z-0">
                <img :src="prevCrewImage.image" :alt="prevCrewImage.alt" class="h-full object-contain">
              </div>
            </div>
            <div class="w-full h-full absolute">
              <div ref="currentCrewImageElement" class="w-full h-full flex justify-center items-center text-white xl:z-10">
                <img :src="currentCrewImage.image" :alt="currentCrewImage.alt" class="h-full object-contain">
              </div>
            </div>
            <div class="w-full h-full absolute left-full xl:hidden">
              <div ref="nextCrewImageElement" class="w-full h-full flex justify-center items-center text-white xl:z-20">
                <img :src="nextCrewImage.image" :alt="nextCrewImage.alt" class="h-full object-contain">
              </div>
            </div>
            <img>
            <div class="absolute w-full bottom-0 px-6 md:hidden">
              <div class="w-full h-px bg-arsenic"></div>
            </div>
          </div>
        </section>
      </section>
      <div class="w-full grid grid-cols-1 gap-y-8 mb-16 md:m-0 md:px-12 xl:place-self-start xl:px-0 xl:place-items-start">
        <div class="flex justify-center gap-x-4 md:row-start-2 xl:mt-36">
          <button
            v-for="(item, id) in props.crews"
            class="bg-white w-2.5 h-2.5 rounded-full focus:outline-none hover:opacity-60 transition-opacity xl:w-4 xl:h-4"
            :class="{
              'opacity-100 hover:opacity-100': parseInt(id) == targetCrewId,
              'opacity-25': parseInt(id) != targetCrewId,
            }"
            @click="changeCrew(parseInt(id))"
            :disabled="parseInt(id) == targetCrewId || disableAllButton"
          >
          </button>
        </div>
        <div class="relative w-full h-50 md:h-45.5">
          <div ref="targetCrewDetailElement" class="absolute w-full hidden flex-col items-center gap-y-4 opacity-0 transition-opacity duration-250 xl:items-start xl:gap-y-7 xl:max-w-3xl">
            <section class="flex flex-col items-center gap-y-2 text-white font-bellefair uppercase xl:items-start xl:gap-y-4">
              <h3 class="text-base opacity-50 md:text-2xl xl:text-8 xl:leading-tight">{{ targetCrewDetail.role }}</h3>
              <h1 class="text-2xl md:text-10 md:leading-tight xl:text-14 xl:leading-tight">{{ targetCrewDetail.name }}</h1>
            </section>
            <p class="w-full text-base font-barlow text-lavender text-center xl:text-lg xl:text-left">{{ targetCrewDetail.bio }}</p>
          </div>
          <div ref="currentCrewDetailElement" class="absolute w-full flex flex-col items-center gap-y-4 transition-opacity duration-250 xl:items-start xl:gap-y-7 xl:max-w-3xl">
            <section class="flex flex-col items-center gap-y-2 text-white font-bellefair uppercase xl:items-start xl:gap-y-4">
              <h3 class="text-base opacity-50 md:text-2xl xl:text-8 xl:leading-tight">{{ currentCrewDetail.role }}</h3>
              <h1 class="text-2xl md:text-10 md:leading-tight xl:text-14 xl:leading-tight">{{ currentCrewDetail.name }}</h1>
            </section>
            <p class="w-full text-base font-barlow text-lavender text-center xl:text-lg xl:text-left">{{ currentCrewDetail.bio }}</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
