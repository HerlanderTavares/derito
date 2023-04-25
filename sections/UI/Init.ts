import {viewPortHeight} from '../helpers';
import State from './State';

//Translations
import * as en from './components/ts/translations/english';
import * as fr from './components/ts/translations/french';
import * as pt from './components/ts/translations/portuguese';
import * as es from './components/ts/translations/spanish';

//Languages
export const languages: {[key: string]: any} = {
  en: {obj: en, flag: 'uk'},
  fr: {obj: fr, flag: 'france'},
  pt: {obj: pt, flag: 'portugal'},
  es: {obj: es, flag: 'spain'},
};

//Body & Scroll Events
function closeNavigation(navIsOpen: boolean, closeNav: () => {}) {
  function close(e: MouseEvent) {
    const el = e.target! as HTMLElement;
    const element = el.classList[0] && el.classList[0];
    const parent = el.parentElement?.classList[0] && el.parentElement?.classList[0];
    const granparent =
      el.parentElement?.parentElement?.classList[0] &&
      el.parentElement?.parentElement?.classList[0];

    if (!element && !parent && !granparent) return;

    const isNav =
      (element && element.startsWith('Contact')) ||
      (element && element.startsWith('Navigation')) ||
      (parent && parent.startsWith('Navigation')) ||
      (granparent && granparent.startsWith('Navigation'));

    if (!isNav) closeNav();
  }

  if (navIsOpen) {
    document.body.addEventListener('click', close);
    document.addEventListener('scroll', closeNav);
  }

  if (!navIsOpen) {
    document.body.removeEventListener('click', close);
    document.removeEventListener('scroll', closeNav);
  }
}

//Initializer Function
export function bodyListeners(state: any) {
  closeNavigation(state.navIsOpen, state.closeNav);
}

export default function init(state: any) {
  viewPortHeight();
}
