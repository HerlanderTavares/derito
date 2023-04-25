import styles from './Albums.module.scss';
import {css} from '../helpers';
import {useState, useContext, useEffect} from 'react';
import State, {context} from '../UI/State';
import {useInView} from 'react-intersection-observer';

import Menu from './components/ts/Menu';
import Card from './components/ts/Card';

export default function Albums() {
  const state: context = useContext(State);
  const albums = state.language.albums;

  const [order, setOrder] = useState(4);
  const [showAlbum, setShowAlbum] = useState(false);
  const {ref, inView} = useInView();

  const nextAlbum = () => {
    if (state.playMedia.section === 'albums') {
      state.setPlayMedia({type: undefined, section: undefined, name: undefined, isPlaying: false});
    }

    if (order < albums.covers.length) setOrder(state => state! + 1);
    else setOrder(1);
    console.log(order);
  };

  const prevAlbum = () => {
    if (state.playMedia.section === 'albums') {
      state.setPlayMedia({type: undefined, section: undefined, name: undefined, isPlaying: false});
    }

    if (order > 1) setOrder(state => state! - 1);
    else setOrder(albums.covers.length);
    console.log(order);
  };

  useEffect(() => {
    if (!inView) {
      setShowAlbum(false);
      if (state.playMedia.section === 'albums')
        state.setPlayMedia({
          type: undefined,
          section: undefined,
          name: undefined,
          isPlaying: false,
        });
    }
  }, [inView]);

  const covers = albums.covers.map((album: any, i: number) => {
    const nameID = album.title.toLowerCase().replace(' ', '');

    return (
      <Card
        key={i + 1}
        id={i + 1}
        album={album}
        order={order}
        trigger={showAlbum}
        next={nextAlbum}
        prev={prevAlbum}
        button={albums.button}
        prompts={albums.prompts}
      />
    );
  });

  return (
    <section className={css(styles, 'albums')} id="albums" ref={ref}>
      <div className={`active-area ${css(styles, 'container')}`}>
        <Menu
          next={nextAlbum}
          prev={prevAlbum}
          trigger={showAlbum}
          order={order}
          setOrder={setOrder}
          open={() => setShowAlbum(true)}
        />
        {covers}
      </div>
    </section>
  );
}
