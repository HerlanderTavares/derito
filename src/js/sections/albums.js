import {timer, ANIMATION_TIME, mediaQuery, DISPLAY_TIME} from '../helper.js';
import {albums} from '../model.js';
import platforms from 'url:../../imgs/platforms.svg';
import icons from 'url:../../imgs/icons.svg';

class Albums {
  container = document.querySelector('.album-container');
  menu = document.querySelector('.album-menu');
  bkg = document.querySelector('.album-bkg');
  mobileVersion;
  albumNumber = 0;

  constructor() {
    this.init();
  }

  init() {
    const menuCrumbs = document.querySelectorAll('.carousel-menu__crumbs button');
    menuCrumbs.forEach(btn => btn.classList.remove('active'));
    menuCrumbs[this.albumNumber].classList.add('active');
  }

  interact() {
    this.createAlbums();
    this.albumMenu();
    this.navigateAlbums();
  }

  createAlbums() {
    const parent = this;
    albums.forEach(album => {
      const html = this.cardMarkup(album);
      parent.container.insertAdjacentHTML('beforeend', html);
    });
  }

  albumMenu() {
    const parent = this;

    this.checkQuery(mediaQuery(750));
    checkMobile();

    mediaQuery(750).addEventListener('change', function (e) {
      parent.checkQuery(e);
      checkMobile();
    });

    this.menu.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.album__cover');

      if (!btn) return;
      parent.removeMenu();
      setTimeout(() => parent.showAlbum(btn), ANIMATION_TIME);
    });

    function checkMobile() {
      if (parent.mobileVersion) {
        parent.removeMenu();
        setTimeout(() => parent.showAlbum(), ANIMATION_TIME);
      } else {
        parent.removeAlbum();
        parent.showMenu();
      }
    }
  }

  navigateAlbums() {
    const parent = this;
    const nextBtn = document.querySelector('.carousel-menu__btn[data-btn="next"]');
    const prevBtn = document.querySelector('.carousel-menu__btn[data-btn="prev"]');
    const allAlbums = document.querySelectorAll('.album__info');
    const closeBtns = document.querySelectorAll('.album__close-btn');
    const menuCrumbs = document.querySelectorAll('.carousel-menu__crumbs button');
    const timeDelay = ANIMATION_TIME * 2;
    const numberOfAlbums = allAlbums.length;

    //Close Albums
    closeBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        parent.removeAlbum();
        setTimeout(() => parent.showMenu(), ANIMATION_TIME);
        parent.albumNumber = 0;
        menuCrumbs.forEach(btn => btn.classList.remove('active'));
        menuCrumbs[parent.albumNumber].classList.add('active');
      });
    });

    //Cycle Albums
    nextBtn.addEventListener('click', nextAlbum);
    prevBtn.addEventListener('click', prevAlbum);

    function nextAlbum(e) {
      e.preventDefault();
      parent.albumNumber++;
      if (parent.albumNumber > numberOfAlbums - 1) parent.albumNumber = 0;

      allAlbums.forEach(album => album.classList.remove('active'));
      menuCrumbs.forEach(btn => btn.classList.remove('active'));
      menuCrumbs[parent.albumNumber].classList.add('active');
      setTimeout(() => allAlbums[parent.albumNumber].classList.add('active'), timeDelay);
    }

    function prevAlbum(e) {
      e.preventDefault();
      parent.albumNumber--;
      if (parent.albumNumber < 0) parent.albumNumber = numberOfAlbums - 1;

      allAlbums.forEach(album => album.classList.remove('active'));
      menuCrumbs.forEach(btn => btn.classList.remove('active'));
      menuCrumbs[parent.albumNumber].classList.add('active');
      setTimeout(() => allAlbums[parent.albumNumber].classList.add('active'), timeDelay);
    }

    //Breadcrumb Menu
    menuCrumbs.forEach((btn, i) => {
      btn.addEventListener('click', function () {
        console.log(i);
        parent.albumNumber = i;

        allAlbums.forEach(album => album.classList.remove('active'));
        menuCrumbs.forEach(btn => btn.classList.remove('active'));
        menuCrumbs[parent.albumNumber].classList.add('active');
        setTimeout(() => allAlbums[parent.albumNumber].classList.add('active'), timeDelay);
      });
    });
  }

  /****************************************
       HELPERS
  ****************************************/
  removeMenu() {
    const parent = this;
    this.menu.style.opacity = 0;
    this.bkg.style.clipPath = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
    setTimeout(() => {
      parent.menu.style.display = 'none';
      parent.bkg.style.display = 'none';
    }, ANIMATION_TIME);
  }

  showMenu() {
    const parent = this;
    parent.menu.style.display = null;
    parent.bkg.style.display = null;
    setTimeout(() => (this.bkg.style.clipPath = null), DISPLAY_TIME);
    setTimeout(() => (this.menu.style.opacity = null), ANIMATION_TIME);
  }

  removeAlbum() {
    const parent = this;
    const allAlbums = document.querySelectorAll('.album__info');
    parent.container.style.opacity = null;

    setTimeout(() => {
      this.container.style.display = null;

      allAlbums.forEach(album => {
        album.classList.remove('active');
        setTimeout(() => parent.setAlbumNumber(), 100);
      });
    }, ANIMATION_TIME);
  }

  showAlbum(btn = null) {
    const parent = this;
    const allAlbums = document.querySelectorAll('.album__info');
    this.container.style.display = 'grid';

    setTimeout(() => {
      parent.container.style.opacity = 1;

      if (btn != null) {
        allAlbums.forEach(album => {
          album.classList.remove('active');
          if (album.id == btn.dataset.album) album.classList.add('active');
          parent.setAlbumNumber();
        });
      } else {
        allAlbums.forEach(album => album.classList.remove('active'));
        allAlbums[0].classList.add('active');
      }
    }, DISPLAY_TIME);
  }

  setAlbumNumber() {
    const parent = this;
    const allAlbums = document.querySelectorAll('.album__info');

    allAlbums.forEach((album, i) => {
      if (album.classList.contains('active')) parent.albumNumber = i;
    });
  }

  cardMarkup(album) {
    const name = name => name.replace('-', ' ');
    const language = document.body.dataset.lang;

    return `
    <div class="album__info" id="${album.name}">
    <img
      class="album__img"
      src="${album.img}"
      alt="Derito ${album.order} album cover: ${name(album.name)}"
    />

    <h2 class="album__title">${name(album.name)}</h2>

    <p class="album__paragraph">${album.description[language]}</p>

    <div class="album__platforms">
      <a
        target="_blank"
        class="album__platforms--btn"
        href="${album.links.spotify}"
        data-platform="spotify"
      >
        <svg><use href="${platforms}#spotify"></use></svg>
        <span class="album__platforms--title">Spotify</span>
      </a>
      <a
        target="_blank"
        class="album__platforms--btn"
        href="${album.links.apple}"
        data-platform="apple"
      >
        <svg><use href="${platforms}#apple"></use></svg>
        <span class="album__platforms--title">Apple</span>
      </a>
      <a
        target="_blank"
        class="album__platforms--btn"
        href="${album.links.amazon}"
        data-platform="amazon"
      >
        <svg><use href="${platforms}#amazon"></use></svg>
        <span class="album__platforms--title">Amazon</span>
      </a>
      <a
        target="_blank"
        class="album__platforms--btn"
        href="${album.links.deezer}"
        data-platform="deezer"
      >
        <svg><use href="${platforms}#deezer"></use></svg>
        <span class="album__platforms--title">Deezer</span>
      </a>
    </div>

    <button class="album__close-btn">
      <svg class="icon"><use href="${icons}#close-btn"></use></svg>
    </button>
  </div>
    `;
  }

  checkQuery(query) {
    if (query.matches) this.mobileVersion = true;
    else this.mobileVersion = false;
  }
}

export default new Albums();
