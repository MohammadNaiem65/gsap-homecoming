import { useEffect } from 'react';
import { useRef } from 'react';
// import './App.css';

function App() {
    const pathContainerRef = useRef(null);

    useEffect(() => {
        if (!pathContainerRef.current) return;

        const paths = pathContainerRef.current.querySelectorAll('path');

        paths.forEach((path, index) => {
            const length = path.getTotalLength();
            console.log(length);
            path.style.setProperty('--path-length', length);
            path.style.setProperty('--path-index', index);
        });
    }, []);

    return (
        <section className='w-screen min-h-screen bg-black'>
            <svg
                id='logo'
                viewBox='0 0 700 97'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g>
                    <path
                        d='M655.562 95.5H657.062H661C666.535 95.5 671.579 94.6201 676.113 92.833C680.643 91.047 684.519 88.4452 687.72 85.0255C690.961 81.5649 693.438 77.3579 695.165 72.4341C696.899 67.4932 697.75 61.8616 697.75 55.5625V41.5C697.75 35.2409 696.899 29.6113 695.167 24.6322C693.44 19.6677 690.963 15.4567 687.716 12.0336C684.479 8.57873 680.607 5.95611 676.117 4.16885C671.627 2.38132 666.664 1.5 661.25 1.5H657.062H655.562H644.625H643.125H637.25H635.75V3V94V95.5H637.25H643.425H644.938H655.562ZM657.062 77.375V19.6875H661.25C664.333 19.6875 666.816 20.1094 668.751 20.8909C670.662 21.6626 672.156 22.8392 673.274 24.4264L673.278 24.4331L673.283 24.4397C674.406 25.9977 675.259 28.1434 675.775 30.9577L675.775 30.9614C676.295 33.759 676.562 37.2238 676.562 41.375V55.5625C676.562 61.0281 676.047 65.3432 675.065 68.5626L675.063 68.5706L675.06 68.5787C674.139 71.7276 672.593 73.8911 670.5 75.2389C668.378 76.6057 665.266 77.375 661 77.375H657.062Z'
                        fill='transparent'
                        stroke='white'
                        stroke-width='3'
                    />
                    <path
                        d='M628.062 78.875V77.375H626.562H594.188V56.0625H621.25H622.75V54.5625V39.875V38.375H621.25H594.188V19.6875H626.438H627.938V18.1875V3V1.5H626.438H594.188H592.688H587H585.5H574.375H572.875V3V94V95.5H574.375H585.5H587H592.688H594.188H626.562H628.062V94V78.875Z'
                        fill='transparent'
                        stroke='white'
                        stroke-width='3'
                    />
                    <path
                        d='M481.724 1.5H477.25H475.75V3V94V95.5H477.25H494.938H496.438V94V63V62.9703L496.436 62.9407L495.836 47.7761L510.065 94.4375L510.389 95.5H511.5H525.188H526.32L526.63 94.4102L541.033 43.7571L540.314 62.9438L540.312 62.9719V63V94V95.5H541.812H559.438H560.938V94V3V1.5H559.438H553.048H551.062H544.062H542.618H536.875H535.756L535.437 2.57269L518.373 59.9927L501.25 2.57136L500.93 1.5H499.812H494.004H492.562H483.75H481.724Z'
                        fill='transparent'
                        stroke='white'
                        stroke-width='3'
                    />
                    <path
                        d='M442.688 3V38.375H418.438V3V1.5H416.938H398.625H397.125V3V94V95.5H398.625H416.938H418.438V94V56.5H442.688V94V95.5H444.188H462.312H463.812V94V3V1.5H462.312H444.188H442.688V3Z'
                        fill='transparent'
                        stroke='white'
                        stroke-width='3'
                    />
                    <path
                        d='M347.323 1.5H344.625H343.522L343.193 2.55259L314.756 93.5526L314.147 95.5H316.188H335.5H336.658L336.951 94.3798L341.565 76.75H364.406L369.049 94.382L369.344 95.5H370.5H389.938H391.983L391.368 93.549L362.681 2.54901L362.35 1.5H361.25H358.345H356.688H349H347.323ZM352.949 33.251L359.615 58.5625H346.325L352.949 33.251Z'
                        fill='transparent'
                        stroke='white'
                        stroke-width='3'
                    />
                    <path
                        d='M243.438 1.5H222.75H221.25V3V18.1875V19.6875H222.75H243.438V94V95.5H244.938H263.125H264.625V94V19.6875H285.75H287.25V18.1875V3V1.5H285.75H264.625H263.125H244.938H243.438Z'
                        fill='transparent'
                        stroke='white'
                        stroke-width='3'
                    />
                    <path
                        d='M183.073 1.5H180.375H179.272L178.943 2.55259L150.506 93.5526L149.897 95.5H151.938H171.25H172.408L172.701 94.3798L177.315 76.75H200.156L204.799 94.382L205.094 95.5H206.25H225.688H227.733L227.118 93.549L198.431 2.54901L198.1 1.5H197H194.095H192.438H184.75H183.073ZM188.699 33.251L195.365 58.5625H182.075L188.699 33.251Z'
                        fill='transparent'
                        stroke='white'
                        stroke-width='3'
                    />
                    <path
                        d='M128.688 94V58.3125H155.688H157.188V56.8125V41.6875V40.1875H155.688H128.688V19.6875H159.188H160.688V18.1875V3V1.5H159.188H128.688H127.188H122.562H121.062H108.875H107.375V3V94V95.5H108.875H127.188H128.688V94Z'
                        fill='transparent'
                        stroke='white'
                        stroke-width='3'
                    />
                    <path
                        d='M94.75 3V1.5H93.25H75.0625H73.5625V3V94V95.5H75.0625H93.25H94.75V94V3Z'
                        fill='transparent'
                        stroke='white'
                        stroke-width='3'
                    />
                    <path
                        d='M3.4375 1.5H1.9375V3V94V95.5H3.4375H21.75H23.25V94V62.125H30.0146L43.3628 94.5707L43.7451 95.5H44.75H64.3125H65.8125V94V93.125V92.8167L65.6909 92.5333L50.1847 56.409C51.8766 55.3877 53.4279 54.2217 54.8353 52.9097L54.8354 52.9097L54.8451 52.9005C57.4796 50.3999 59.4937 47.311 60.8996 43.6646L60.9017 43.659C62.3168 39.9444 63 35.5452 63 30.5C63 24.3136 61.8187 19.0029 59.3706 14.6409C56.9261 10.2853 53.404 6.9899 48.8426 4.77559C44.2985 2.56975 38.8748 1.5 32.625 1.5H3.4375ZM32.125 43.9375H23.25V19.6875H32.625C34.9053 19.6875 36.5877 20.1996 37.8033 21.0867L37.8217 21.1001L37.8405 21.113C39.1179 21.987 40.0849 23.2845 40.7048 25.1079L40.7107 25.1251L40.717 25.1422C41.3901 26.9745 41.75 29.2479 41.75 32C41.75 34.557 41.3564 36.7324 40.6112 38.5582L40.6082 38.5655L40.6053 38.5729C39.9173 40.3111 38.8732 41.6234 37.4765 42.5671C36.159 43.444 34.409 43.9375 32.125 43.9375Z'
                        fill='transparent'
                        stroke='white'
                        stroke-width='3'
                    />
                </g>
            </svg>
        </section>
    );
}

export default App;
