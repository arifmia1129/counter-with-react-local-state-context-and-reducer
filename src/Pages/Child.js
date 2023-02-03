import React, { useReducer } from 'react';

const Child = () => {
    const initialState = 0;

    const reducer = (state, action) => {
        if (action.type === "INCREMENT") {
            return state + 1;
        } else if (action.type === "DECREMENT") {
            return state - 1;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1 className='font-bold text-2xl'>Count: {state}</h1>
            <div>
                <button onClick={() => dispatch({ type: "DECREMENT" })} className='bg-red-500 p-2 rounded-lg text-white m-5'>Decrement</button>
                <button onClick={() => dispatch({ type: "INCREMENT" })} className='bg-green-500 p-2 rounded-lg text-white m-5'>Increment</button>
            </div>
        </div >
    );
};

export default Child;