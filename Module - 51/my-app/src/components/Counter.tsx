'use client';

import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='m-32 text-center'>
            <div className='w-1/2 mx-auto space-y-5 bg-white p-10 rounded-lg shadow-lg h-1/3 items-center text-black'>
                <h1 className='text-3xl font-semibold '>Simple Counter</h1>
                <h2 className='text-2xl font-medium'>Count: {count}</h2>
                <div className='space-x-10 text-white'>
                    <button
                        onClick={() => setCount(count - 1)}
                        className='btn border rounded-2xl p-3 bg-blue-600'
                    >
                        Decrement
                    </button>
                    <button
                        onClick={() => setCount(0)}
                        className='btn border rounded-2xl p-3 bg-red-600'
                    >
                        Reset
                    </button>
                    <button
                        onClick={() => setCount(count + 1)}
                        className='btn border rounded-2xl p-3 bg-green-600'
                    >
                        Increment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
