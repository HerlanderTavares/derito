import styles from '../Hero.module.scss';
import {css} from '../../helpers';

export default function Shadows() {
  return (
    <>
      <div className={css(styles, 'shadows')}></div>
      <div className={css(styles, 'shadows')}></div>
      <div className={css(styles, 'shadows')}></div>
      <div className={css(styles, 'shadows')}></div>
      <div className={css(styles, 'shadows')}></div>
      <div className={css(styles, 'shadows--bottom')}></div>
    </>
  );
}
