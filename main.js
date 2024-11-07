import { gsap } from 'gsap';

// // Create a timeline for better control
// const tl = gsap.timeline({
//     repeat: -1,
//     repeatDelay: 1,
// });

// const paths = gsap.utils.toArray('#logo path');

// // Variable to track if one complete animation has occurred
// let hasCompletedOneAnimation = false;

// // Add animations to the timeline
// paths.reverse().forEach((path, index) => {
//     tl.fromTo(
//         path,
//         {
//             strokeDashoffset: path.getTotalLength(),
//             strokeDasharray: path.getTotalLength() - 100,
//         },
//         {
//             fill: '#fff',
//             strokeDasharray: path.getTotalLength(),
//             strokeDashoffset: 0,
//             ease: 'power1.inOut',
//             duration: 2,
//         },
//         index * 0.18
//     );
// });

// // Add a callback after one complete animation cycle
// tl.call(() => {
//     hasCompletedOneAnimation = true;
//     checkAndRemovePreloader();
// }, []); // Slightly before the repeat

// function removePreloader() {
//     tl.kill();
//     const logo = document.getElementById('logo');

//     gsap.to(logo, {
//         y: '-100dvh',
//         duration: 0.5,
//         onComplete: () => {
//             logo.remove();
//         },
//     });
// }

// let isPageLoaded = false;

// function checkAndRemovePreloader() {
//     if (isPageLoaded && hasCompletedOneAnimation) {
//         removePreloader();
//     }
// }

// // Listen for page load
// window.addEventListener('load', () => {
//     isPageLoaded = true;
//     checkAndRemovePreloader();
// });

// ! icons magnetic animation effect
document.querySelectorAll('.fa-brands').forEach((el) => {
    let xTo = gsap.quickTo(el, 'x', { ease: "expoScale(0.5,7,none)", delay: 0.5 });
    let yTo = gsap.quickTo(el, 'y', { ease: "expoScale(0.5,7,none)", delay: 0.5 });

    el.addEventListener('mousemove', (e) => {
        const { width, height, left, top } = el.getBoundingClientRect();

        xTo(e.clientX - (left + width / 2));
        yTo(e.clientY - (top + height / 2));
    });
    el.addEventListener('mouseleave', () => {
        xTo(0);
        yTo(0);
    });
});
