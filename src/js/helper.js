import ScrollReveal from 'scrollreveal/dist/scrollreveal.js';

export const mediaQuery = function (querySize, minmax = 'max', width_height = 'width') {
  const query = matchMedia(`(${minmax}-${width_height}: ${querySize / 16}em)`);
  return query;
};

export function reveal(
  element,
  delay = 0,
  duration = 800,
  distance = 0,
  origin = 'bottom',
  remove = false,
  options = {
    delay: delay,
    origin: origin,
    distance: `${distance}px`,
    duration: duration,
    mobile: true,
    afterReveal: function () {
      if (remove) {
        element.style.transform = null;
        element.style.transition = null;
      }
    },
  }
) {
  /**
   * Scroll Reveal
   * @param  {Element} element The element to reveal when scrolling
   * @param  {Number} delay Delay in milliseconds
   * @param  {Number} duration Duration of animation in milliseconds
   * @param  {Number} distance Distance from its final destination in px
   * @param  {String} origin Ease in from top, bottom, left, right
   * @param  {Boolean} remove If true, removes transform and transition properties set by function
   * @param  {Object} options Options for the function
   */

  ScrollReveal().reveal(element, options);
}

export function observe(element, func, threshold) {
  const observer = new IntersectionObserver(func, {threshold: threshold});
  observer.observe(element);
}

export const ANIMATION_TIME = 300;
export const DISPLAY_TIME = 100;
