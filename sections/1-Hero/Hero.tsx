import styles from './Hero.module.scss';
import {css} from '../helpers';
import MenuBtn from '../UI/components/ts/navigation/MenuBtn';
import Shadows from './components/Shadows';
import {useContext, useEffect, useRef} from 'react';
import {useInView} from 'react-intersection-observer';
import State, {context} from '../UI/State';

export default function Hero() {
  const state: context = useContext(State);
  const {ref, inView} = useInView();
  const subtitle = state.language.subtitle;

  useEffect(() => {
    state.setShowNavBar(!inView);
  }, [inView]);

  return (
    <header className={css(styles, 'hero')} ref={ref} id="welcome">
      <div className={`active-area ${styles['active-area']}`}>
        <div className={css(styles, 'hero__container')}>
          <MenuBtn class={styles['menu-btn']} />
          <div className={css(styles, 'hero__header')}>
            <h1>Derito</h1>
            <span>{subtitle}</span>
          </div>
          <div className={css(styles, 'hero__image')}>
            <img src="/images/1-Hero/hero-img.webp" alt="Image of the musician Derito" />
          </div>
        </div>
      </div>
      <Shadows />
    </header>
  );
}
