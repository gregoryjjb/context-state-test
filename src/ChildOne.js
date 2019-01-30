import React from 'react';
import { useStore } from './store';

const ChildOne = ({ ...props }) => {
    const [store, setStore] = useStore();
    
    return (
        <div className="area" >
            <h3>Funcional Component with Hook</h3>
            <p><code>myVal</code> is {store.myVal}</p>
            <button onClick={() => setStore({ myVal: store.myVal + 1 })}>Increment myVal</button>
        </div>
    )
}

export default ChildOne;