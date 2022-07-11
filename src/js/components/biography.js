import {ANIMATION_TIME, DISPLAY_TIME, mediaQuery, observe} from '../helper';
import {biography} from '../model';

class Biography {
  mainContainer = document.querySelector('.biography');

  constructor() {
    this.init();
  }

  init() {}

  interact() {
    const language = 'french';
    const bio = 'myCareer';
    const paragraph = biography[bio].description[language];
    const title = biography[bio].title[language];
    const container = document.querySelectorAll('.biography-info__content p');
    const titleSpan = document.querySelectorAll('.biography-info__content span');

    container.forEach(c => (c.textContent = paragraph));
    titleSpan.forEach(t => (t.textContent = title));

    this.menu();
  }

  menu() {
    const bioCards = document.querySelectorAll('.biography-info');

    bioCards.forEach((card, i) => {
      this.toggleMenu(bioCards, card, i);
    });
  }

  bioInfo() {}

  /****************************************
       HELPERS
  ****************************************/
  toggleMenu(cards, card, index) {
    const parent = this;
    const query = mediaQuery(850);
    const content = card.querySelector('.biography-info__content');
    const backBtn = card.querySelector('.biography-info__back-btn');

    /************** Check Media Query **************/
    checkQuery();
    query.addEventListener('change', checkQuery);

    function checkQuery() {
      if (query.matches) {
        reset();
        card.removeEventListener('click', open);
        card.removeEventListener('click', close);
        card.addEventListener('click', openMobile);
      } else {
        reset();
        card.removeEventListener('click', openMobile);
        card.addEventListener('click', open);
        card.addEventListener('click', close);
      }
    }

    /************** Open Menu **************/
    function open(e) {
      const btn = e.target.closest('.biography-info__btn');
      if (!btn) return;

      cards.forEach((card, i) => {
        if (i != index) {
          card.style.opacity = 0;
          card.style.pointerEvents = 'none';
        }
      });

      card.classList.add('open');
      backBtn.style.display = 'flex';

      setTimeout(() => (card.style.transform = 'translateX(0)'), ANIMATION_TIME);

      setTimeout(() => {
        content.style.opacity = 1;
        backBtn.style.opacity = 1;
      }, ANIMATION_TIME * 2);
    }

    /************** Close Menu **************/
    function close(e) {
      const btn = e.target.closest('.biography-info__back-btn');
      if (!btn) return;

      content.style.opacity = null;
      backBtn.style.opacity = null;

      setTimeout(() => {
        cards.forEach(card => {
          card.style.opacity = null;
          card.style.pointerEvents = null;
        });
        card.style.transform = null;
        backBtn.style.display = null;
      }, ANIMATION_TIME);

      setTimeout(() => card.classList.remove('open'), ANIMATION_TIME * 2);
    }

    /************** Reset Menu **************/
    function reset() {
      cards.forEach(card => {
        const content = card.querySelector('.biography-info__content');
        const backBtn = card.querySelector('.biography-info__back-btn');

        backBtn.style.opacity = null;
        content.style.opacity = null;
        card.style.opacity = null;
        card.style.pointerEvents = null;
        card.style.opacity = null;
        card.style.pointerEvents = null;
        backBtn.style.display = null;
        card.classList.remove('open');
      });
    }

    /************** Open Mobile Version **************/
    function openMobile(e) {
      const btn = e.target.closest('.biography-info__btn');
      if (!btn) return;
      card.classList.toggle('open');
    }

    /************** Close All **************/
    observe(parent.mainContainer, callback, 0);

    function callback(entries) {
      const intersecting = entries[0].isIntersecting;
      if (!intersecting) reset();
    }
  }
}
export default new Biography();
