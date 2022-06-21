import hero from './sections/hero.js';
import music from './sections/music.js';
import albums from './sections/albums.js';
import journey from './sections/journey.js';
import gallery from './sections/gallery.js';
import {timer} from './helper.js';

//Prevent Transitions on Load
const nodes = document.querySelectorAll('.preload');
const removeNodes = () => nodes.forEach(node => node.classList.remove('preload'));

document.addEventListener('DOMContentLoaded', function () {
  timer(removeNodes, 300);
});

hero.interact();
music.interact();
albums.interact();
journey.interact();
gallery.interact();
