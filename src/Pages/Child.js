import React, { useState } from 'react';

const Child = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1 className='font-bold text-2xl'>Count: {count}</h1>
            <div>
                <button onClick={() => {
                    if (count > 0) {
                        setCount(count - 1);
                    }
                }} className='bg-red-500 p-2 rounded-lg text-white m-5'>Decrement</button>
                <button onClick={() => setCount(count + 1)} className='bg-green-500 p-2 rounded-lg text-white m-5'>Increment</button>
            </div>
        </div >
    );
};

export default Child;