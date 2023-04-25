import styles from '../css/Menu.module.scss';
import {css} from '../../../helpers';
import {FC, useState, useContext, CSSProperties, Dispatch, SetStateAction} from 'react';
import Icon from '../../../UI/components/ts/Icon';
import State, {context} from '../../../UI/State';
import Transition from 'react-transition-group/Transition';

interface types {
  trigger: boolean;
  order: number;
  setOrder: Dispatch<SetStateAction<number>>;
  open: () => void;
  next: () => void;
  prev: () => void;
}

const Menu: FC<types> = props => {
  const state: context = useContext(State);
  const albums = state.language.albums.covers;
  const title = state.language.navLinks[2][0];

  const covers = albums.map((album: any, i: number) => {
    const id = album.title.toLowerCase().replace(' ', '');
    const active = props.order === i + 1 ? 'active' : '';
    const inline: CSSProperties = {backgroundImage: `url(./images/3-Albums/${id}.jpg)`};

    return (
      <button
        className={css(styles, 'menu__cover', active)}
        style={inline}
        data-cover={id}
        key={id}
        onClick={props.open}
      />
    );
  });

  const coversLandscape = albums.map((album: any, i: number) => {
    const id = album.title.toLowerCase().replace(' ', '');
    const inline: CSSProperties = {backgroundImage: `url(./images/3-Albums/${id}.jpg)`};
    const open = () => {
      props.open();
      props.setOrder(i + 1);
    };

    return (
      <button
        className={css(styles, 'menu__cover', 'active')}
        style={inline}
        data-cover={id}
        key={id}
        onClick={open}
      />
    );
  });

  const circles = albums.map((album: any, i: number) => {
    const active = props.order === i + 1 ? 'active' : '';
    return <span className={css(styles, active)}></span>;
  });

  const timing = 300;

  return (
    <Transition in={!props.trigger} timeout={timing} mountOnEnter unmountOnExit>
      {(state: string) => {
        const transition: CSSProperties = {
          transition: `opacity ${timing}ms ease-out`,
          opacity: state === 'exiting' || state === 'exited' ? 0 : 1,
        };
        return (
          <>
            <div className={css(styles, 'menu')} style={transition}>
              <h2 className="title v">{title}</h2>
              <button className={css(styles, 'menu__btn')} data-btn="prev" onClick={props.prev}>
                <Icon id="arrow-back" color="#c6ab9a" />
              </button>
              <div className={css(styles, 'menu__covers')}>{covers}</div>

              <button className={css(styles, 'menu__btn')} data-btn="next" onClick={props.next}>
                <Icon id="arrow-forward" color="#c6ab9a" />
              </button>

              <div className={css(styles, 'menu__circles')}>{circles}</div>
            </div>

            <div className={css(styles, 'menu', 'landscape')} style={transition}>
              <h2 className="title v">{title}</h2>
              <div className={css(styles, 'landscape__covers')}>{coversLandscape}</div>
            </div>
          </>
        );
      }}
    </Transition>
  );
};

export default Menu;
