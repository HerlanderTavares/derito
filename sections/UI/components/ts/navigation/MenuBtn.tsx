import styles from '../../css/Navigation.module.scss';
import {checkClass, css} from '../../../../helpers';
import {FC, useContext, useEffect} from 'react';
import State, {context} from '../../../State';

const MenuBtn: FC<{size?: string; class?: string}> = props => {
  const state: context = useContext(State);
  const closed = state.navIsOpen ? 'closed' : '';
  const classes = css(styles, 'nav__btn', closed) + checkClass(props.class);
  const height = props.size || undefined;

  function openNav() {
    if (state.openNav) state.openNav();
  }

  return (
    <button className={classes} style={{height: height}} onClick={openNav}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuBtn;
