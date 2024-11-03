import { gsap } from 'gsap';

const paths = gsap.utils.toArray('#logo path');

paths.reverse().forEach((path, index) => {
    gsap.fromTo(
        path,
        {
            strokeDashoffset: path.getTotalLength(),
            strokeDasharray: path.getTotalLength() - 100,
        },
        {
            fill: '#fff',
            strokeDasharray: path.getTotalLength(),
            strokeDashoffset: 0,
            ease: 'power1.inOut',
            delay: 0.15 * index,
            duration: 2,
        }
    );
});

// gsap.to(paths, {
//     fill: 'white',
//     delay: 2,
//     duration: 1,
// });

console.log(paths);
