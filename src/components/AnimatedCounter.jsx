import React, { useEffect, useState } from 'react'
import { counterItems } from '../constants'

const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const step = (end / duration) * 16;

        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end]);

    return <span>{count}{suffix}</span>;
};

const AnimatedCounter = () => {
    return (
        <div id="counter" className='padding-x-lg xl:mt-0 mt-32'>
            <div className='mx-auto grid-4-cols'>
                {counterItems.map((item) => (
                    <div key={item.label} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
                        <div className='counter-number text-white text-5xl font-bold mb-2'>
                            <Counter end={item.value} suffix={item.suffix} />
                        </div>
                        <div className='text-white-50 text-lg'>
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimatedCounter