import React, { useEffect, useState } from 'react'
import { counterItems } from '../constants'

const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const duration = 2000;
        let animationFrameId;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (progress < duration) {
                setCount(Math.floor((progress / duration) * end));
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
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