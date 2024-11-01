import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// register scroll trigger
gsap.registerPlugin(ScrollTrigger);

// page 1 animation
gsap.fromTo(
    '.page-1 .box',
    {
        scale: 0,
        opacity: 0,
    },
    {
        scale: 1,
        opacity: 1,
        rotate: 360,
        duration: 2,
    }
);

// page 2 animation
gsap.fromTo(
    '.page-2 .box',
    {
        scale: 0,
        opacity: 0,
    },
    {
        scale: 1,
        opacity: 1,
        rotate: 360,
        duration: 2,
        scrollTrigger: {
            trigger: '.page-2 .box',
            start: 'top 90%',
            end: 'top 10%',
            // toggleActions: 'play reverse play reverse', // Events to handle the animation.
            scrub: 1,
            markers: true,
        },
    }
);
