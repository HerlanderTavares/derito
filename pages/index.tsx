import {useEffect, useState} from 'react';
import State from '../sections/UI/State';
import init, {bodyListeners, languages} from '../sections/UI/Init';

//Components
import UI from '../sections/UI/UI';
import Hero from '../sections/1-Hero/Hero';
import Content from '../sections/UI/Content';

export default function Index() {
  //Language State
  const [lang, setLang] = useState('en');
  const language: object = languages[lang].obj;

  function translate(langID: string) {
    setLang(langID);
    localStorage.setItem('preffered-lang', langID);
  }

  function initLang() {
    const currentLang = localStorage.getItem('preffered-lang');
    if (currentLang) setLang(currentLang);
  }

  //Navigation State
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const openNav = () => setNavIsOpen(true);
  const closeNav = () => setNavIsOpen(false);

  //Media State
  interface mediaTypes {
    type: string | undefined;
    section: string | undefined;
    name: string | undefined;
    isPlaying: boolean;
  }

  const mediaOptions: mediaTypes = {
    type: undefined,
    section: undefined,
    name: undefined,
    isPlaying: false,
  };

  const [playMedia, setPlayMedia] = useState(mediaOptions);
  const [fixedPlayer, setFixedPlayer] = useState(false);

  //Context State
  const state = {
    navIsOpen,
    openNav,
    closeNav,
    showNavBar,
    setShowNavBar,
    language,
    translate,
    lang,
    playMedia,
    setPlayMedia,
    fixedPlayer,
    setFixedPlayer,
  };

  //Initializer
  useEffect(() => init(state), []);
  useEffect(() => bodyListeners(state), [navIsOpen]);

  return (
    <State.Provider value={state}>
      <UI />
      <Hero />
      <Content />
    </State.Provider>
  );
}
