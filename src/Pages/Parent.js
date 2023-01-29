import React, { useContext } from 'react';
import { CounterContext } from '../App';
import Child from './Child';

const Parent = () => {
    const { count } = useContext(CounterContext);
    return (
        <div>
            <h1 className='font-bold text-2xl'>Count: {count}</h1>
            <Child />
        </div>
    );
};

export default Parent;