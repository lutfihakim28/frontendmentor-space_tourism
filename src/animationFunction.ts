// for next transition on mobile or tablet
export function goToNextImage(currentImageElement: HTMLElement | undefined, nextImageElement: HTMLElement | undefined) {
  currentImageElement?.classList.add('-translate-x-full', 'transition-tansform', 'duration-500');
  nextImageElement?.classList.add('-translate-x-full', 'transition-tansform', 'duration-500');

  setTimeout(() => {
    currentImageElement?.classList.replace('flex', 'hidden');
    currentImageElement?.classList.remove('-translate-x-full', 'transition-tansform', 'duration-500');
    setTimeout(() => {
      currentImageElement?.classList.replace('hidden', 'flex');
      setTimeout(() => {
        nextImageElement?.classList.replace('flex', 'hidden');
        nextImageElement?.classList.remove('-translate-x-full', 'transition-tansform', 'duration-500');
        setTimeout(() => {
          nextImageElement?.classList.replace('hidden', 'flex');
        }, 50);
      }, 0);
    }, 0);
  }, 500);
};

// for prev transition on mobile or tablet
export function goToPrevImage(currentImageElement: HTMLElement | undefined, prevImageElement: HTMLElement | undefined) {
  currentImageElement?.classList.add('translate-x-full', 'transition-tansform', 'duration-500');
  prevImageElement?.classList.add('translate-x-full', 'transition-tansform', 'duration-500');

  setTimeout(() => {
    currentImageElement?.classList.replace('flex', 'hidden');
    currentImageElement?.classList.remove('translate-x-full', 'transition-tansform', 'duration-500');
    setTimeout(() => {
      currentImageElement?.classList.replace('hidden', 'flex');
      setTimeout(() => {
        prevImageElement?.classList.replace('flex', 'hidden');
        prevImageElement?.classList.remove('translate-x-full', 'transition-tansform', 'duration-500');
        setTimeout(() => {
          prevImageElement?.classList.replace('hidden', 'flex');
        }, 50);
      }, 0);
    }, 0);
  }, 500);
};

// for image transition on desktop for crew and technology pages
export function desktopChangeImage(currentImageElement: HTMLElement | undefined) {
  currentImageElement?.classList.add('translate-x-full', 'transition-tansform', 'duration-250');
  setTimeout(() => {
    currentImageElement?.classList.remove('translate-x-full');
    setTimeout(() => {
      currentImageElement?.classList.remove('transition-tansform', 'duration-250');
    }, 250);
  }, 250);
};

// for image transition on desktop for destination page
export function desktopChangeDestinationImage(currentImageElement: HTMLElement | undefined) {
  currentImageElement?.classList.add('-translate-x-full', 'transition-tansform', 'duration-250');
  setTimeout(() => {
    currentImageElement?.classList.remove('-translate-x-full');
    setTimeout(() => {
      currentImageElement?.classList.remove('transition-tansform', 'duration-250');
    }, 250);
  }, 250);
};

// for details transition
export function changeDetail(currentDetailElement: HTMLElement | undefined, targetDetailElement: HTMLElement | undefined) {
  currentDetailElement?.classList.add('opacity-0');
  targetDetailElement?.classList.replace('hidden', 'flex');
  setTimeout(() => {
    currentDetailElement?.classList.replace('flex', 'hidden');
    currentDetailElement?.classList.remove('opacity-0');
    targetDetailElement?.classList.replace('opacity-0', 'opacity-100');
    setTimeout(() => {
      currentDetailElement?.classList.replace('hidden', 'flex');
      setTimeout(() => {
        targetDetailElement?.classList.replace('flex', 'hidden');
        targetDetailElement?.classList.replace('opacity-100', 'opacity-0');
      }, 0);
    }, 250);
  }, 250);
};