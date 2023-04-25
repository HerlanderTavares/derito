import styles from '../../Music.module.scss';
import {css} from '../../../helpers';
import {FC} from 'react';
import {Fade} from 'react-awesome-reveal';
import Player from './Player';

interface types {
  children?: React.ReactNode;
  title: string;
  description: string;
  css?: any;
  button?: string;
}

const Card: FC<types> = props => {
  const id = props.title.toLowerCase();
  const imgs = '/images/2-Music/';
  const songs = '/mp3/mix_';
  return (
    <div className={css(styles, 'music__card')} data-music={id}>
      <Player
        name={id}
        section="music"
        song={`${songs + id}.mp3`}
        image={`${imgs + id}.jpg`}
        inline={props.css}
      />
      <h3 className={css(styles, 'music__title')}>{props.title}</h3>
      <p className={css(styles, 'music__description')}>{props.description}</p>
      {id === 'afrobossa' && (
        <a className={css(styles, 'music__learn')} target="_blank" href="https://www.afrobossa.com">
          {props.button}
        </a>
      )}
    </div>
  );
};

export default Card;
