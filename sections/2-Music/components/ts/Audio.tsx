import styles from '../css/Audio.module.scss';
import {css} from '../../../helpers';
import {FC, forwardRef} from 'react';
import Icon from '../../../UI/components/ts/Icon';
import Transition from 'react-transition-group/Transition';

interface types {
  isPlaying: boolean;
  fixed: boolean;
  setProgress: (e: React.MouseEvent<HTMLElement>) => void;
  click: () => void;
}

const Audio = forwardRef<HTMLSpanElement, types>((props, ref) => {
  return (
    <Transition in={props.isPlaying && props.fixed} timeout={300} mountOnEnter unmountOnExit>
      {(state: string) => {
        const inline = {
          transition: `opacity ${300}ms ease-out`,
          opacity: state === 'entered' ? 1 : 0,
          display: state === 'exited' ? 'none' : undefined,
        };

        return (
          <div className={css(styles, 'audio')} style={inline}>
            <div className={`active-area ${styles.container}`}>
              <div className={css(styles, 'audio__player')}>
                <button onClick={props.click}>
                  {!props.isPlaying && <Icon id="play-btn" fill={true} color="#c6ab9a" />}
                  {props.isPlaying && <Icon id="pause-btn" fill={true} color="#c6ab9a" />}
                </button>

                <span className={css(styles, 'audio__seeker')} onClick={props.setProgress}>
                  <span>
                    <span ref={ref}></span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        );
      }}
    </Transition>
  );
});

export default Audio;
