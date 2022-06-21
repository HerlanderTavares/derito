import {timer} from '../helper.js';

class MusicPlayer {
  allPlayers = document.querySelectorAll('.player');

  togglePlayer() {
    const parent = this;

    this.allPlayers.forEach((player, i) => {
      player.addEventListener('click', e => {
        const btn = e.target.closest('.player__play-btn');
        const isPlaying = player.classList.contains('play');
        if (!btn) return;

        if (isPlaying) {
          this.pauseSong(player);
          this.delayedStop(player);
        } else {
          pauseAll();
          this.playSong(player);
        }
      });

      function pauseAll() {
        parent.allPlayers.forEach((player, b) => {
          const audio = player.querySelector('audio');
          parent.pauseSong(player);
          if (b != i) audio.currentTime = 0;
        });
      }
    });
  }

  setProgress() {
    this.allPlayers.forEach(player => {
      const audio = player.querySelector('audio');
      const seeker = player.querySelector('.player__seeker');

      seeker.addEventListener('click', callback);

      function callback(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
      }
    });
  }

  updateProgress() {
    const parent = this;

    this.allPlayers.forEach(player => {
      const audio = player.querySelector('audio');
      const progressBar = player.querySelector('.player__seeker-progress-bar');

      audio.addEventListener('timeupdate', callback);
      audio.addEventListener('ended', () => parent.stopSong(player));

      function callback(e) {
        const {duration, currentTime} = e.srcElement;
        const progressPercent = +((currentTime / duration) * 100).toFixed(2);

        progressBar.style.width = `${progressPercent}%`;
      }
    });
  }

  playSong(player) {
    const playIcon = player.querySelector('.play-icon');
    const pauseIcon = player.querySelector('.pause-icon');
    const audio = player.querySelector('audio');

    player.classList.add('play');
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'flex';
    audio.play();
  }

  pauseSong(player) {
    const playIcon = player.querySelector('.play-icon');
    const pauseIcon = player.querySelector('.pause-icon');
    const audio = player.querySelector('audio');

    player.classList.remove('play');
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    audio.pause();
  }

  stopSong(player) {
    const audio = player.querySelector('audio');
    this.pauseSong(player);
    audio.currentTime = 0;
  }

  delayedStop(player) {
    setTimeout(() => {
      if (!player.classList.contains('play')) {
        this.stopSong(player);
        player.classList.remove('player--fixed');
      }
    }, 1000 * 5);
  }
}

export default new MusicPlayer();
