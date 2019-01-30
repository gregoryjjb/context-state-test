import React, { Component } from 'react';
import { StoreProvider } from './store';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import ChildThree from './ChildThree';

class App extends Component {
  render() {
    return (
      <StoreProvider>
        <ChildOne />
        <ChildTwo />
        <ChildThree />
      </StoreProvider>
    );
  }
}

export default App;
