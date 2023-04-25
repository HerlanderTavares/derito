import styles from '../css/Card.module.scss';
import {css} from '../../../helpers';
import {FC, CSSProperties} from 'react';
import Transition from 'react-transition-group/Transition';

import Icon from '../../../UI/components/ts/Icon';
import Player from '../../../2-Music/components/ts/Player';
import Platforms from './Platforms';
import CardMenu from './CardMenu';

interface types {
  album: any;
  trigger: boolean;
  id: number;
  order: number;
  button: string;
  prompts: string[];
  next: () => void;
  prev: () => void;
}

const Card: FC<types> = props => {
  const {album} = props;
  const nameID = album.title.toLowerCase().replace(' ', '');
  const timing = 300;
  const imgs = '/images/3-Albums/';
  const songs = '/mp3/';

  return (
    <Transition
      in={props.trigger && props.order === props.id}
      timeout={timing}
      mountOnEnter
      unmountOnExit
    >
      {(state: string) => {
        const transition: CSSProperties = {
          transition: `opacity ${timing}ms ease-out`,
          opacity: state === 'exiting' || state === 'exited' ? 0 : 1,
        };

        return (
          <div className={css(styles, 'card')} style={transition} data-card={nameID}>
            <Player
              name={nameID}
              song={`./${songs}/song_${nameID}.mp3`}
              image={`./${imgs}/${nameID}.jpg`}
              inline={styles}
              section="albums"
              noFixedPlayer={true}
            />
            <div className={css(styles, 'card__nav')}>
              <button className={css(styles, 'card__btn')} data-btn="prev" onClick={props.prev}>
                <Icon id="arrow-back" color="#c6ab9a" />
              </button>
              <h3 className={css(styles, 'card__title')}>{album.title}</h3>

              <button className={css(styles, 'card__btn')} data-btn="next" onClick={props.next}>
                <Icon id="arrow-forward" color="#c6ab9a" />
              </button>
              <CardMenu
                next={props.next}
                prev={props.prev}
                platforms={album.platforms}
                translations={[props.button, ...props.prompts]}
              />
            </div>

            <Platforms platforms={album.platforms} label={props.button} />
            <p className={css(styles, 'card__description')}>{album.description}</p>
          </div>
        );
      }}
    </Transition>
  );
};

export default Card;
