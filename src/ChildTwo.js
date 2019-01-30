import React from 'react';
import { withStore } from './store';

const ChildOne = ({ store, setStore, ...props }) => {
    
    return (
        <div>
            <p>Other val is {store.otherVal}</p>
            <button onClick={() => setStore({ otherVal: store.otherVal + 1 })}>Click</button>
        </div>
    )
}

export default withStore(ChildOne);