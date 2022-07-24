import {mediaQuery} from '../helper.js';
import {events} from '../model.js';

class Events_Mobile {
  constructor() {
    this.init();
  }

  init() {}

  interact() {
    events.forEach((e, i) => this.mobile(e.country, e.origin, i));
  }

  mobile(countryNode, nodeOrigin, nodeIndex) {
    const query = mediaQuery(700);
    const querySmall = mediaQuery(550);

    const parent = this;
    const country = document.querySelector(`.country[data-country="${countryNode}"`);
    const index = nodeIndex + 1;

    /************** Variables **************/
    let totalColumns;
    let row;
    let column;
    let posX;
    let posY;
    let colSpan;
    let rowSpan;

    /************** Function Call **************/
    checkQuery();
    query.addEventListener('change', checkQuery);
    querySmall.addEventListener('change', checkQuery);

    function checkQuery() {
      setTotalColumns();
      setRow();
      setColumn();
      setPosX();
      setPosY();
      setColSpan();
      setRowSpan();
      setGrid();
    }

    /****************************************
         FUNCTIONS
    ****************************************/
    function setTotalColumns() {
      if (query.matches) totalColumns = 4;
      if (querySmall.matches) totalColumns = 3;
      if (!query.matches && !querySmall.matches) totalColumns = undefined;
    }

    function setRow() {
      row = Math.ceil(index / totalColumns);
    }

    function setColumn() {
      for (let i = 0; i < totalColumns; i++) {
        if (index == totalColumns * row - i) column = totalColumns - i;
      }
    }

    function setPosX() {
      if (totalColumns == 4) {
        posX = column > 1 ? 'right' : 'left';
      }

      if (totalColumns == 3) {
        if (column == 1) posX = 'left';
        if (column == 2) posX = 'mid';
        if (column == 3) posX = 'right';
      }
    }

    function setPosY() {
      if (totalColumns == 4) {
        posY = row > 2 ? 'bottom' : 'top';
      }

      if (totalColumns == 3) {
        if (row < 3) posY = 'top';
        if (row > 3) posY = 'bottom';
        if (row == 3) posY = 'mid';
      }
    }

    function setColSpan() {
      if (totalColumns == 4) {
        if (posX == 'left') colSpan = `${column} / span 2`;
        if (posX == 'right') colSpan = `${column - 1} / span 2`;
      }

      if (totalColumns == 3) colSpan = '1 / -1';
    }

    function setRowSpan() {
      if (totalColumns == 4) {
        if (posY == 'top') rowSpan = `${row} / span 3`;
        if (posY == 'bottom') rowSpan = `${row - 2} / span 3`;
      }

      if (totalColumns == 3) {
        if (posY == 'top') rowSpan = `${row} / span 4`;
        if (posY == 'mid') rowSpan = `${row - 2} / span 4`;
        if (posY == 'bottom') rowSpan = `${row - 3} / span 4`;
      }
    }

    function setGrid() {
      const originalClass = nodeOrigin;
      const newClass = `${posX}-${posY}`;
      const prevClass = [...country.classList].find(clas => {
        if (clas.includes('left') || clas.includes('right')) return clas;
      });

      if (query.matches || querySmall.matches) {
        country.classList.remove(`${prevClass}`);
        country.classList.add(`${newClass}`);
        country.style.gridColumn = colSpan;
        country.style.gridRow = rowSpan;
      }

      if (!query.matches && !querySmall.matches) {
        country.classList.remove(`${newClass}`);
        country.classList.remove(`${prevClass}`);
        country.classList.add(`${originalClass}`);
        country.style.gridColumn = null;
        country.style.gridRow = null;
      }
    }
  }

  redoThis() {
    /****************************************
       4 COLUMNS
  ****************************************/
    function mobile(countryNode, nodeIndex) {
      const parent = this;
      const country = document.querySelector(`.country[data-country="${countryNode}"`);
      const index = nodeIndex + 1;

      const row = Math.ceil(index / 4);
      const column = setColumn();
      const posX = column > 1 ? 'right' : 'left';
      const posY = row > 2 ? 'bottom' : 'top';
      const colSpan = posX == 'left' ? `${column} / span 2` : `${column - 1} / span 2`;
      const rowSpan = posY == 'top' ? `${row} / span 3` : `${row - 2} / span 3`;

      function setColumn() {
        const n3 = 4 * row - 3;
        const n2 = 4 * row - 2;
        const n1 = 4 * row - 1;
        const n = 4 * row;

        if (index == n3) return 1;
        if (index == n2) return 2;
        if (index == n1) return 3;
        if (index == n) return 4;
      }

      /****************************************
         CHANGE POSITIONING
    ****************************************/
      const currentClasses = [...country.classList];
      const newClass = `${posX}-${posY}`;
      const prevClass = currentClasses.find(clas => {
        if (clas.includes('left') || clas.includes('right')) return clas;
      });

      changeClasses();
      parent.queryMobile.addEventListener('change', changeClasses);

      function changeClasses() {
        if (parent.queryMobile.matches) {
          country.classList.remove(`${prevClass}`);
          country.classList.add(`${newClass}`);
          country.style.gridColumn = colSpan;
          country.style.gridRow = rowSpan;
        } else {
          country.classList.remove(`${newClass}`);
          country.classList.add(`${prevClass}`);
          country.style.gridColumn = null;
          country.style.gridRow = null;
        }
      }

      /************** Set Spans **************/
    }

    function mobileSmall(countryNode, nodeIndex) {
      const parent = this;
      const country = document.querySelector(`.country[data-country="${countryNode}"`);
      const index = nodeIndex + 1;

      const row = Math.ceil(index / 3);
      const column = setColumn();
      let posX = column == 1 ? 'left' : column == 2 ? 'mid' : 'right';
      let posY = row < 3 ? 'top' : row > 3 ? 'bottom' : 'mid';
      const colSpan = '1 / -1';
      const rowSpan =
        posY == 'top'
          ? `${row} / span 4`
          : posY == 'mid'
          ? `${row - 2} / span 4`
          : `${row - 3} / span 4`;

      function setColumn() {
        const n2 = 3 * row - 2;
        const n1 = 3 * row - 1;
        const n = 3 * row;

        if (index == n2) return 1;
        if (index == n1) return 2;
        if (index == n) return 3;
      }

      /****************************************
         CHANGE POSITIONING
    ****************************************/
      const currentClasses = [...country.classList];
      const newClass = `${posX}-${posY}`;
      const prevClass = [...country.classList].find(clas => {
        if (clas.includes('left') || clas.includes('right')) return clas;
      });

      const prevColSpan = country.style.gridColumn;
      const prevRowSpan = country.style.gridRow;

      changeClasses();
      parent.queryMobileSmall.addEventListener('change', changeClasses);

      function changeClasses() {
        if (parent.queryMobileSmall.matches) {
          country.classList.remove(`${prevClass}`);
          country.classList.add(`${newClass}`);
          country.style.gridColumn = colSpan;
          country.style.gridRow = rowSpan;
        } else {
          country.classList.remove(`${newClass}`);
          country.classList.add(`${prevClass}`);
          country.style.gridColumn = prevColSpan;
          country.style.gridRow = prevRowSpan;
        }
      }
    }
  }
}
export default new Events_Mobile();
