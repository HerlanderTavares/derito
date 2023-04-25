import styles from './Journey.module.scss';
import {css} from '../helpers';

import Biography from './components/ts/Biography';
import Features from './components/ts/Features';
import Events from './components/ts/Events';
import {useContext} from 'react';
import State, {context} from '../UI/State';

export default function Journey() {
  const state: context = useContext(State);
  const title = state.language.navLinks[3][0];
  return (
    <section className={css(styles, 'journey')} id="journey">
      <div className={'active-area' + ' ' + styles.container}>
        <h2 className="title">{title}</h2>
        <Biography />
        <Features />
        <Events />
      </div>
    </section>
  );
}
