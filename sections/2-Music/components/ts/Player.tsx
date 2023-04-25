import styles from '../css/Player.module.scss';
import {checkClass, css} from '../../../helpers';
import {FC, useEffect, useRef, SyntheticEvent, useContext} from 'react';
import State, {context} from '../../../UI/State';

import Icon from '../../../UI/components/ts/Icon';
import Audio from './Audio';

interface types {
  name: string;
  image: string;
  song: string;
  inline?: any;
  noFixedPlayer?: boolean;
  section: string;
}

const Player: FC<types> = props => {
  const state: context = useContext(State);
  const media = state.playMedia;
  const {type, name, isPlaying} = media;

  /************** Refs **************/
  const player = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const fixed = useRef<HTMLSpanElement>(null);
  const song = useRef<HTMLAudioElement>(null);

  /************** Styling **************/
  const songIsPlaying = type === 'audio' && name === props.name && isPlaying === true;
  const playing = songIsPlaying ? 'playing' : '';
  const inline = props.inline['music__player'];
  const classes = css(styles, 'player', playing) + checkClass(inline);

  /************** Functions **************/
  const play = () =>
    state.setPlayMedia({type: 'audio', section: props.section, name: props.name, isPlaying: true});
  const pause = () => state.setPlayMedia((state: object) => ({...state, isPlaying: false}));
  const stop = () =>
    state.setPlayMedia({type: undefined, section: undefined, name: undefined, isPlaying: false});

  function toggle() {
    if (songIsPlaying) song.current!.play();
    if (type === 'audio' && name === props.name && isPlaying === false) song.current!.pause();
    if (type !== 'audio' || name !== props.name) {
      song.current!.pause();
      song.current!.currentTime = 0;
    }
  }

  function onClickHandler() {
    if (!songIsPlaying) play();
    else pause();
  }

  function updateProgress(e: any) {
    const event = e.nativeEvent;
    const {currentTime, duration} = event.srcElement;
    const progressPercentage = ((currentTime / duration) * 100).toFixed(2) + '%';
    progress.current!.style.width = progressPercentage;

    if (fixed.current) fixed.current.style.width = progressPercentage;
  }

  function setProgress(e: React.MouseEvent<HTMLElement>) {
    const element = e.target as HTMLSpanElement;
    const clickX = e.nativeEvent.offsetX;
    const width = element.clientWidth;
    const songDuration = song.current!.duration;
    if (songIsPlaying) song.current!.currentTime = (clickX / width) * songDuration;
  }

  /************** Main Element **************/
  useEffect(() => toggle(), [media]);
  return (
    <>
      {!props.noFixedPlayer && (
        <Audio
          isPlaying={songIsPlaying}
          fixed={state.fixedPlayer}
          ref={fixed}
          setProgress={setProgress}
          click={onClickHandler}
        />
      )}

      <div
        className={classes}
        style={{backgroundImage: `url(${props.image})`}}
        ref={player}
        data-player={props.name}
      >
        <audio src={props.song} ref={song} onTimeUpdate={updateProgress} onEnded={stop} />
        <button className={css(styles, 'player__btn')} onClick={onClickHandler}>
          {!songIsPlaying && <Icon id="play-btn" fill={true} size="50%" />}
          {songIsPlaying && <Icon id="pause-btn" fill={true} size="50%" />}
        </button>

        <div className={css(styles, 'player__progress')} onClick={setProgress}>
          <span ref={progress}></span>
        </div>
      </div>
    </>
  );
};

export default Player;
