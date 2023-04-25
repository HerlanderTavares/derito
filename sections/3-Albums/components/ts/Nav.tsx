import styles from '../css/Card.module.scss';
import {css} from '../../../helpers';
import {Dispatch, FC, SetStateAction} from 'react';
import Icon from '../../../UI/components/ts/Icon';

interface types {
  onReturn: Dispatch<SetStateAction<string | undefined>>;
}

const Nav: FC<types> = props => {
  function goHome() {}
  function prevCard() {}
  function nextCard() {}

  return (
    <div className={css(styles, 'card__nav')}>
      <button className={css(styles, 'card__nav-btn')} data-nav="back" onClick={prevCard}>
        <Icon id="arrow-back" color="#c6ab9a" />
      </button>

      <button className={css(styles, 'card__nav-btn')} data-nav="forward" onClick={nextCard}>
        <Icon id="arrow-forward" color="#c6ab9a" />
      </button>
    </div>
  );
};

export default Nav;
