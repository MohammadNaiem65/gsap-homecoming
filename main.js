import { gsap } from 'gsap';

const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');

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

tl.from('nav h2', {
    opacity: 0,
    y: -50,
    duration: 1,
}).from('nav div a', {
    opacity: 0,
    y: -50,
    stagger: 0.5,
    duration: 1,
});
