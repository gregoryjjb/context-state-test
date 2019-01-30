import React from 'react';
import { withStore } from './store';

class ChildThree extends React.Component {
    componentDidMount() {
        const { store, setStore } = this.props;
        
        setTimeout(() => setStore({ myVal: 42 }), 2000);
    }
    
    render() {
        return (
            <div className="area" >
                <h3>Class Component with HOC</h3>
                <p><code>myVal</code> is {this.props.store.myVal}</p>
                <button onClick={() => {
                    this.props.setStore({
                        myVal: 42,
                    });
                }}>
                    Set myVal to 42
                </button>
            </div>
        )
    }
}

export default withStore(ChildThree);