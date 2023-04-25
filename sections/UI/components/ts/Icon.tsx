import {checkProp} from '../../../helpers';
import {FC} from 'react';

import icons from '../svg/icons.svg';
import platforms from '../svg/platforms.svg';
import flags from '../svg/flags.svg';

interface Types {
  id: string;
  className?: string;
  set?: string;
  size?: string;
  color?: string;
  fill?: boolean;
}

const Icon: FC<Types> = props => {
  const classes = checkProp(props.className);
  const iconSet = props.set === 'flags' ? flags : props.set === 'platforms' ? platforms : icons;
  const size: string = props.size || '100%';
  const color: string = props.color || 'white';
  const fill = props.fill === true ? color : 'none';
  const stroke = props.fill === true ? 'none' : iconSet === icons ? color : undefined;

  return (
    <svg
      className={classes}
      style={{
        color,
        width: size,
        height: size,
        fill: iconSet === icons ? fill : undefined,
        stroke,
        pointerEvents: 'none',
      }}
    >
      <use href={iconSet + `#${props.id}`} />
    </svg>
  );
};

export default Icon;
