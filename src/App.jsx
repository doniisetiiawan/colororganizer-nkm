/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import './App.css';
import { v4 } from 'uuid';
import AddColorFor from './components/AddColorForm';
import ColorList from './components/ColorList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
    };
  }

  addColor = (title, color) => {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0,
      },
    ];
    this.setState({ colors });
  };

  rateColor = (id, rating) => {
    const colors = this.state.colors.map((color) => (color.id !== id
      ? color
      : {
        ...color,
        rating,
      }));
    this.setState({ colors });
  };

  removeColor = (id) => {
    const colors = this.state.colors.filter(
      (color) => color.id !== id,
    );
    this.setState({ colors });
  };

  render() {
    const { addColor, rateColor, removeColor } = this;
    const { colors } = this.state;

    return (
      <div className="App">
        <header className="App-header">

          <div className="app">
            <AddColorFor onNewColor={addColor} />
            <ColorList
              colors={colors}
              onRate={rateColor}
              onRemove={removeColor}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
