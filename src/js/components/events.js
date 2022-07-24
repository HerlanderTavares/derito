import {mediaQuery, timer, timerIf} from '../helper.js';
import {events} from '../model.js';
import icons from 'url:../../imgs/icons.svg';
import flags from 'url:../../imgs/flags.svg';

class Events {
  folds = 8;
  eventIndex = 0;
  language = document.body.dataset.lang;
  map = document.querySelector('.events-map');
  mapContainer = document.querySelector('.events-map__container');
  mapHover;
  mapInView;

  constructor() {
    this.init();
  }

  init() {}

  interact() {
    this.countryInfo();
    this.mapInteract();
  }

  mapInteract() {
    this.mapFolds();
    this.shadows();
    this.dropshadows();
    this.toggleMap();
  }

  countryInfo() {
    events.forEach(info => {
      this.generateCountries(info);
      this.toggleInfo(info);
    });
  }

  /****************************************
       HELPERS
  ****************************************/

  /************** Map **************/
  toggleMap() {
    const parent = this;
    const query = mediaQuery(700, 'min');

    const onClick = () => {
      const isClosed = parent.map.classList.contains('close');
      if (isClosed) this.map.classList.remove('close');
    };

    parent.mapContainer.addEventListener('click', onClick);
    parent.observe(callback, 0.9);

    function callback() {
      const isClosed = parent.map.classList.contains('close');
      if (!parent.mapInView && !isClosed && query) {
        parent.map.classList.add('close');

        events.forEach(e => {
          const country = document.querySelector(`.country[data-country="${e.country}"]`);
          country.classList.remove('open');
        });
      }
    }
  }

  mapFolds() {
    const folds = this.folds;
    let index;

    const setX = coordinates(index, 'add', `index % 2 == 0 ? 5 : 0`);
    const setY = coordinates(index, 'sub', 'index % 2 == 0 ? 100 : 95');
    const resetX = coordinates(index, 'add', 0);
    const resetY = coordinates(index, 'sub', 100);

    const clipath = setX.concat(setY).map(coor => `${coor[0]} ${coor[1]}`);
    const clipathReset = resetX.concat(resetY).map(coor => `${coor[0]} ${coor[1]}`);

    document.documentElement.style.setProperty('--map-clip', `polygon(${clipath})`);
    document.documentElement.style.setProperty('--map-clip-reset', `polygon(${clipathReset})`);

    function coordinates(index, add_sub, coorY) {
      let x;
      let y;
      let condition;
      const coordinatesArr = [];

      if (add_sub == 'add') condition = ['index = 0', 'index <= folds', 'index++'];
      else condition = ['index = folds', 'index >= 0', 'index--'];

      for (eval(condition[0]); eval(condition[1]); eval(condition[2])) {
        x = index == folds ? 100 : (100 / folds) * index;
        y = eval(coorY);
        coordinatesArr.push([`${x}%`, `${y}%`]);
      }

      return coordinatesArr;
    }
  }

  shadows() {
    const shadows = this.folds;
    const foldWidth = 100 / shadows;
    const container = document.querySelector('.fold__shadows-container');

    for (let i = 0; i < shadows; i++) {
      const shadow = document.createElement('div');
      const width = i == shadows - 1 ? 100 - foldWidth * (shadows - 1) : foldWidth;

      shadow.setAttribute('class', 'fold__shadows');
      shadow.style.width = `${width}%`;
      container.appendChild(shadow);
    }
  }

  dropshadows() {
    const shadows = this.folds / 2;
    const foldWidth = 100 / this.folds;
    const container = document.querySelector('.events-map__dropshadow');

    createShadows().forEach((shadow, i) => {
      container.appendChild(shadow);

      const x = (i + 1) * 2 - 1;
      const left = foldWidth * x;
      shadow.style.left = `${left}%`;
      shadow.style.width = `${100 / shadows - 3}%`;
    });

    function createShadows() {
      const shadowArr = [];

      for (let i = 0; i < shadows; i++) {
        const shadow = document.createElement('div');
        shadow.setAttribute('class', 'fold__dropshadows');
        shadowArr.push(shadow);
      }

      return shadowArr;
    }
  }

  observe(func, threshold) {
    const parent = this;
    const observer = new IntersectionObserver(callback, {threshold: threshold});
    observer.observe(parent.map);

    function callback(entries) {
      const intersecting = entries[0].isIntersecting;
      if (intersecting) parent.mapInView = true;
      else parent.mapInView = false;

      func();
    }
  }

  /************** Countries **************/
  generateCountries(country) {
    const container = document.querySelector('.events-map__container');
    const html = this.countryMarkup(country);
    const coordinates = country.coordinates;

    container.insertAdjacentHTML('beforeend', html);
    const countryNode = document.querySelector(`.country[data-country="${country.country}"]`);
    countryNode.style.left = `${coordinates[0]}%`;
    countryNode.style.top = `${coordinates[1]}%`;
  }

  toggleInfo(info) {
    const country = document.querySelector(`.country[data-country="${info.country}"]`);

    country.addEventListener('click', e => {
      this.openInfo(country, e);
      this.closeInfo(country, e);
    });

    this.setInfo(info, country);
    this.showInfo(info, country);
  }

  openInfo(country, e) {
    const countries = document.querySelectorAll('.country');
    const btn = e.target.closest('.country__btn');
    if (!btn) return;

    countries.forEach(c => c.classList.remove('open'));
    country.classList.add('open');
  }

