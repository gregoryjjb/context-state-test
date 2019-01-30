import React from 'react';
import { withStore } from './store';

const ChildOne = ({ store, setStore, ...props }) => {
    
    return (
        <div className="area" >
            <h3>Functional Component with HOC</h3>
            <p><code>otherVal</code> is {store.otherVal}</p>
            <button onClick={() => setStore({ otherVal: store.otherVal + 1 })}>Increment otherVal</button>
        </div>
    )
}

export default withStore(ChildOne);