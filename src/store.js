import React, { useState, useContext } from 'react';

export const StoreContext = React.createContext({ store: {}, setStore: () => {} });

//export const StoreProvider = ({ children }) => {
//    const [store, setStoreRaw] = useState({ myVal: -1, otherVal: 69 });
//    const setStore = vals => {
//        const newStore = { ...store, ...vals };
//        console.log('SetStore: ', store, '->', newStore);
//        setStoreRaw(newStore);
//    }
//    return (
//        <StoreContext.Provider value={{ store, setStore }}>
//            {children}
//        </StoreContext.Provider>
//    );
//}

export class StoreProvider extends React.Component {
    state = {
        myVal: -1,
        otherVal: 69,
    }
    
    setStore = vals => {
        const newState = { ...this.state, ...vals };
        const oldState = { ...this.state };
        
        console.log('SetStore:', oldState, '->', newState);
        
        this.setState(newState);
    }
    
    render() {
        return (
            <StoreContext.Provider
                value={{
                    store: { ...this.state },
                    setStore: this.setStore,
                }}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}

export const withStore = Comp => ({ ...props }) => {
    return (
        <StoreContext.Consumer>
            {({ store, setStore }) => (
                <Comp {...props} store={{...store}} setStore={setStore} />
            )}
        </StoreContext.Consumer>
    )
}

export const useStore = (key) => {
    const { store, setStore } = useContext(StoreContext);
    return [ store, setStore ];
}