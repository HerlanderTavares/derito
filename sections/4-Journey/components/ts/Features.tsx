import styles from '../css/Features.module.scss';
import {css} from '../../../helpers';
import {useContext, FC, CSSProperties, useState, useRef, Dispatch, SetStateAction} from 'react';
import State, {context} from '../../../UI/State';
import Icon from '../../../UI/components/ts/Icon';

interface types {
  name: string;
  description: string;
  image: string;
  order?: number;
  trigger?: string | undefined;
  setter?: Dispatch<SetStateAction<string | undefined>>;
}

/****************************************
     LARGE CARD
****************************************/
const Card: FC<types> = props => {
  const inline: CSSProperties = {
    backgroundImage: `url("./images/4-Journey/features/${props.image}.jpg")`,
  };

  const [reveal, setReveal] = useState<string | undefined>();
  const id = props.name.split(' ')[0];

  const open = () => setReveal(id);
  const close = () => setReveal(undefined);

  const click = () => {
    if (reveal === id) close();
    else open();
  };

  return (
    <div
      className={css(styles, 'card')}
      onMouseEnter={open}
      onMouseLeave={close}
      onClick={click}
      data-size="large"
    >
      <div className={css(styles, 'card__front', reveal !== id ? 'active' : '')}>
        <div className={css(styles, 'card__img')} style={inline}></div>
        <h4>{props.name}</h4>
      </div>

      <div className={css(styles, 'card__back', reveal === id ? 'active' : '')}>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

/****************************************
     SMALL CARD
****************************************/
const CardSmall: FC<types> = props => {
  const inline: CSSProperties = {
    backgroundImage: `url("./images/4-Journey/features/${props.image}.jpg")`,
  };

  const cardInline: CSSProperties = {
    gridRow: Math.ceil(props.order! / 3),
  };

  const id = props.name.split(' ')[0];

  const open = () => props.setter!(id);
  const close = () => props.setter!(undefined);

  const click = () => {
    if (props.trigger! === id) close();
    else open();
  };

  return (
    <div className={css(styles, 'card')} data-size="small" style={cardInline}>
      <div
        className={css(styles, 'card__front', props.trigger !== id ? 'active' : '')}
        onClick={click}
      >
        <div className={css(styles, 'card__img')} style={inline}></div>
      </div>
      <div
        className={css(styles, 'card__back', props.trigger === id ? 'active' : '')}
        onClick={click}
      >
        <div className={css(styles, 'card__img')} style={inline} />
        <div className={css(styles, 'card__info')}>
          <h4>{props.name}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

/****************************************
     MAIN ELEMENT
****************************************/

export default function Features() {
  const state: context = useContext(State);
  const features = state.language.features;
  const ref = useRef<HTMLDivElement>(null);
  const [card, setCard] = useState<string | undefined>();

  /************** Large **************/
  const artists = features.artists.map((artist: any, i: number) => {
    return (
      <Card key={i} name={artist.name} description={artist.description} image={artist.image} />
    );
  });

  /************** Small **************/
  const artistSmall = features.artists.map((artist: any, i: number) => {
    return (
      <CardSmall
        key={i}
        order={i + 1}
        name={artist.name}
        description={artist.description}
        image={artist.image}
        trigger={card}
        setter={setCard}
      />
    );
  });

  /************** Functions **************/
  const scrollSpeed = 500;
  const scrollForward = () => {
    const width = ref.current!.scrollWidth;
    if (ref.current!.scrollLeft >= width) ref.current!.scrollLeft = width;
    else ref.current!.scrollLeft += scrollSpeed;
  };

  const scrollBack = () => {
    if (ref.current!.scrollLeft <= 0) ref.current!.scrollLeft = 0;
    else ref.current!.scrollLeft -= scrollSpeed;
  };

  /************** Element **************/

  return (
    <div className={css(styles, 'features')}>
      <h3 className={css(styles, 'features__title')}>{features.title}</h3>
      <div className={css(styles, 'features__carousel')}>
        <button className={css(styles, 'features__btn')} onClick={scrollBack}>
          <Icon id="arrow-back" color="#c6ab9a" />
        </button>
        <div className={css(styles, 'features__cards')} data-size="large" ref={ref}>
          {artists}
        </div>
        <div className={css(styles, 'features__cards')} data-size="small">
          {artistSmall}
        </div>
        <button className={css(styles, 'features__btn')} onClick={scrollForward}>
          <Icon id="arrow-forward" color="#c6ab9a" />
        </button>
      </div>
    </div>
  );
}
