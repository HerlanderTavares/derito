import {initial} from 'lodash';
import {TRUE} from 'sass';

class Navigation {
  header = document.querySelector('.header');
  nav = document.querySelector('.navbar');
  navDirection = this.nav.dataset.side;
  menuBtns = document.querySelectorAll('.menu-btn');
  menuBtnHero = document.querySelector('.menu-btn--hero');
  menuBtnFixed = document.querySelector('.menu-btn--fixed');
  heroInView;

  constructor() {
    parent = this;
  }

  interact() {
    //Open Menu
    parent.header.addEventListener('click', function (e) {
      const btn = e.target.closest('.menu-btn');
      if (!btn) return;
      parent.openNav();
    });

    //Close Menu
    parent.nav.addEventListener('click', function (e) {
      const btn = e.target.closest('.navbar__item');
      const closeBtn = e.target.closest('.navbar__close-btn');

      if (!btn && !closeBtn) return;
      parent.closeNav();
    });
  }

  smoothScroll() {
    parent.nav.addEventListener('click', function (e) {
      e.preventDefault();
      const click = e.target;

      if (click.classList.contains('navbar__link')) {
        const id = click.getAttribute('href');
        const section = document.querySelector(id);

        section.scrollIntoView({behavior: 'smooth'});
      }
    });
  }

  fixedNav() {
    parent.observeHero(callback);

    function callback() {
      if (!parent.heroInView) {
        parent.displayMenuBtn(parent.menuBtnFixed, 'on');
        if (!parent.nav.classList.contains('navbar--fixed')) parent.displayNav('on');
      } else {
        parent.displayMenuBtn(parent.menuBtnFixed, 'off');
      }
    }
  }

  heroNav() {
    const width = matchMedia('(max-width: 1200px)');
    const height = matchMedia('(max-height: 850px)');

    parent.observeHero(callback);

    function callback() {
      if (parent.heroInView) {
        parent.checkQueries();

        width.addEventListener('change', function (e) {
          if (e.matches) parent.checkQueries();
          else parent.checkQueries();
        });

        height.addEventListener('change', function (e) {
          if (e.matches) parent.checkQueries();
          else parent.checkQueries();
        });
      }
    }
  }

  /****************************************
   UTILITIES
   ****************************************/
  observeHero(func) {
    const hero = new IntersectionObserver(callback, {threshold: 0.1});
    hero.observe(parent.header);

    function callback(entries) {
      const intersecting = entries[0].isIntersecting;
      if (intersecting) parent.heroInView = true;
      else parent.heroInView = false;

      func();
    }
  }

  checkQueries() {
    const width = matchMedia('(max-width: 1200px)');
    const height = matchMedia('(max-height: 850px)');
    let queryWidth;
    let queryHeight;

    if (width.matches) queryWidth = true;
    else queryWidth = false;

    if (height.matches) queryHeight = true;
    else queryHeight = false;

    if (queryWidth || queryHeight) {
      parent.displayMenuBtn(parent.menuBtnHero, 'on');
      if (!parent.nav.classList.contains('navbar--fixed')) parent.displayNav('on');
    } else {
      parent.displayMenuBtn(parent.menuBtnHero, 'off');
      if (parent.nav.classList.contains('navbar--fixed')) parent.displayNav('off');
    }
  }

  displayNav(state) {
    const translateOpen = 'translateX(0)';
    const translateClose = parent.navDirection == 'left' ? 'translateX(-100%)' : 'translateX(100%)';

    if (state == 'on') {
      parent.nav.style.display = 'none';
      parent.nav.style.transform = translateClose;
      parent.nav.classList.add('navbar--fixed');
      setTimeout(() => (parent.nav.style.display = 'flex'), 300);
    }

    if (state == 'off') {
      parent.nav.style.display = 'flex';
      parent.nav.classList.remove('navbar--fixed');
      parent.nav.style.transform = translateOpen;
    }
  }

  displayMenuBtn(btn, state) {
    if (state == 'on') {
      btn.style.opacity = 1;
      btn.style.pointerEvents = 'auto';
    }

    if (state == 'off') {
      btn.style.opacity = 0;
      btn.style.pointerEvents = 'none';
    }
  }

  openNav() {
    parent.menuBtns.forEach(btn => {
      btn.classList.remove('btn-show');
      btn.classList.add('btn-hide');
    });

    setTimeout(() => {
      parent.nav.style.transform = 'translateX(0)';
    }, 200);
  }

  closeNav() {
    const translateClose = parent.navDirection == 'left' ? 'translateX(-100%)' : 'translateX(100%)';
    const navFixed = parent.nav.classList.contains('navbar--fixed');
    if (navFixed) parent.nav.style.transform = translateClose;

    setTimeout(() => {
      parent.menuBtns.forEach(btn => {
        btn.classList.remove('btn-hide');
        btn.classList.add('btn-show');
      });
    }, 250);
  }
}

export default new Navigation();
