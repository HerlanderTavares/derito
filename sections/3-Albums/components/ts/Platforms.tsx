import styles from '../css/Platforms.module.scss';
import {checkClass, css} from '../../../helpers';
import {FC, useEffect, useState, CSSProperties} from 'react';
import Icon from '../../../UI/components/ts/Icon';
import Transition from 'react-transition-group/Transition';

interface types {
  platforms: [];
  label: string;
}

const Platforms: FC<types> = props => {
  const [isOpen, setIsOpen] = useState(false);
  const buttons = props.platforms.map((platform: any, i: number) => (
    <a
      key={i}
      className={css(styles, 'platforms__link')}
      href={platform.link}
      data-link={platform.name}
      target="_blank"
      onClick={() => setIsOpen(false)}
    >
      <Icon set="platforms" id={platform.name} />
    </a>
  ));

  return (
    <div className={css(styles, 'platforms')}>
      <button
        className={css(styles, 'platforms__btn', !isOpen ? 'activate' : '')}
        onClick={() => setIsOpen(true)}
      >
        {props.label}
      </button>

      <div
        className={css(styles, 'platforms__links', isOpen ? 'activate' : '')}
        data-element="links"
      >
        {buttons}
      </div>
    </div>
  );
};

export default Platforms;
