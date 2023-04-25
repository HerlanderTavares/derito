import styles from '../css/Events.module.scss';
import {css} from '../../../helpers';
import {useContext, FC, CSSProperties, useState, Dispatch, SetStateAction, useEffect} from 'react';
import State, {context} from '../../../UI/State';
import Icon from '../../../UI/components/ts/Icon';
import {useInView} from 'react-intersection-observer';
import useQuery from '../../../../hooks/useQuery';

/****************************************
     CARD POSITIONS
****************************************/
const origin = (coorX: number, coorY: number) => {
  const x = coorX > 50 ? 'right' : 'left';
  let y;

  if (coorY >= 6 && coorY <= 36) y = 'top';
  else if (coorY >= 56 && coorY <= 89) y = 'bottom';
  else y = 'mid';
  return `${x}-${y}`;
};

const OriginMobile = (i: number) => {
  const row = Math.ceil(i / 4);
  const column = i - (row - 1) * 4;

  const x = column === 1 ? 'left' : 'right';
  const y = i > 8 ? 'bottom' : 'top';

  const cardColumn = x === 'left' ? `${column} / span 2` : `${column - 1} / span 2`;
  const cardRow = y === 'top' ? `${row} / span 3` : `${row - 2} / span 3`;

  const btnColumn = x === 'left' ? 1 : 2;
  const btnRow = y === 'top' ? 1 : 3;

  return {class: `${x}-${y}`, cardGrid: [cardColumn, cardRow], btnGrid: [btnColumn, btnRow]};
};

interface types {
  country: string;
  coor: [number, number];
  direction: string;
  events: any[];
  svg: string;
  trigger: [string | undefined, Dispatch<SetStateAction<string | undefined>>];
  order: number;
}

/****************************************
     CARD
****************************************/
const Card: FC<types> = props => {
  const [eventOrder, setEventOrder] = useState(0);
  const matches = useQuery('(max-width: 815px)');

  /************** Iteration **************/
  const events = props.events.map((e: any, i: number) => {
    return (
      <div key={i} className={css(styles, 'card__details', eventOrder === i ? 'active' : '')}>
        <span>{e.date}</span>
        <span>{e.title}</span>
      </div>
    );
  });

  const dots = props.events.map((e: any, i: number) => (
    <span key={i} className={css(styles, eventOrder === i ? 'active' : '')} />
  ));

  /************** Functions **************/
  const next = () => {
    const limit = props.events.length - 1;
    if (eventOrder === limit) setEventOrder(0);
    else setEventOrder(state => state + 1);
  };

  const prev = () => {
    const limit = props.events.length - 1;
    if (eventOrder === 0) setEventOrder(limit);
    else setEventOrder(state => state - 1);
  };

  const open = () => props.trigger[1](props.country);

  const close = (e: any) => {
    const element = e.target.classList.contains(`${styles['card__nav--btn']}`);
    if (element) return;
    props.trigger[1](undefined);
  };

  /************** Styles **************/
  const cityBkg = {
    backgroundImage: `url("/images/4-Journey/events/${props.events[eventOrder].svg}")`,
  };

  const active = props.trigger[0] === props.country ? 'active' : '';
  const originDesktop = origin(props.coor[0], props.coor[1]);
  const originMobile = OriginMobile(props.order);

  const buttonInline: CSSProperties = {
    gridColumn: originMobile.btnGrid[0],
    gridRow: originMobile.btnGrid[1],
  };
  const buttonClasses = css(
    styles,
    'card__btn',
    props.direction,
    props.trigger[0] !== props.country ? 'active' : ''
  );

  const displayClasses = css(
    styles,
    'card__display',
    matches ? originMobile.class : originDesktop,
    active
  );

  const cardClasses = css(styles, 'card', active);
  const cardInline: CSSProperties = {
    left: `${props.coor[0]}%`,
    top: `${props.coor[1]}%`,
    gridColumn: originMobile.cardGrid[0],
    gridRow: originMobile.cardGrid[1],
  };

  /************** Element **************/

  return (
    <div className={cardClasses} style={cardInline}>
      <button className={buttonClasses} onClick={open} style={buttonInline}>
        <Icon set="flags" id={props.svg} />
      </button>
      <div className={displayClasses} onClick={close}>
        <div className={css(styles, 'card__heading')}>
          <div className={css(styles, 'card__flag')}>
            <Icon set="flags" id={props.svg} />
          </div>
          <h4 className={css(styles, 'card__country')}>{props.country}</h4>
        </div>
        <div className={css(styles, 'card__info')}>{events}</div>
        {props.events.length > 1 && (
          <div className={css(styles, 'card__nav')}>
            <button className={css(styles, 'card__nav--btn')} onClick={prev}>
              <Icon id="arrow-back" color="#a0755a" />
            </button>
            {dots}
            <button className={css(styles, 'card__nav--btn')} onClick={next}>
              <Icon id="arrow-forward" color="#a0755a" />
            </button>
          </div>
        )}

        <div className={css(styles, 'card__city')} style={cityBkg}>
          <span>{props.events[eventOrder].city}</span>
        </div>
      </div>
    </div>
  );
};

/****************************************
     MAIN ELEMENT
****************************************/
export default function Events() {
  const state: context = useContext(State);
  const events = state.language.events.entries;
  const {title} = state.language.events;
  const [openCard, setOpenCard] = useState<string | undefined>();
  const {ref, inView} = useInView();

  function closeCards(e: any) {
    const element = e.target.classList.contains(styles['events__map']);
    if (!element) return;
    setOpenCard(undefined);
  }

  const countries = events.map((country: any, i: number) => {
    return (
      <Card
        key={country.country}
        country={country.country}
        coor={country.coordinates}
        direction={country.direction}
        events={country.events}
        svg={country.svg}
        trigger={[openCard, setOpenCard]}
        order={i + 1}
      />
    );
  });

  useEffect(() => {
    if (!inView) setOpenCard(undefined);
  }, [inView]);

  return (
    <div className={css(styles, 'events')}>
      <h3 className={css(styles, 'events__title')}>{title}</h3>
      <div className={css(styles, 'events__map')} onClick={closeCards} ref={ref}>
        {countries}
      </div>
    </div>
  );
}
