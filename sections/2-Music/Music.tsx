import styles from './Music.module.scss';
import {css} from '../helpers';
import {useContext, useEffect} from 'react';
import State, {context} from '../UI/State';
import {useInView} from 'react-intersection-observer';

import Card from './components/ts/Card';

export default function Music() {
  const state: context = useContext(State);
  const {ref, inView} = useInView();
  const title = state.language.navLinks[1][0];

  const imgs = '/images/2-Music/';
  const songs = '/mp3/';

  const {type, section, name, isPlaying} = state.playMedia;
  const fixedPlayerOn =
    type !== undefined &&
    name !== undefined &&
    isPlaying === true &&
    section === 'music' &&
    !inView;

  useEffect(() => {
    if (fixedPlayerOn) state.setFixedPlayer(true);
    else state.setFixedPlayer(false);
  }, [inView, state.playMedia]);

  return (
    <section className={css(styles, 'music')} id="music" ref={ref}>
      <div className={`active-area ${styles.container}`}>
        <h2 className="title">{title}</h2>
        <Card title="Semba" description={state.language.music.semba} css={styles} />

        <Card title="AfroJazz" description={state.language.music.afrojazz} css={styles} />

        <Card
          title="AfroBossa"
          description={state.language.music.afrobossa.description}
          button={state.language.music.afrobossa.button}
          css={styles}
        />
      </div>
    </section>
  );
}
