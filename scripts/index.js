const borderControl = (function () {
    // cache DOM
    const body = document.querySelector('body');
    const MAX_SCROLL = 700;

    // bind events
    document.addEventListener('scroll', (e) => {
        const blurPercentage = Math.max(MAX_SCROLL - window.scrollY, 0) / MAX_SCROLL;
        const spreadPercentage = Math.max(MAX_SCROLL - window.scrollY, 0) / MAX_SCROLL;
        body.style.boxShadow = `0 0 ${blurPercentage * 200}px ${spreadPercentage * 80}px black inset`;

        console.log(blurPercentage, spreadPercentage);
    });
})();

const audioPlayer = (function () {
    // cache DOM
    const audioPlayer = document.querySelector('.audio-player');
    const audio = document.querySelector('#audio');
    const songControl = document.querySelector('#song-control');

    // bind events
    songControl.addEventListener('click', () => {
        if (!audioPlayer.classList.contains('play')) {
            play();
        } else {
            pause();
        }
    });

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
})();
