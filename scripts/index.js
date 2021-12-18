const borderControl = (function () {
    // cache DOM
    const body = document.querySelector('body');
    const MAX_SCROLL = 700;

    // bind events
    document.addEventListener('scroll', setShadow);

    function setShadow(e) {
        const blurPercentage = Math.max(MAX_SCROLL - window.scrollY, 0) / MAX_SCROLL;
        const spreadPercentage = Math.max(MAX_SCROLL - window.scrollY, 0) / MAX_SCROLL;
        body.style.boxShadow = `0 0 ${blurPercentage * 200}px ${spreadPercentage * 80}px black inset`;
    }
})();

const audioPlayer = (function () {
    // cache DOM
    const audioPlayer = document.querySelector('.audio-player');
    const audio = document.querySelector('#audio');
    const songControl = document.querySelector('#song-control');
    const progressContainer = document.querySelector('.progress-container');
    const progress = document.querySelector('.progress');

    // bind events
    songControl.addEventListener('click', () => {
        if (!audioPlayer.classList.contains('play')) {
            play();
        } else {
            pause();
        }
    });

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', pause);
    progressContainer.addEventListener('click', setProgress);

    function play() {
        audio.play();
        audioPlayer.classList.add('play');
        songControl.textContent = 'pause';
    }

    function pause() {
        audio.pause();
        audioPlayer.classList.remove('play');
        songControl.textContent = 'play_arrow';
    }

    function updateProgress(e) {
        const { duration, currentTime } = e.target;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    }

    function setProgress(e) {
        const width = e.currentTarget.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;

        audio.currentTime = (clickX / width) * duration;
    }
})();
