document.addEventListener('DOMContentLoaded', function() {
    const launchDate = new Date('2024-12-31T00:00:00Z').getTime(); // Set your launch date here

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById('countdown').innerHTML = '<h2>🚀 Launched!</h2>';
            document.querySelector('.notify-button').innerText = 'Explore Now';
        }
    }, 1000);

    // Parallax effect (optional, if you want something more interactive than background-attachment: fixed)
    // window.addEventListener('scroll', function() {
    //     const parallaxBg = document.querySelector('.parallax-hero');
    //     let scrollPosition = window.pageYOffset;
    //     parallaxBg.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    // });
});