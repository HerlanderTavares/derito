import {timer, mediaQuery, ANIMATION_TIME} from '../helper.js';
import musicPlayer from '../components/musicPlayer.js';
import ScrollReveal from 'scrollreveal/dist/scrollreveal.js';
import {musicStyles} from '../model.js';

class Music {
  section = document.querySelector('.music');
  allCards = document.querySelectorAll('.music-card');
  afrojazzCard = document.querySelector('.afrojazz');
  mobileVersion;
  sectionInView;

  constructor() {
    this.init();
  }

  init() {
    const parent = this;
    modifyCard(mediaQuery(1100), parent.afrojazzCard, 'landscape');
    modifyCard(mediaQuery(750), parent.afrojazzCard, 'left');

    mediaQuery(1100).addEventListener('change', e => modifyCard(e, parent.afrojazzCard, 'landscape'));

    mediaQuery(750).addEventListener('change', e => modifyCard(e, parent.afrojazzCard, 'left'));

    function modifyCard(query, card, modClass) {
      if (query.matches) card.classList.remove(modClass);
      else card.classList.add(modClass);
    }
  }

  interact() {
    musicPlayer.togglePlayer();
    musicPlayer.setProgress();
    musicPlayer.updateProgress();

    this.allCards.forEach(card => {
      this.learnMore(card);
      this.scrollReveal(card);
      this.fixedPlayer(card);
      this.scrollReveal(card);
      this.musicContent(card);
    });
  }

  fixedPlayer(card) {
    const parent = this;
    const player = card.querySelector('.player');
    this.observeSection(callback);

    function callback() {
      const playing = player.classList.contains('play');
      const audio = player.querySelector('audio');

      if (!parent.sectionInView && playing) player.classList.add('player--fixed');
      else player.classList.remove('player--fixed');

      audio.addEventListener('ended', () => player.classList.remove('player--fixed'));
    }
  }

  learnMore(card) {
    const parent = this;
    const content = card.querySelector('.music-card__content');
    const btn = card.querySelector('.music-card__learn');

    card.addEventListener('click', function (e) {
      const btn = e.target.closest('.music-card__learn');

      if (!btn) return;
      content.style.transform = 'scaleX(1)';
      btn.style.opacity = 0;
    });

    document.addEventListener('scroll', function () {
      content.style.transform = null;
      setTimeout(() => (btn.style.opacity = null), ANIMATION_TIME);
    });
  }

  scrollReveal(card) {
    const img = card.querySelector('.music-card__img');
    const bkg = card.querySelector('.music-card__bkg');
    const content = card.querySelector('.music-card__content');
    const titles = card.querySelectorAll('.music-card__title');
    const player = card.querySelector('.player');
    const learnBtn = card.querySelector('.music-card__learn');

    reveal(bkg);
    reveal(img, 100);
    reveal(content, 100);
    titles.forEach(title => reveal(title, 200));
    reveal(learnBtn, 300);
    reveal(player, 400, removeTransform);

    function reveal(
      element,
      time = 0,
      afterReveal = function () {},
      options = {
        delay: time,
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        mobile: true,
        afterReveal: afterReveal,
      }
    ) {
      ScrollReveal().reveal(element, options);
    }

    function removeTransform() {
      player.style.transform = null;
      content.style.transition = null;
      learnBtn.style.transition = null;
      titles.forEach(title => (title.style.transition = null));
    }
  }

  musicContent(card) {
    const language = document.body.dataset.lang;
    const id = card.dataset.style;
    const container = card.querySelector('.music-card__container p');
    const paragraph = musicStyles[id][language];

    container.textContent = paragraph;
  }

  checkQuery(query) {
    if (query.matches) this.mobileVersion = true;
    else this.mobileVersion = false;
  }

  observeSection(func) {
    const parent = this;
    const observer = new IntersectionObserver(callback, {threshold: 0});
    observer.observe(this.section);

    function callback(entries) {
      const intersecting = entries[0].isIntersecting;
      if (intersecting) parent.sectionInView = true;
      else parent.sectionInView = false;

      func();
    }
  }
}

export default new Music();
