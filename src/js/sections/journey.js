import {reveal} from '../helper.js';
import features from '../components/features.js';
import events from '../components/events.js';
import eventsM from '../components/eventsMobile.js';
import biography from '../components/biography.js';

class Journey {
  sections = ['biography', 'features', 'events'];

  constructor() {
    this.init();
  }

  init() {}

  interact() {
    biography.interact();
    features.interact();
    events.interact();
    eventsM.interact();

    this.sections.forEach(section => {
      const container = document.querySelector(`.${section}`);
      reveal(container, 200, 1000, 100, undefined, true);
    });
  }
}

export default new Journey();
