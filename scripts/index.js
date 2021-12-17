const borderControl = (function() {
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

const audioPlayer = (function() {

})();