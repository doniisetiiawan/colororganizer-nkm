/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import '../App.css';
import { Colors, Menu, NewColor } from './containers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="app">
          <Menu />
          <NewColor />
          <Colors />
        </div>
      </header>
    </div>
  );
}

export default App;
