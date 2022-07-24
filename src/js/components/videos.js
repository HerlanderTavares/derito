import {observe} from '../helper';
import {videos} from '../model';
import music from '../sections/music';
import musicPlayer from './musicPlayer';

class Videos {
  container = document.querySelector('.gallery-videos');
  menuContainer = document.querySelector('.gallery-videos__menu');
  section = document.querySelector('#gallery');

  constructor() {
    this.init();
  }

  init() {}

  interact() {
    videos.forEach(video => this.generateVideos(video));
    this.navigateVideos();
  }

  generateVideos(video) {
    const btn = `<button><span></span></button>`;
    const html = `
      <iframe
        class="video"
        src="https://www.youtube.com/embed/${video.link}?rel=0&mute=0&version=3&enablejsapi=1"
        title="${video.title}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;

    this.container.insertAdjacentHTML('beforeend', html);
    this.menuContainer.insertAdjacentHTML('beforeend', btn);
  }

  navigateVideos() {
    const parent = this;
    const allVids = document.querySelectorAll('.video');
    const [prevBtn, nextBtn] = document.querySelectorAll('.gallery__nav-btn[data-gallery="videos"]');
    const menuBtns = document.querySelectorAll('.gallery-videos__menu button');

    let currentVid = 0;

    active();
    prevBtn.addEventListener('click', previous);
    nextBtn.addEventListener('click', next);
    observe(this.section, parent.stopMusic, 0.6);
    this.engageMusic();

    function active() {
      allVids.forEach(vid => vid.classList.remove('active'));
      allVids[currentVid].classList.add('active');

      menuBtns.forEach(btn => btn.classList.remove('active'));
      menuBtns[currentVid].classList.add('active');
    }

    function previous() {
      currentVid--;
      if (currentVid < 0) currentVid = allVids.length - 1;

      parent.stopMusic();
      allVids.forEach(video => parent.stopVideo(video));
      active();
    }

    function next() {
      currentVid++;
      if (currentVid > allVids.length - 1) currentVid = 0;

      parent.stopMusic();
      allVids.forEach(video => parent.stopVideo(video));
      active();
    }
  }

  stopVideo(video) {
    video.contentWindow.postMessage(JSON.stringify({event: 'command', func: 'stopVideo'}), '*');
  }

  playVideo(video) {
    video.contentWindow.postMessage(JSON.stringify({event: 'command', func: 'playVideo'}), '*');
  }

  stopMusic() {
    const musicCards = document.querySelectorAll('.music-card');
    musicCards.forEach(card => {
      const song = card.querySelector('.player');
      musicPlayer.stopSong(song);
      music.fixedPlayer(card), 1000 * 5;
    });
  }

  engageMusic() {
    const allVids = document.querySelectorAll('.video');
    const section = document.querySelector('.music');
    const callback = () => allVids.forEach(vid => this.stopVideo(vid));
    observe(section, callback, 0.3);
  }
}

export default new Videos();
