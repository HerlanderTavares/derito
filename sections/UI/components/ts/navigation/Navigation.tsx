import styles from '../../css/Navigation.module.scss';
import {css} from '../../../../helpers';
import React, {FC, useContext, useState, useEffect} from 'react';
import State, {context} from '../../../State';
import Transition from 'react-transition-group/Transition';

import Icon from '../Icon';
import Contact from './Contact';
import Form from './Form';
import Languages from '../translations/Languages';

interface LinkTypes {
  label: string;
  anchor?: string;
  onClick?: () => void;
}

const Link: FC<LinkTypes> = props => {
  const anchor = props.anchor ? `#${props.anchor}` : '#';

  function click(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const link = e.target as HTMLAnchorElement;
    const href = link.href.split('#')[1];
    const section = document.getElementById(`${href}`);

    section?.scrollIntoView({behavior: 'smooth'});
    if (props.onClick) props.onClick();
  }

  return (
    <li className={css(styles, 'nav__item')}>
      <a href={anchor} className={css(styles, 'nav__link')} onClick={click}>
        {props.label}
      </a>
    </li>
  );
};

export default function Navigation() {
  const state: context = useContext(State);
  const [contactIsOpen, openContact] = useState(false);
  const closed = !state.navIsOpen ? 'closed' : '';

  useEffect(() => {
    if (!state.navIsOpen) openContact(false);
  }, [state.navIsOpen]);

  const navLinks = state.language.navLinks.map((label: string[]) => {
    return <Link key={label[1]} label={label[0]} anchor={label[1]} onClick={state.closeNav} />;
  });

  function closeNav() {
    if (contactIsOpen) openContact(false);
    if (!contactIsOpen && state.closeNav) state.closeNav();
  }

  return (
    <nav className={css(styles, 'nav', closed)}>
      <button className={css(styles, 'nav__close-btn')} onClick={closeNav}>
        <Icon id="close-btn" color="#c6ab9a" />
      </button>

      <Transition in={!contactIsOpen} timeout={300} mountOnEnter unmountOnExit>
        {(state: string) => {
          const inline = {
            transition: `opacity ${300}ms ease-out`,
            opacity: state === 'entering' || state === 'entered' ? 1 : 0,
            display: state === 'exiting' ? 'none' : undefined,
          };

          return (
            <ul className={css(styles, 'nav__list')} style={inline}>
              {navLinks}
              <Contact onClick={() => openContact(true)} />
            </ul>
          );
        }}
      </Transition>

      <Form trigger={contactIsOpen} />

      <div className={css(styles, 'nav__languages')}>
        <Languages position="center" />
      </div>
    </nav>
  );
}
