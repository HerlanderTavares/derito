import navigation from '../components/navbar.js';
import language from '../components/langMenu.js';
import {invert} from 'lodash';

class Hero {
  header = document.querySelector('.header');
  hero = document.querySelector('.hero');
  subHero = document.querySelector('.subhero');
  title = document.querySelector('.subhero__title');

  constructor() {
    this.init();
  }

  init() {
    this.subhero();
  }

  interact() {
    this.navigation();
    this.langMenu();
  }

  navigation() {
    navigation.interact();
    navigation.fixedNav();
    navigation.heroNav();
  }

  langMenu() {
    language.interact();
  }

  subhero() {
    /****************************************
           OBSERVE HEIGHT & TOP
    ****************************************/
    const observeGap = new ResizeObserver(entries => {
      const header = this.header.getBoundingClientRect();
      const hero = this.hero.getBoundingClientRect();
      const {width, height} = entries[0].contentRect;

      const setSubheroTop = value => {
        this.subHero.style.top = `-${value}px`;
        this.subHero.style.marginBottom = `-${value}px`;
      };

      if (width > 1200 && height > 850)
        setSubheroTop(height - (hero.y + window.scrollY + hero.height));
      else setSubheroTop(0);
    });

    observeGap.observe(this.header);

    /****************************************
         OBSERVE HERO SECTION
    ****************************************/
    const parent = this;
    const observeHero = new IntersectionObserver(callback, {threshold: 0.7});
    observeHero.observe(this.hero);

    function callback(entries) {
      const inView = entries[0].isIntersecting;

      if (!inView) {
        parent.title.style.opacity = 1;

        setTimeout(() => {
          parent.title.style['-webkit-filter'] = 'blur(0)';
          parent.title.style.filter = 'blur(0)';
        }, 200);

        observeHero.unobserve(parent.hero);
      }
    }
  }
}

export default new Hero();