  closeInfo(country, e) {
    const btn = e.target.closest('.country__close-btn');
    if (!btn) return;
    country.classList.remove('open');
  }

  setInfo(info, country) {
    const {events} = info;
    const container = country.querySelector('.country__event');

    const eventName = e => (e.name[this.language] ? e.name[this.language] : e.name.default);
    const eventDetails = (detail, info) => `<span class="country__event--${detail}">${info}</span>`;

    const eventInfo = events
      .map(e => {
        return `
        ${eventDetails('date', e.year)}
        ${eventDetails('name', eventName(e))}
      `;
      })
      .join('');

    container.insertAdjacentHTML('beforeend', eventInfo);
  }

  showInfo(info, country) {
    const parent = this;
    const {events} = info;
    const names = country.querySelectorAll('.country__event--name');
    const years = country.querySelectorAll('.country__event--date');
    const city = country.querySelector('.country__city');
    const cityName = city.querySelector('.country__city--name');
    const nav = country.querySelector('.country__nav');
    const navCrumbs = country.querySelector('.country__nav--crumbs');

    if (events.length > 1) multipleEvents();
    else singleEvent();

    function multipleEvents() {
      nav.style.display = 'flex';
      for (let i = 0; i < events.length; i++) {
        const btn = document.createElement('button');
        const span = document.createElement('span');
        btn.appendChild(span);
        navCrumbs.appendChild(btn);
      }
      parent.navigateInfo(country, events, names, years, city, cityName);
    }

    function singleEvent() {
      nav.style.display = null;
      names.forEach(name => (name.style.opacity = 1));
      years.forEach(date => (date.style.opacity = 1));
      city.dataset.city = events[0].city.default;
      cityName.textContent = events[0].city[parent.language]
        ? events[0].city[parent.language]
        : events[0].city.default;
    }
  }

  navigateInfo(country, events, eventNames, eventYears, city, cityName) {
    const parent = this;
    const prevBtn = country.querySelector('.country__nav--btn[data-btn="prev"]');
    const nextBtn = country.querySelector('.country__nav--btn[data-btn="next"]');
    const navCrumbBtns = country.querySelectorAll('.country__nav--crumbs button');
    const btn = country.querySelector('.country__btn');

    active();
    prevBtn.addEventListener('click', prevEvent);
    nextBtn.addEventListener('click', nextEvent);
    btn.addEventListener('click', resetEvent);

    function nextEvent(e) {
      e.preventDefault();
      parent.eventIndex++;
      if (parent.eventIndex > events.length - 1) parent.eventIndex = 0;
      active();
    }

    function prevEvent(e) {
      e.preventDefault();
      parent.eventIndex--;
      if (parent.eventIndex < 0) parent.eventIndex = events.length - 1;
      active();
    }

    function resetEvent() {
      parent.eventIndex = 0;
      active();
    }

    function active() {
      eventYears.forEach(year => year.classList.remove('active'));
      eventNames.forEach(name => name.classList.remove('active'));
      navCrumbBtns.forEach(btn => btn.classList.remove('active'));
      eventYears[parent.eventIndex].classList.add('active');
      eventNames[parent.eventIndex].classList.add('active');
      navCrumbBtns[parent.eventIndex].classList.add('active');
      city.style.opacity = 1;
      changeCity();
    }

    function changeCity() {
      const nextCity = events[parent.eventIndex].city.default;
      const name = events[parent.eventIndex].city[parent.language]
        ? events[parent.eventIndex].city[parent.language]
        : events[parent.eventIndex].city.default;

      city.style.opacity = 0;
      city.dataset.city = nextCity;
      cityName.textContent = name;
      setTimeout(() => (city.style.opacity = 1), 250);
    }
  }

  countryMarkup(country) {
    // prettier-ignore
    const countryName = country.name[this.language] ? country.name[this.language] : country.name.default;

    const html = `
    <!-- *********** Button *********** -->
    <div class="country ${country.origin}" data-country="${country.country}">
    <button class="country__btn ${country.direction}">
      <svg><use href="${flags}#${country.country}"></use></svg>
    </button>
    <!-- Modal -->
    <div class="country__modal">
      <button class="country__close-btn">
        <svg class="icon"><use href="${icons}#close-btn"></use></svg>
      </button>

      <div class="country__id">
        <div class="country__flag">
          <svg><use href="${flags}#${country.country}"></use></svg>
        </div>
        <span class="country__name">${countryName}</span>
      </div>

      <span class="country__event"></span>

      <div class="country__nav">
        <button class="country__nav--btn" data-btn="prev">
          <svg class="icon">
            <use href="${icons}#arrow-back"></use>
          </svg>
        </button>

        <div class="country__nav--crumbs"></div>

        <button class="country__nav--btn" data-btn="next">
          <svg class="icon">
            <use href="${icons}#arrow-forward"></use>
          </svg>
        </button>
      </div>

      <div class="country__city" data-city="">
        <div class="country__city--square"></div>
        <div class="country__city--icon">
          <svg class="icon"><use href="${icons}#location"></use></svg>
        </div>
        <span class="country__city--name"></span>
      </div>

    </div>
    <!-- Modal -->
  </div>
  <!-- *********** Button *********** -->
    `;

    return html;
  }
}

export default new Events();
