import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import '../../stylesheets/AddColorForm.scss';

export class AddColorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this._title = createRef();
    this._color = createRef();
  }

  submit = (e) => {
    const _title = this._title.current.value;
    const _color = this._color.current.value;
    e.preventDefault();
    this.props.onNewColor(_title, _color);
    this._title.current.value = '';
    this._color.current.value = '#000000';
    this._title.current.focus();
  };

  render() {
    return (
      <>
        <form className="add-color" onSubmit={this.submit}>
          <input
            ref={this._title}
            id="_title"
            type="text"
            placeholder="color title..."
            required
          />
          <input
            ref={this._color}
            id="_color"
            type="color"
            required
          />
          <button type="submit">ADD</button>
        </form>
      </>
    );
  }
}

export default AddColorForm;

AddColorForm.propTypes = {
  onNewColor: PropTypes.func,
};

AddColorForm.defaultProps = {
  onNewColor: (f) => f,
};
