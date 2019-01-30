import React from 'react';
import { useStore } from './store';

const ChildOne = ({ ...props }) => {
    const [store, setStore] = useStore();
    
    return (
        <div>
            <p>MyVal is {store.myVal}</p>
            <button onClick={() => setStore({ myVal: store.myVal + 1 })}>Click</button>
        </div>
    )
}

export default ChildOne;