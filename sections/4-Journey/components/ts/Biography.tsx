import styles from '../css/Biography.module.scss';
import {css} from '../../../helpers';
import {FC, useContext, CSSProperties} from 'react';
import State, {context} from '../../../UI/State';

interface types {
  img: string;
  title: string;
  description: string;
}

const Card: FC<types> = props => {
  const id = props.img.toLowerCase().split('.')[0];
  const inline: CSSProperties = {
    backgroundImage: `url("./images/4-Journey/biography/${props.img}")`,
  };

  return (
    <div className={css(styles, 'biography__card')} data-card={id}>
      <div className={css(styles, 'biography__img')} style={inline}></div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default function Biography() {
  const state: context = useContext(State);
  const bios = state.language.biography;

  const cards = bios.map((bio: any, i: number) => {
    return <Card key={i} img={bio.image} title={bio.title} description={bio.description} />;
  });

  return <div className={css(styles, 'biography')}>{cards}</div>;
}
