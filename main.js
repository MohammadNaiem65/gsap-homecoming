import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// register scroll trigger
gsap.registerPlugin(ScrollTrigger);

gsap.to('.page-2 h1', {
    transform: 'translateX(-80%)',
    scrollTrigger: {
        trigger: '.page-2',
        scrub: 1,
        pin: true,
    },
});
