import React from 'react';
import { withStore } from './store';

class ChildThree extends React.Component {
    componentDidMount() {
        const { store, setStore } = this.props;
        
        setTimeout(() => setStore({ myVal: 42 }), 2000);
    }
    
    render() {
        return (
            <div>
                <p>Class component sees {this.props.store.myVal}</p>
            </div>
        )
    }
}

export default withStore(ChildThree);