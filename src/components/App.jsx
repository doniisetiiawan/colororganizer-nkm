/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { v4 } from 'uuid';
import AddColorFor from './AddColorForm';
import ColorList from './ColorList';

export class App extends Component {
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
      <div className="app">
        <AddColorFor onNewColor={addColor} />
        <ColorList
          colors={colors}
          onRate={rateColor}
          onRemove={removeColor}
        />
      </div>
    );
  }
}

export default App;
