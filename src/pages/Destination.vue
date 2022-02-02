<script setup lang="ts">
import { ref, computed } from 'vue';
import { changeDetail, desktopChangeDestinationImage, goToNextImage, goToPrevImage } from '../animationFunction';

const props = defineProps({
  destinations: { type: Object, required: true },
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
  const position = container.value?.scrollTop
  emits('contentScroll', position!)
};

const container = ref<HTMLElement>();

const currentDestinationImageElement = ref<HTMLElement>();
const currentImageElement = ref<HTMLElement>();
const currentDestinationImageId = ref(0);
const currentDestinationImage = computed(() => {
  if (currentDestinationImageId.value || currentDestinationImageId.value == 0) {
    return {
      alt: props.destinations[currentDestinationImageId.value].name,
      image: props.destinations[currentDestinationImageId.value].images.png,
    };
  };

  return { alt: null, image: null };
});

const nextDestinationImageElement = ref<HTMLElement>();
const nextDestinationImageId = ref();
const nextDestinationImage = computed(() => {
  if (nextDestinationImageId.value || nextDestinationImageId.value == 0) {
    return {
      alt: props.destinations[nextDestinationImageId.value].name,
      image: props.destinations[nextDestinationImageId.value].images.png,
    };
  };

  return { alt: null, image: null };
});

const prevDestinationImageElement = ref<HTMLElement>();
const prevDestinationImageId = ref();
const prevDestinationImage = computed(() => {
  if (prevDestinationImageId.value || prevDestinationImageId.value == 0) {
    return {
      alt: props.destinations[prevDestinationImageId.value].name,
      image: props.destinations[prevDestinationImageId.value].images.png,
    };
  };

  return { alt: null, image: null };
});

const currentDestinationDetailElement = ref<HTMLElement>();
const currentDestinationDetailId = ref(0);
const currentDestinationDetail = computed(() => {
  if (currentDestinationDetailId.value || currentDestinationDetailId.value == 0) {
    return {
      name: props.destinations[currentDestinationDetailId.value].name,
      description: props.destinations[currentDestinationDetailId.value].description,
      distance: props.destinations[currentDestinationDetailId.value].distance,
      travel: props.destinations[currentDestinationDetailId.value].travel,
    };
  };

  return {
    name: null,
    description: null,
    distance: null,
    travel: null,
  };
});

const targetDestinationDetailElement = ref<HTMLElement>();
const targetDestinationDetailId = ref();
const targetDestinationDetail = computed(() => {
  if (targetDestinationDetailId.value || targetDestinationDetailId.value == 0) {
    return {
      name: props.destinations[targetDestinationDetailId.value].name,
      description: props.destinations[targetDestinationDetailId.value].description,
      distance: props.destinations[targetDestinationDetailId.value].distance,
      travel: props.destinations[targetDestinationDetailId.value].travel,
    };
  };

  return {
    name: null,
    description: null,
    distance: null,
    travel: null,
  };
});

const targetDestinationId = ref(0);

const disableAllButton = ref(false);

function changeDestination(id: number) {
  targetDestinationId.value = id;
  disableAllButton.value = true;

  if (props.screenWidth < 1280) {
    if (currentDestinationImageId.value < targetDestinationId.value) {
      nextDestinationImageId.value = targetDestinationId.value;
      goToNextImage(currentDestinationImageElement.value, nextDestinationImageElement.value);
    };

    if (currentDestinationImageId.value > targetDestinationId.value) {
      prevDestinationImageId.value = targetDestinationId.value;
      goToPrevImage(currentDestinationImageElement.value, prevDestinationImageElement.value);
    };
  } else {
    desktopChangeDestinationImage(currentDestinationImageElement.value);
  };

  targetDestinationDetailId.value = targetDestinationId.value;
  changeDetail(currentDestinationDetailElement.value, targetDestinationDetailElement.value);

  if (props.screenWidth < 1280) {
    setTimeout(() => {
      currentDestinationImageId.value = targetDestinationId.value;
      currentDestinationDetailId.value = targetDestinationId.value;
      setTimeout(() => {
        nextDestinationImageId.value = null;
        prevDestinationImageId.value = null;
        targetDestinationDetailId.value = null;
        disableAllButton.value = false;
        container.value?.scrollTo(0, 0);
      }, 0);
    }, 500);
  } else {
    setTimeout(() => {
      currentDestinationImageId.value = targetDestinationId.value;
      setTimeout(() => {
        currentDestinationDetailId.value = targetDestinationId.value;
        setTimeout(() => {
          targetDestinationDetailId.value = null;
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
    class="h-full w-screen bg-destination-mobile bg-cover pt-24 overflow-x-hidden overflow-y-scroll scroll-smooth md:bg-destination-tablet xl:bg-destination-desktop xl:overflow-x-hidden xl:pt-52"
    @vnode-mounted="emits('mounted', 'destination')"
    @scroll="contentScroll()"
  >
    <section class="relative grid grid-cols-1 place-items-center w-full gap-y-8 px-10 md:pt-5 xl:h-full xl:pt-1 xl:grid-cols-auto-max xl:jusify-between xl:pr-42 xl:pl-0 xl:gap-y-0 xl:grid-rows-2-auto">
      <h2 class="font-barlow-condensed text-base tracking-2.7 text-white md:text-xl md:place-self-start md:tracking-3.38 xl:tracking-4.72 xl:text-7 leading-tight xl:col-start-1 xl:row-start-1 xl:col-span-2 xl:ml-41.5">
        <span class="pr-4 font-bold opacity-25">01</span>
        <span>PICK YOUR DESTINATION</span>
      </h2>
      <section class="flex h-42.5 w-screen items-center md:h-75 xl:h-111.25 xl:row-start-1 xl:row-span-2 xl:col-start-1 xl:w-full">
        <section class="w-full h-full">
          <div class="relative h-full">
            <div class="w-full h-full absolute right-full xl:hidden">
              <div ref="prevDestinationImageElement" class="w-full h-full flex justify-center items-center text-white xl:z-0">
                <img
                  :src="prevDestinationImage.image"
                  :alt="prevDestinationImage.alt"
                  class="relative z-10 h-full object-contain drop-shadow-planet"
                >
              </div>
            </div>
            <div class="w-full h-full absolute">
              <div ref="currentDestinationImageElement" class="w-full h-full flex justify-center items-center text-white xl:z-10">
                <img
                  :src="currentDestinationImage.image"
                  :alt="currentDestinationImage.alt"
                  class="relative z-10  h-full object-contain drop-shadow-planet"
                >
              </div>
            </div>
            <div class="w-full h-full absolute left-full xl:hidden">
              <div ref="nextDestinationImageElement" class="w-full h-full flex justify-center items-center text-white xl:z-20">
                <img
                  :src="nextDestinationImage.image"
                  :alt="nextDestinationImage.image"
                  class="relative z-10  h-full object-contain drop-shadow-planet"
                >
              </div>
            </div>
            <img>
          </div>
        </section>
      </section>
      <div class="w-full grid grid-cols-1 gap-y-8 mb-16 md:m-0 md:px-12 xl:place-self-start xl:px-0 xl:place-items-start xl:mt-16">
        <ul class="flex w-full justify-center gap-x-6 font-barlow-condensed md:gap-x-9 xl:justify-start">
            <li class="relative" v-for="(destination, id) in props.destinations">
              <button
                class="peer text-sm tracking-2.36 transition-colors disabled:border-0 md:text-base"
                :class="{
                  'text-white': targetDestinationId == parseInt(id),
                  'text-lavender': targetDestinationId != parseInt(id),
                }"
                :disabled="disableAllButton"
                @click="changeDestination(parseInt(id))"
              >
                {{ destination.name }}
              </button>
              <div
                class="absolute -bottom-2 h-0.5 w-full scale-0 bg-white transition-transform peer-hover:scale-100 peer-hover:bg-lavender md:-bottom-3"
                :class="{
                  'scale-0': targetDestinationId != parseInt(id),
                  'scale-100 peer-hover:bg-white': targetDestinationId == parseInt(id),
                }"
              ></div>
            </li>
          </ul>
        <div class="relative w-full min-h-50 md:h-80">
          <section
            ref="targetDestinationDetailElement"
            class="absolute hidden w-full flex-col items-center text-white opacity-0 transition-opacity duration-250 md:px-2 xl:items-start xl:px-0"
          >
            <h1 class="font-bellefair text-14 uppercase md:text-20 xl:mb-3.5 xl:text-left xl:text-25" >
              {{ targetDestinationDetail.name }}
            </h1>
            <p class="text-center font-barlow text-3.75 text-lavender md:text-base xl:text-left xl:text-lg xl:leading-loose">
              {{ targetDestinationDetail.description }}
            </p>
            <div
              class="mt-8 mb-12 flex w-full flex-col items-center gap-y-8 border-t border-arsenic pt-8 md:mt-12 md:flex-row md:justify-evenly md:pt-7 xl:mt-14 xl:mb-0 xl:justify-start xl:gap-x-20"
              v-if="targetDestinationDetail.distance"
            >
              <div class="flex flex-col items-center gap-y-3 xl:items-start">
                <h6 class="font-barlow-condensed text-sm tracking-2.36 text-lavender">
                  AVG. DISTANCE
                </h6>
                <p class="font-bellefair text-7 uppercase text-white">
                  {{ targetDestinationDetail.distance }}
                </p>
              </div>
              <div class="flex flex-col items-center gap-y-3 xl:items-start">
                <h6 class="font-barlow-condensed text-sm tracking-2.36 text-lavender">
                  EST. TRAVEL TIME
                </h6>
                <p class="font-bellefair text-7 uppercase text-white">
                  {{ targetDestinationDetail.travel }}
                </p>
              </div>
            </div>
          </section>
          <section ref="currentDestinationDetailElement" class="absolute flex w-full flex-col items-center text-white transition-opacity duration-250 md:px-2 xl:items-start xl:px-0">
            <h1 class="font-bellefair text-14 uppercase md:text-20 xl:mb-3.5 xl:text-left xl:text-25">
              {{ currentDestinationDetail.name }}
            </h1>
            <p class="text-center font-barlow text-3.75 text-lavender md:text-base xl:text-left xl:text-lg xl:leading-loose">
              {{ currentDestinationDetail.description }}
            </p>
            <div class="mt-8 mb-12 flex w-full flex-col items-center gap-y-8 border-t border-arsenic pt-8 md:mt-12 md:flex-row md:justify-evenly md:pt-7 xl:mt-14 xl:mb-0 xl:justify-start xl:gap-x-20">
              <div class="flex flex-col items-center gap-y-3 xl:items-start">
                <h6 class="font-barlow-condensed text-sm tracking-2.36 text-lavender">
                  AVG. DISTANCE
                </h6>
                <p class="font-bellefair text-7 uppercase text-white">
                  {{ currentDestinationDetail.distance }}
                </p>
              </div>
              <div class="flex flex-col items-center gap-y-3 xl:items-start">
                <h6 class="font-barlow-condensed text-sm tracking-2.36 text-lavender"
                >
                  EST. TRAVEL TIME
                </h6>
                <p class="font-bellefair text-7 uppercase text-white">
                  {{ currentDestinationDetail.travel }}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </section>
</template>
