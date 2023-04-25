import styles from '../css/CardMenu.module.scss';
import {css} from '../../../helpers';
import {FC, useState, CSSProperties, useEffect} from 'react';
import Transition from 'react-transition-group/Transition';

import Icon from '../../../UI/components/ts/Icon';

interface types {
  next: () => void;
  prev: () => void;
  platforms: any;
  translations: string[];
}

const CardMenu: FC<types> = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [platforms, setPlatforms] = useState(false);

  /************** Functions **************/

  const nextAlbum = () => {
    setIsOpen(false);
    props.next();
  };

  const previousAlbum = () => {
    setIsOpen(false);
    props.prev();
  };

  const openPlatforms = () => {
    setIsOpen(false);
    setPlatforms(true);
  };

  const closePlatforms = (e: any) => {
    const classes = e.target?.classList;

    if (classes === undefined) return;
    if (!classes[0]?.startsWith('CardMenu_menu__platforms')) return;
    setPlatforms(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const closeMenuClick = (e: any) => {
    const element = e.target;
    if (element === undefined) return;
    if (element.classList.length < 1) return;
    if (element.classList === undefined) return;
    if (element.classList[0] === undefined) return;
    if (element.classList[0]?.startsWith('CardMenu')) return;

    console.log('click');
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('scroll', closeMenu);
      document.body.addEventListener('click', closeMenuClick);
    }

    if (!isOpen) {
      document.removeEventListener('scroll', closeMenu);
      document.body.removeEventListener('click', closeMenuClick);
    }

    return () => {
      document.removeEventListener('scroll', closeMenu);
      document.body.removeEventListener('click', closeMenuClick);
    };
  }, [isOpen, platforms]);

  /************** Links **************/
  const links = props.platforms.map((platform: any, i: number) => (
    <a
      className={css(styles, 'menu__link')}
      href={platform.link}
      data-link={platform.name}
      target="_blank"
      onClick={() => setPlatforms(false)}
      key={i}
    >
      <Icon set="platforms" id={platform.name} />
    </a>
  ));

  /************** Component **************/

  return (
    <>
      <div className={css(styles, 'menu')}>
        <button
          className={css(styles, 'menu__btn', !isOpen ? 'activate' : '')}
          onClick={() => setIsOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={css(styles, 'menu__dropdown', isOpen ? 'activate' : '')}>
          <button onClick={openPlatforms}>{props.translations[0]}</button>
          <button onClick={nextAlbum}>{props.translations[2]}</button>
          <button onClick={previousAlbum}>{props.translations[1]}</button>
        </div>
      </div>

      <Transition in={platforms} timeout={300} mountOnEnter unmountOnExit>
        {(state: string) => {
          const inline: CSSProperties = {
            opacity: state === 'entering' || state === 'entered' ? 1 : 0,
          };

          return (
            <div className={css(styles, 'menu__platforms')} style={inline} onClick={closePlatforms}>
              <div className={css(styles, 'menu__links')}>{links}</div>
              <button className={css(styles, 'menu__close')} onClick={closePlatforms}>
                <Icon id="close-btn" color="#c6ab9a" />
              </button>
            </div>
          );
        }}
      </Transition>
    </>
  );
};

export default CardMenu;
