import styles from '../../css/Navigation.module.scss';
import {css} from '../../../../helpers';
import {FC, useContext} from 'react';
import State, {context} from '../../../State';

const Contact: FC<{onClick?: () => void}> = props => {
  const state: context = useContext(State);
  const label = state.language.contact.title;

  return (
    <li className={css(styles, 'nav__item')}>
      <button className={css(styles, 'nav__link')} onClick={props.onClick}>
        {label}
      </button>
    </li>
  );
};

export default Contact;
