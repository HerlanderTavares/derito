import styles from '../css/Photo.module.scss';
import {css} from '../../../helpers';
import {FC, Dispatch, SetStateAction, CSSProperties} from 'react';

import {Transition} from 'react-transition-group';
import Icon from '../../../UI/components/ts/Icon';

interface photos {
  order: number;
  size: string;
  trigger: [number | undefined, Dispatch<SetStateAction<number | undefined>>];
  description: string;
}

const Photo: FC<photos> = props => {
  const open = () => props.trigger[1](props.order);
  const close = () => props.trigger[1](undefined);

  return (
    <>
      <Transition in={props.trigger[0] === props.order} timeout={300} mountOnEnter unmountOnExit>
        {(state: string) => {
          const inline: CSSProperties = {
            opacity: state === 'entering' || state === 'entered' ? 1 : 0,
          };

          return (
            <div className={css(styles, 'gallery__fullscreen')} style={inline}>
              <div className={css(styles, 'gallery__container')}>
                <button onClick={close}>
                  <Icon id="close-btn" />
                </button>
                <img
                  src={`/images/5-Gallery/${props.order}.jpg`}
                  alt="Photo of the singer Derito"
                />
                <p>{props.description}</p>
              </div>
            </div>
          );
        }}
      </Transition>

      <div
        className={css(styles, 'gallery__photo')}
        data-order={props.order}
        data-size={props.size}
        onClick={open}
      />
    </>
  );
};

export default Photo;
