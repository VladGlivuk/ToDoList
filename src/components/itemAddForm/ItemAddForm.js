import React, { Component } from "react";
import "./ItemAddForm.css";

export default class itemAddForm extends Component {

  state = {
    label: ""
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    this.setState({ label: '' });
    const cb = this.props.onItemAdded || (() => {});
    cb(label);
  };

  render() {
    return (
      <form className="itemAddForm d-flex"
            onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control newToDoLabel"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={this.state.label}
        />
        <button type="submit"
          className="btn btn-outline-secondary"
        >
          Add
        </button>
      </form>
    );
  }
}
