import * as model from './model.js';
import navigation from './components/navbar.js';
import language from './components/langMenu.js';

console.log('We active');

/****************************************
     NAVIGATION
****************************************/
navigation.smoothScroll();
navigation.interact();
navigation.fixedNav();
navigation.heroNav();

/****************************************
     LANGUAGE MENU
****************************************/
language.interact();
