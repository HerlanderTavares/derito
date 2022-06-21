import icons from 'url:../../imgs/flags.svg';
import {ANIMATION_TIME, DISPLAY_TIME, timer} from '../helper.js';

class Language {
  allBtns = document.querySelectorAll('.lang-menu__btn');
  allItems = document.querySelectorAll('.lang-menu__item');

  constructor() {
    this.init();
  }

  interact() {
    this.desktop();
    this.mobile();
    this.pauseLinks();
  }

  init() {
    this.desktopItems.forEach(item => {
      if (item.dataset.lang == document.body.dataset.lang) {
        //Current Language on the Top
        item.style.zIndex = 5;
        item.style.pointerEvents = 'none';

        //Set Language Button Current Flag
        const href = item.querySelector('.flag use').href.baseVal;
        const img = href.slice(href.indexOf('#'));
        const html = `<use href="${icons}${img}"></use>`;

        this.allBtns.forEach(btn => {
          btn.querySelector('svg').insertAdjacentHTML('afterbegin', html);
        });
      }
    });
  }

  /****************************************
       PAUSE LINKS
  ****************************************/
  pauseLinks() {
    const mainFolder = '../../../site_';
    this.allItems.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = item.dataset.lang;
        const site = lang == 'english' ? `${mainFolder}index.html` : `${mainFolder}${lang}.html`;

        setTimeout(() => window.open(site, '_self'), ANIMATION_TIME + 150);
      });
    });
  }

  /****************************************
       DESKTOP MENU
  ****************************************/
  desktopMenu = document.querySelector("[data-menu='desktop']");
  desktopList = this.desktopMenu.querySelector('.lang-menu__list');
  desktopItems = this.desktopMenu.querySelectorAll('.lang-menu__item');
  desktopBtn = this.desktopMenu.querySelector('.lang-menu__btn');

  desktop() {
    this.desktopClose();
    const parent = this;
    const menu = this.desktopMenu;
    const btn = this.desktopBtn;

    //Open On Click
    btn.addEventListener('pointerdown', function () {
      setTimeout(() => {
        parent.desktopOpen();
        setTimeout(() => menu.classList.add('opened'), ANIMATION_TIME);
      }, ANIMATION_TIME - 100);
    });

    //Close On Click
    document.body.addEventListener('click', function () {
      if (menu.classList.contains('opened')) {
        setTimeout(() => parent.desktopClose(), ANIMATION_TIME / 2);
        menu.classList.remove('opened');
      }
    });

    //Close On Scroll
    document.addEventListener('scroll', function () {
      if (menu.classList.contains('opened')) {
        setTimeout(() => parent.desktopClose(), ANIMATION_TIME / 2);
        menu.classList.remove('opened');
      }
    });
  }

  desktopOpen() {
    //Expand Items
    this.desktopItems.forEach(item => (item.style.transform = `translateX(0)`));

    //Remove Button
    this.desktopBtn.style.opacity = 0;
    this.desktopBtn.style.pointerEvents = 'none';
    this.desktopMenu.style.animation = `none`;

    //Show Menu
    this.desktopMenu.style.transform = `translateX(-50%)`;
    this.desktopList.style.gap = '2rem';
    this.desktopList.style.opacity = 1;
    this.desktopList.style.pointerEvents = 'initial';

    this.desktopItems.forEach(item => {
      if (item.dataset.lang == document.body.dataset.lang) item.style.pointerEvents = 'none';
    });
  }

  desktopClose() {
    //Collapse Items
    this.desktopItems.forEach(item => {
      const itemNumber = +item.dataset.flagNumber;
      item.style.transform = `translateX(${-itemNumber * 100}%)`;
    });

    //Remove Menu
    const itemWidth = Number.parseFloat(getComputedStyle(this.desktopItems[0]).width);
    this.desktopList.style.gap = 0;
    this.desktopList.style.pointerEvents = 'none';
    this.desktopMenu.style.transform = `translateX(-${itemWidth / 2}px)`;
    setTimeout(() => (this.desktopList.style.opacity = 0), ANIMATION_TIME);

    //Show Button
    this.desktopBtn.style.opacity = 1;
    this.desktopBtn.style.pointerEvents = 'initial';
    this.desktopMenu.style.animation = `pan 1s ease-out infinite alternate`;
  }

  /****************************************
       MOBILE MENU
  ****************************************/
  mobileMenu = document.querySelector("[data-menu='mobile']");
  mobileList = this.mobileMenu.querySelector('.lang-menu__list');
  mobileItems = this.mobileMenu.querySelectorAll('.lang-menu__item');
  mobileBtn = this.mobileMenu.querySelector('.lang-menu__btn');

  mobile() {
    const parent = this;
    const menu = this.mobileMenu;
    const btn = this.mobileBtn;
    const mediaQuery = matchMedia('(max-width: 400px)');
    let smallPhone;

    //Media Query
    checkQuery();
    mediaQuery.addEventListener('change', function (e) {
      if (e.matches) checkQuery();
      else checkQuery();
    });

    //Initial State
    runClose();

    //Open On Click
    btn.addEventListener('pointerdown', function (e) {
      setTimeout(() => {
        runOpen();
        setTimeout(() => menu.classList.add('opened'), ANIMATION_TIME);
      }, DISPLAY_TIME);
    });

    //Close On Click
    document.body.addEventListener('click', function () {
      if (menu.classList.contains('opened')) {
        runClose();
        menu.classList.remove('opened');
      }
    });

    //Close On Scroll
    document.addEventListener('scroll', function () {
      if (menu.classList.contains('opened')) {
        setTimeout(() => runClose(), ANIMATION_TIME / 2);
        menu.classList.remove('opened');
      }
    });

    function runOpen() {
      if (smallPhone == true) parent.mobileOpen('vertical');
      else parent.mobileOpen('horizontal');

      parent.mobileItems.forEach(item => {
        if (item.dataset.lang == document.body.dataset.lang) {
          item.style.zIndex = 5;
          item.style.pointerEvents = 'none';
        }
      });
    }

    function runClose() {
      if (smallPhone == true) parent.mobileClose('vertical');
      else parent.mobileClose('horizontal');
    }

    function checkQuery() {
      if (mediaQuery.matches) smallPhone = true;
      else smallPhone = false;

      if (smallPhone) parent.mobileClose('vertical');
      else parent.mobileClose('horizontal');
    }
  }

  mobileOpen(direction) {
    if (direction == 'horizontal') {
      //Expand Items
      this.mobileItems.forEach(item => (item.style.transform = `translateX(0)`));
    }

    if (direction == 'vertical') {
      //Expand Items
      this.mobileItems.forEach(item => (item.style.transform = `translateY(0)`));
    }

    //Remove Button
    this.mobileBtn.style.opacity = 0;
    this.mobileBtn.style.pointerEvents = 'none';

    //Show Menu
    this.mobileList.style.gap = '2rem';
    this.mobileList.style.opacity = 1;
    this.mobileList.style.pointerEvents = 'initial';

    this.mobileItems.forEach(item => {
      if (item.dataset.lang == document.body.dataset.lang) item.style.pointerEvents = 'none';
    });
  }

  mobileClose(direction) {
    if (direction == 'horizontal') {
      //Collapse Items
      this.mobileList.style.flexDirection = 'row-reverse';

      this.mobileItems.forEach(item => {
        const itemNumber = +item.dataset.flagNumber;
        item.style.transform = `translateX(${itemNumber * 100}%)`;
        if (item.dataset.lang == document.body.dataset.lang) {
          item.style.zIndex = 5;
        }
      });
    }

    if (direction == 'vertical') {
      //Collapse Items
      this.mobileList.style.flexDirection = 'column';

      this.mobileItems.forEach(item => {
        const itemNumber = +item.dataset.flagNumber;
        item.style.transform = `translateY(${-itemNumber * 100}%)`;
        if (item.dataset.lang == document.body.dataset.lang) item.style.zIndex = 5;
      });
    }

    //Remove Menu
    this.mobileList.style.gap = 0;
    this.mobileList.style.pointerEvents = 'none';
    setTimeout(() => (this.mobileList.style.opacity = 0), ANIMATION_TIME);

    //Show Button
    this.mobileBtn.style.opacity = 1;
    this.mobileBtn.style.pointerEvents = 'initial';
  }
}

export default new Language();
