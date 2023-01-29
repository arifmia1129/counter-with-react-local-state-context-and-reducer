import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 className='font-bold text-2xl'>Count: {count}</h1>
            <Child count={count} setCount={setCount} />
        </div>
    );
};

export default Parent;