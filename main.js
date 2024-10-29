import { gsap } from 'gsap';

const cursor = document.querySelector('#cursor');
const hamburgers = document.querySelectorAll('.hamburger');

window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5, // Add a small duration for smooth movement
    });
});

hamburgers.forEach((hamburger) => {
    hamburger.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            backgroundColor: '#242424',
            scale: 2,
        });
    });

    hamburger.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            backgroundColor: '#fff',
            scale: 1,
        });
    });
});
