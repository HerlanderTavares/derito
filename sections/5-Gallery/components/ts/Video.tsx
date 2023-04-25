import styles from '../css/Video.module.scss';
import {css} from '../../../helpers';
import {FC, useEffect, useRef} from 'react';

interface videos {
  link: string;
  title: string;
  order: number;
  trigger: number;
}

const Video: FC<videos> = props => {
  const frameRef = useRef<HTMLIFrameElement>(null);

  function toggleVideo(video: HTMLIFrameElement, action: 'stop' | 'play') {
    video.contentWindow!.postMessage(
      JSON.stringify({event: 'command', func: `${action}Video`}),
      '*'
    );
  }

  useEffect(() => {
    if (props.trigger !== props.order) toggleVideo(frameRef.current!, 'stop');
  }, [props.trigger]);

  return (
    <iframe
      ref={frameRef}
      className={css(styles, 'gallery__video', props.trigger === props.order ? 'active' : '')}
      src={`https://www.youtube.com/embed/${props.link}?rel=0&mute=0&version=3&enablejsapi=1`}
      title={props.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
