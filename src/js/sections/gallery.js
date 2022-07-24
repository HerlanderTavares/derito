import {intersection, startCase} from 'lodash';
import {timer, observe, mediaQuery} from '../helper.js';
import photos from '../components/photos.js';
import videos from '../components/videos.js';

class Gallery {
  constructor() {
    this.init();
  }

  init() {}

  interact() {
    photos.interact();
    videos.interact();
    this.switchGalleries();
  }

  /****************************************
       HELPERS
  ****************************************/
  switchGalleries() {
    const container = document.querySelector('.gallery-container');
    const switchBtns = document.querySelector('.gallery__switch');

    switchBtns.addEventListener('click', e => {
      const btn = e.target.closest('.gallery__switch--btn');
      if (!btn) return;

      const gallery = btn.dataset.switch;
      container.classList.remove('photos');
      container.classList.remove('videos');
      container.classList.add(gallery);
    });
  }
}

export default new Gallery();
