import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// const box1 = document.querySelector('.box-1');
// const box2 = document.querySelector('.box-2');
// const box3 = document.querySelector('.box-3');

// ? Animating the boxes using tween
// gsap.to(box1, {
//     x: 1000,
//     duration: 3,
//     ease: 'elastic.out(1, 0.3)',
//     delay: 1,
// });

// gsap.to(box2, {
//     x: 1000,
//     duration: 3,
//     ease: 'elastic.out(1, 0.3)',
//     delay: 4,
// });

// gsap.to(box3, {
//     x: 1000,
//     duration: 3,
//     ease: 'elastic.out(1, 0.3)',
//     delay: 7,
// });

// ? Animating the boxes using timeline
const tl = gsap.timeline();

// tl.to(box1, {
//     x: 1000,
//     duration: 3,
//     ease: 'elastic.out(1, 0.3)',
// });

// tl.to(box2, {
//     x: 1000,
//     duration: 3,
//     ease: 'elastic.out(1, 0.3)',
// });

// tl.to(box3, {
//     x: 1000,
//     duration: 3,
//     ease: 'elastic.out(1, 0.3)',
// });

//  Methods can be chained
// tl.from('nav h2', {
//     opacity: 0,
//     y: -50,
//     duration: 1,
// }).from('nav div a', {
//     opacity: 0,
//     y: -50,
//     stagger: 0.5,
//     duration: 1,
// });

// ? Animating different pages boxes using ScrollTrigger
gsap.from('#page-1 .box', {
    rotate: 360,
    opacity: 0,
    scale: 0,
    duration: 1.8,
});

gsap.from('#page-2 .box', {
    rotate: 360,
    opacity: 0,
    scale: 0,
    background: 'yellow',
    duration: 1.8,
    scrollTrigger: {
        trigger: '#page-2 .box',
        markers: true,
    },
});
