import icons from 'url:../../imgs/flags.svg';

class Language {
  allBtns = document.querySelectorAll('.lang-menu__btn');

  constructor() {
    this.init();
  }

  interact() {
    this.desktop();
    this.mobile();
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
        setTimeout(() => menu.classList.add('opened'), 300);
      }, 200);
    });

    //Close On Click
    document.body.addEventListener('click', function () {
      if (menu.classList.contains('opened')) {
        parent.desktopClose();
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
    this.desktopMenu.style.animation = `pan 1s ease-out infinite alternate paused`;

    //Show Menu
    this.desktopMenu.style.transform = `translateX(-50%)`;
    this.desktopList.style.gap = '2rem';
    this.desktopList.style.opacity = 1;
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
    this.desktopMenu.style.transform = `translateX(-${itemWidth / 2}px)`;
    setTimeout(() => (this.desktopList.style.opacity = 0), 300);

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
      console.log(smallPhone);
    });

    //Initial State
    runClose();

    //Open On Click
    btn.addEventListener('pointerdown', function (e) {
      console.log(e.target);

      setTimeout(() => {
        runOpen();
        setTimeout(() => menu.classList.add('opened'), 300);
      }, 100);
    });

    //Close On Click
    document.body.addEventListener('click', function () {
      if (menu.classList.contains('opened')) {
        runClose();
        menu.classList.remove('opened');
      }
    });

    this.mobileItems.forEach(item => {
      if (item.dataset.lang == document.body.dataset.lang) {
        item.style.zIndex = 5;
        item.style.pointerEvents = 'none';
      }
    });

    function runOpen() {
      if (smallPhone == true) parent.mobileOpen('vertical');
      else parent.mobileOpen('horizontal');
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
    setTimeout(() => (this.mobileList.style.opacity = 0), 300);

    //Show Button
    this.mobileBtn.style.opacity = 1;
    this.mobileBtn.style.pointerEvents = 'initial';
  }
}

export default new Language();
