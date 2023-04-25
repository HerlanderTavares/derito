import styles from '../../css/Languages.module.scss';
import {checkClass, css} from '../../../../helpers';
import React, {FC, useContext, CSSProperties, useState, useRef, useEffect} from 'react';
import State, {context} from '../../../State';
import {languages} from '../../../Init';

import Icon from '../Icon';

interface langTypes {
  position: 'left' | 'center' | 'right';
  className?: string;
}

const Languages: FC<langTypes> = props => {
  /************** State **************/
  const state: context = useContext(State);
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  // /************** Buttons **************/
  const [btnSize, setBtnSize] = useState(0);
  const flags = Object.entries(languages).map(flag => [`${flag[0]}`, `${flag[1].flag}`]);
  const divRef = useRef<HTMLDivElement>(null);

  // /************** Styling & Classes **************/
  const closed = !isOpen ? 'closed' : '';
  const classes = css(styles, 'languages', props.position, closed) + checkClass(props.className);

  /************** Button Elements **************/
  const buttons = flags.map((flag, i) => {
    const inlineBtn: CSSProperties = {
      translate: !isOpen ? `-${i * 100}%` : undefined,
      zIndex: state.lang === flag[0] ? 100 : undefined,
      pointerEvents: !isOpen ? 'none' : undefined,
    };

    return (
      <button
        key={flag[1]}
        id={flag[0]}
        className={css(styles, 'languages__btn')}
        style={inlineBtn}
        onClick={changeLang}
      >
        <Icon set="flags" id={flag[1]} />
      </button>
    );
  });

  /************** Functions **************/
  function openMenu() {
    if (!isOpen) open();
  }

  function changeLang(e: React.MouseEvent<HTMLButtonElement>) {
    close();
    const button = e.target as HTMLButtonElement;
    if (state.translate) state.translate(button.id);
  }

  function closeMenu(e: MouseEvent) {
    const element = e.target as HTMLElement;
    if (!element || !element.classList[0]) return;
    if (!element.classList[0].startsWith('Languages')) close();
  }

  function listeners() {
    if (isOpen) {
      document.body.addEventListener('click', closeMenu);
      document.addEventListener('scroll', close);
    }

    if (!isOpen) {
      document.body.removeEventListener('click', closeMenu);
      document.removeEventListener('scroll', close);
    }
  }

  const resize = () => setBtnSize(divRef.current!.clientHeight / 10);

  // /************** Initializers **************/
  useEffect(() => {
    resize();
    const parent = divRef.current!.parentElement as HTMLElement;
    new ResizeObserver(resize).observe(parent);
  }, []);

  /************** fix the loop **************/
  useEffect(() => {
    listeners();
    document.documentElement.style.setProperty('--btn-size', `${btnSize}rem`);
  }, [isOpen, btnSize]);

  /************** Main Element **************/

  return (
    <div className={classes} onClick={openMenu} ref={divRef}>
      {buttons}
    </div>
  );
};

export default Languages;
