import styles from './Gallery.module.scss';
import {css} from '../helpers';
import {useState, useContext, FC, useRef, useEffect} from 'react';
import State, {context} from '../UI/State';
import {useInView} from 'react-intersection-observer';

import Icon from '../UI/components/ts/Icon';
import Photo from './components/ts/Photo';
import Video from './components/ts/Video';

export default function Gallery() {
  /************** State **************/
  const state: context = useContext(State);
  const btn = state.language.gallery.button;
  const title = state.language.navLinks[4][0];
  const photos = state.language.gallery.photos;
  const videos = state.language.gallery.videos;

  const photosRef = useRef<HTMLDivElement>(null);
  const [gallery, setGallery] = useState(true);
  const [openPhoto, setOpenPhoto] = useState<number | undefined>();
  const [photosSize, setPhotosSize] = useState([0, 0]);
  const [video, setVideo] = useState(1);
  const [ref, inView] = useInView();

  /************** Initializer **************/
  useEffect(() => {
    const observeResize = new ResizeObserver(entries => {
      const {width, height} = entries[0].contentRect;
      setPhotosSize([width, height]);
    });

    const width = photosRef.current ? photosRef.current.clientWidth - 100 : 0;
    const height = photosRef.current ? photosRef.current.clientHeight - 100 : 0;
    setPhotosSize([width, height]);

    if (gallery) observeResize.observe(photosRef.current!);

    window.addEventListener('scroll', () => setOpenPhoto(undefined));

    if (!inView) setGallery(true);
  }, [gallery, inView]);

  /************** Iterations **************/
  const photoGal = photos.map((photo: any, i: number) => {
    return (
      <Photo
        key={i}
        order={photo.number}
        size={photo.size}
        trigger={[openPhoto, setOpenPhoto]}
        description={photo.description}
      />
    );
  });

  const videoGal = videos.map((v: any, i: number) => {
    return <Video title={v.title} link={v.link} trigger={video} order={i + 1} />;
  });

  /************** Functions **************/
  const horizontalSpeed = photosSize[0] - 100;
  const verticalSpeed = photosSize[1] - 100;

  const nextPhotos = () => {
    photosRef.current!.scrollBy(horizontalSpeed, verticalSpeed);
  };

  const prevPhotos = () => {
    photosRef.current!.scrollBy(-horizontalSpeed, -verticalSpeed);
  };

  const nextVideos = () => {
    if (video < videos.length) setVideo(state => state! + 1);
    else setVideo(1);
  };
  const prevVideos = () => {
    if (video > 1) setVideo(state => state! - 1);
    else setVideo(videos.length);
  };

  /************** Element **************/
  return (
    <section
      className={css(styles, 'gallery')}
      id="gallery"
      data-gallery={gallery ? 'photos' : 'videos'}
      ref={ref}
    >
      <div className={`active-area ${styles.container}`}>
        <div className={css(styles, 'gallery__header')}>
          <button
            className={css(styles, 'gallery__header--switch', gallery ? 'active' : '')}
            onClick={() => setGallery(true)}
          >
            <Icon id="photos" color="#c6ab9a" />
          </button>
          <h2 className="title v">{title}</h2>
          <button
            className={css(styles, 'gallery__header--switch', !gallery ? 'active' : '')}
            onClick={() => setGallery(false)}
          >
            <Icon id="videos" color="#c6ab9a" />
          </button>
        </div>
        <button
          className={css(styles, 'gallery__nav')}
          data-btn="prev"
          onClick={gallery ? prevPhotos : prevVideos}
        >
          <Icon id="arrow-back" color="#c6ab9a" />
        </button>

        {gallery && (
          <div className={css(styles, 'gallery__photos')} ref={photosRef}>
            {photoGal}
          </div>
        )}
        {!gallery && <div className={css(styles, 'gallery__videos')}>{videoGal}</div>}

        <button
          className={css(styles, 'gallery__nav')}
          data-btn="next"
          onClick={gallery ? nextPhotos : nextVideos}
        >
          <Icon id="arrow-forward" color="#c6ab9a" />
        </button>
        <button
          className={css(styles, 'gallery__switch')}
          onClick={() => setGallery(state => !state)}
        >
          {btn.goTo} {gallery ? btn.videos : btn.photos}
        </button>
        <div className={css(styles, 'circles')}>
          {videos.map((p: object, i: number) => {
            const active = i + 1 === video ? 'active' : '';

            return <span className={css(styles, active)} />;
          })}
        </div>
      </div>
    </section>
  );
}
