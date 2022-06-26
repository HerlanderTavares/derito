import {timer, mediaQuery, ANIMATION_TIME} from '../helper.js';
import musicPlayer from '../components/musicPlayer.js';
import ScrollReveal from 'scrollreveal/dist/scrollreveal.js';

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

    mediaQuery(1100).addEventListener('change', e =>
      modifyCard(e, parent.afrojazzCard, 'landscape')
    );

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

    reveal(bkg, 200);
    reveal(img, 400);
    reveal(content, 400);
    titles.forEach(title => reveal(title, 500));
    reveal(learnBtn, 600);
    reveal(player, 700, removeTransform);

    function reveal(
      element,
      time = 300,
      afterReveal = null,
      options = {
        delay: time,
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        mobile: true,
        afterReveal: afterReveal,
      }
    ) {
      const mainOptions = {
        delay: time,
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        mobile: true,
      };

      ScrollReveal().reveal(element, options);
    }

    function removeTransform() {
      player.style.transform = null;
    }
  }

  parallax(card) {
    //Variables
    const parent = this;
    const img = card.querySelector('.music-card__img');
    const bkg = card.querySelector('.music-card__bkg');
    const content = card.querySelector('.music-card__content');
    const player = card.querySelector('.player');
    const elements = [img, bkg, content, player];

    //Run Hover Parallax Only on Desktop
    this.checkQuery(mediaQuery(1100));
    parent.observeSection(run);

    mediaQuery(1100).addEventListener('change', function (e) {
      parent.checkQuery(e);
      run();
    });

    //Run Hover Parallax
    function run() {
      if (!parent.mobileVersion && parent.sectionInView) {
        reset();
        document.addEventListener('mousemove', mousemove);
      } else {
        reset();
        document.removeEventListener('mousemove', mousemove);
      }
    }

    //Event Listener Function
    function mousemove(e) {
      let x = e.clientX - window.innerWidth / 1.5;
      let y = e.clientY - window.innerHeight / 1.5;

      setTimeout(() => {
        bkg.style.transform = `translateX(${x / 70}px) translateY(${y / 70}px)`;
        img.style.transform = `translateX(${(x / 50) * -1}px) translateY(${(y / 50) * -1}px)`;
        content.style.transform = `translateX(${(x / 25) * -1}px) translateY(${(y / 25) * -1}px)`;
        player.style.transform = `translateX(${(x / 100) * -1}px) translateY(${(y / 100) * -1}px)`;
      }, 200);
    }

    //Reset Elements to Initial Position
    function reset() {
      elements.forEach(element => (element.style.transform = 'unset'));
    }
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
