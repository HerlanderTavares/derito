import {entries, intersection, invert, startCase} from 'lodash';
import {timer, observe, mediaQuery} from '../helper.js';

class Photos {
  parentContainer = document.querySelector('.gallery__photos-container');
  container = document.querySelector('.gallery__photos[data-photos="main"]');
  photosInView;

  constructor() {
    this.init();
  }

  init() {}

  interact() {
    this.generatePhotos();
    this.infiniteScroll();
    this.scroll();
  }

  generatePhotos() {
    const container = this.container;
    const totalPhotos = 25;
    const allSizes = [
      {large: [1, totalPhotos]},
      {wide: [3, 9, 11]},
      {tall: [6, 21, 24]},
      {long: [14, 16]},
      {square: [19]},
      {small: [4, 5, 17, 18]},
    ];

    // prettier-ignore
    const html = (index, size = 'medium') => `<div class="gallery__photo" data-number="${index}" data-size="${size}"></div>`;
    for (let i = 0; i < totalPhotos; i++) {
      const photoSize = size(i + 1) == undefined ? 'medium' : size(i + 1);
      container.insertAdjacentHTML('beforeend', html(i + 1, `${photoSize}`));
    }

    function size(loopIndex) {
      let size;
      allSizes.forEach(s => {
        const [name, photos] = Object.entries(s)[0];

        photos.map(num => {
          if (loopIndex == num) size = name;
        });
      });
      return size;
    }

    /************** Clone Parent Container **************/
    const prevContainer = this.container.cloneNode(true);
    const nextContainer = this.container.cloneNode(true);

    prevContainer.dataset.photos = 'prev';
    nextContainer.dataset.photos = 'next';

    this.parentContainer.insertBefore(prevContainer, this.container);
    this.parentContainer.insertBefore(nextContainer, null);
  }

  infiniteScroll() {
    const container = this.parentContainer;
    const query = mediaQuery(900);

    // /************** Position Scroll **************/
    const gap = 6;
    let initialPosV;
    let initialPosH;

    checkQuery();
    query.addEventListener('change', checkQuery);

    /************** Functions **************/
    function checkQuery() {
      if (query.matches) {
        //vertical
        initialPosV = Math.round(container.scrollHeight / 3 + gap);
        container.scrollTo(0, initialPosV);
        container.removeEventListener('scroll', resetHorizontal);
        container.addEventListener('scroll', resetVertical);
      } else {
        //horizontal
        initialPosH = Math.round(container.scrollWidth / 3 + gap);
        container.scrollTo(initialPosH, 0);
        container.removeEventListener('scroll', resetVertical);
        container.addEventListener('scroll', resetHorizontal);
      }
    }

    function resetHorizontal() {
      if (container.scrollLeft < 5 || container.scrollLeft >= initialPosH * 2 - 2)
        container.scrollTo(initialPosH, 0);
    }

    function resetVertical() {
      if (container.scrollTop < 5 || container.scrollTop >= initialPosV * 2)
        container.scrollTo(0, initialPosV);
    }
  }

  scroll() {
    const parent = this;
    const container = this.parentContainer;
    const mainContainer = container.parentElement;
    const query = mediaQuery(900);
    const [prevBtn, nextBtn] = document.querySelectorAll('.gallery__nav-btn[data-gallery="photos"]');
    const switchBtns = document.querySelector('.gallery__switch');

    prevBtn.addEventListener('click', back);
    nextBtn.addEventListener('click', forward);
    switchBtns.addEventListener('click', stopAuto);

    function back() {
      const orientation = query.matches ? 'Height' : 'Width';
      const dimension = container.parentElement.getBoundingClientRect()[orientation.toLowerCase()];

      const distance = dimension - dimension / 12;
      const top = orientation == 'Height' ? distance * -1 : 0;
      const left = orientation == 'Width' ? distance * -1 : 0;
      const options = {left: left, top: top, behavior: 'smooth'};
      container.scrollBy(options);
    }

    function forward() {
      const orientation = query.matches ? 'Height' : 'Width';
      const scrollOrigin = orientation == 'Height' ? 'Top' : 'Left';
      const dimension = container.parentElement.getBoundingClientRect()[orientation.toLowerCase()];

      let distance;
      const scrollDirection = eval(`container.scroll${scrollOrigin}`);
      const scrollSize = eval(`container.scroll${orientation}`);
      if (scrollDirection > scrollSize / 2) distance = (scrollSize / 3 + 6) * 2 - scrollDirection;
      else distance = dimension - dimension / 12;

      const top = orientation == 'Height' ? distance : 0;
      const left = orientation == 'Width' ? distance : 0;
      const options = {left: left, top: top, behavior: 'smooth'};
      container.scrollBy(options);
    }

    let interval;

    observe(mainContainer, callback, 0);

    function callback(entries) {
      const inView = entries[0].isIntersecting && mainContainer.classList.contains('photos');
      if (inView) parent.photosInView = true;
      else parent.photosInView = false;

      auto();
      [prevBtn, nextBtn].forEach(btn => btn.addEventListener('click', pauseAuto));
    }

    function auto() {
      if (parent.photosInView) {
        clearInterval(interval);
        interval = setInterval(forward, 1000 * 3);
      }
      if (!parent.photosInView) clearInterval(interval);
    }

    function pauseAuto() {
      clearInterval(interval);
      setTimeout(auto, 1000 * 10);
    }

    function stopAuto(e) {
      const btn = e.target.closest('.gallery__switch--btn');
      if (!btn) return;

      if (btn.dataset.switch == 'videos') clearInterval(interval);
      else {
        clearInterval(interval);
        interval = setInterval(forward, 1000 * 3);
      }
    }
  }
}
export default new Photos();
