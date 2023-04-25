import styles from '../css/Content.module.scss';
import {css} from '../../../helpers';
import {FC, useContext} from 'react';
import State, {context} from '../../State';

const Shadows: FC<{children?: React.ReactNode}> = props => {
  return (
    <>
      <div className={css(styles, 'shadows')}></div>
      <div className={css(styles, 'shadows--radial')}></div>
      <div className={css(styles, 'shadows--radial')}></div>
      {props.children}
    </>
  );
};

export default Shadows;
