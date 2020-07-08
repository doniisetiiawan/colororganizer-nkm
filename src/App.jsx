import React from 'react';
import './App.css';
import AddColorFor from './components/AddColorForm';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarRating totalStars={7} starsSelected={3} />
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
