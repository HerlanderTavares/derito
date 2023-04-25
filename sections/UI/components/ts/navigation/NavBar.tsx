import styles from '../../css/Navigation.module.scss';
import {css} from '../../../../helpers';
import {useContext} from 'react';
import State, {context} from '../../../State';

import MenuBtn from './MenuBtn';
import Languages from '../translations/Languages';

export default function NavBar() {
  const state: context = useContext(State);
  const disappear = state.showNavBar ? '' : 'disappear';

  return (
    <div className={css(styles, 'nav__bar', disappear)}>
      <div className={`active-area ${styles.container}`}>
        <MenuBtn size="90%" />

        {/* <div className={css(styles, 'lang-container')}>
          <Languages position="left" className={styles.languages} />
        </div> */}
      </div>
    </div>
  );
}
