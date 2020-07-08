import React from 'react';
import './App.css';
import AddColorFor from './components/AddColorForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddColorFor
          onNewColor={(title, color) => {
            console.log(
              `TODO: add new ${title} and ${color} to the list`,
            );
            console.log('TODO: render UI with new Color');
          }}
        />
      </header>
    </div>
  );
}

export default App;
