import {flatMap} from 'lodash';
import {timer, mediaQuery} from '../helper.js';
import {features} from '../model.js';

class Features {
  navBtns = document.querySelectorAll('.features__nav-btn');
  container = document.querySelector('.features-container');

  constructor() {
    this.init();
  }

  init() {
    this.createCards();
  }

  interact() {
    const allCards = document.querySelectorAll('.features__card');
    allCards.forEach(card => this.toggleInfo(card));
    this.scroll();

    features.forEach((feature, i) => {
      this.mobile(feature, i);
    });
  }

  createCards() {
    features.forEach(feature => this.container.insertAdjacentHTML('beforeend', markup(feature)));

    function markup(feature) {
      const language = document.body.dataset.lang;
      return `
        <div class="features__card" id="${feature.id}">
        <div class="features__card--img">
        </div>
        <div class="features__card--shadow">
          <span class="features__card--name">${feature.name}</span>
          <p>${feature.description[language]}</p>
        </div>
      </div>
      `;
    }
  }

  toggleInfo(card) {
    const parent = this;
    const allCards = document.querySelectorAll('.features__card');
    const query = matchMedia(`(hover: hover) and (min-width: 50.0625em)`);

    const closeAllCards = () => allCards.forEach(card => card.classList.remove('open'));
    const closeCard = () => card.classList.remove('open');
    const openCard = () => card.classList.add('open');

    const onClick = e => {
      //Close When Scrolling
      parent.navBtns.forEach(btn => btn.addEventListener('click', () => closeAllCards()));

      //Open Card
      const isOpened = card.classList.contains('open');
      const btn = e.target;
      if (!btn) return;

      if (isOpened) closeCard();
      else {
        closeAllCards();
        openCard();
      }
    };

    const checkQuery = query => {
      if (query.matches) {
        card.removeEventListener('click', onClick);
        card.addEventListener('mouseover', openCard);
        card.addEventListener('mouseout', closeCard);
      } else {
        card.removeEventListener('mouseover', openCard);
        card.removeEventListener('mouseout', closeCard);
        card.addEventListener('click', onClick);
      }
    };

    checkQuery(query);
    query.addEventListener('change', e => {
      closeAllCards();
      checkQuery(e);
    });
  }

  scroll() {
    const parent = this;
    const allCards = document.querySelectorAll('.features__card');
    const cardWidth = allCards[0].getBoundingClientRect().width;
    const distance = (cardWidth + 70) * 3;

    this.navBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        if (btn.dataset.btn == 'prev') {
          parent.container.scrollBy(-distance, 0);
        } else {
          parent.container.scrollBy(distance, 0);
        }
      });
    });
  }

  mobile(featureNode, nodeIndex) {
    const parent = this;
    const card = document.querySelector(`#${featureNode.id}`);
    const index = nodeIndex + 1;
    const queryMobile = mediaQuery(800);
    const queryMobileSmall = mediaQuery(430);

    const totalColumns = 3;
    const row = Math.ceil(index / totalColumns);
    const column = setColumn();
    let posY = row > 1 ? 'bottom' : 'top';
    let posX;
    let cardWidth;
    let cardHeight = 2;
    let colSpan;
    let rowSpan;

    checkCardWidth();
    queryMobile.addEventListener('change', checkCardWidth);
    queryMobileSmall.addEventListener('change', checkCardWidth);

    /****************************************
         FUNCTIONS
    ****************************************/
    function checkCardWidth() {
      if (queryMobile.matches) cardWidth = 2;
      if (queryMobileSmall.matches) cardWidth = 3;
      if (!queryMobile.matches && !queryMobileSmall.matches) cardWidth = undefined;
      setPosX();
      setSpan();
      changeClasses();
    }

    function setColumn() {
      for (let i = 0; i < totalColumns; i++) {
        if (index == totalColumns * row - i) return totalColumns - i;
      }
    }

    function setPosX() {
      if (cardWidth == 2) posX = column > 1 ? 'right' : 'left';
      if (cardWidth == 3) posX = column == 1 ? 'left' : column == 2 ? 'mid' : 'right';
    }

    function setSpan() {
      if (cardWidth == 2) {
        if (posX == 'left') colSpan = `${column} / span ${cardWidth}`;
        if (posX == 'right') colSpan = `${column - (cardWidth - 1)} / span ${cardWidth}`;
      }

      if (cardWidth == 3) {
        colSpan = `1 / -1`;
      }

      if (posY == 'top') rowSpan = `${row} / span ${cardHeight}`;
      if (posY == 'bottom') rowSpan = `${row - (cardHeight - 1)} / span ${cardHeight}`;
    }

    /****************************************
           CHANGE POSITIONING
      ****************************************/

    function changeClasses() {
      const newClass = `${posX}-${posY}`;
      const prevClass = [...card.classList].find(c => (c.includes('left') || c.includes('right') ? c : ''));

      if (prevClass) card.classList.remove(`${prevClass}`);
      if (cardWidth) {
        card.classList.add(`${newClass}`);
        card.style.gridColumn = colSpan;
        card.style.gridRow = rowSpan;
      } else {
        card.classList.remove(`${newClass}`);
        card.style.gridColumn = null;
        card.style.gridRow = null;
      }
    }
  }
}

export default new Features();
