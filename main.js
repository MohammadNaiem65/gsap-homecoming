import { gsap } from 'gsap';

const tween = gsap.to('#tween-beginning', {
    x: '100dvw',
    rotate: 360,
    duration: 10,
    delay: 0.5,
    repeat: 1,
});

const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const resumeBtn = document.getElementById('resume');
const restartBtn = document.getElementById('restart');
const resetBtn = document.getElementById('reset');

// Plays the tween if it is stop
playBtn.addEventListener('click', () => tween.play());

// Pause the tween if it is playing
pauseBtn.addEventListener('click', () => tween.pause());

// Resumes the tween if it is stop
resumeBtn.addEventListener('click', () => tween.resume());

// Restarts the tween from any stage of the animation
restartBtn.addEventListener('click', () => tween.restart());
