import styles from './components/css/Content.module.scss';
import {css} from '../helpers';

import Shadows from './components/ts/Shadows';
import Music from '../2-Music/Music';
import Albums from '../3-Albums/Albums';
import Journey from '../4-Journey/Journey';
import Gallery from '../5-Gallery/Gallery';

export default function Content() {
  return (
    <div className={css(styles, 'content')}>
      <Shadows>
        <Music />
        <Albums />
        <Journey />
        <Gallery />
      </Shadows>
    </div>
  );
}
