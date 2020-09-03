import React, { Component } from "react";

class AddBudget extends Component {
  state = {
    type: "",
    description: "",
    value: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handleClick = () => {
  //   console.log("got here");
  // };

  render() {
    const { type, description, value } = this.state;
    return (
      <div className="add">
        <div className="add__container">
          <select
            value={type}
            onChange={this.handleChange}
            className="add__type"
            name="type"
          >
            <option value="">--Select--</option>
            <option value="inc">+</option>
            <option value="exp">-</option>
          </select>
          <input
            type="text"
            className="add__description"
            placeholder="Add description"
            value={description}
            name="description"
            onChange={this.handleChange}
          />
          <input
            type="number"
            className="add__value"
            placeholder="Value"
            value={value}
            name="value"
            onChange={this.handleChange}
          />

          <button
            className="add__btn"
            onClick={this.props.handleClick.bind(
              this,
              type,
              description,
              value
            )}
          >
            <i className="ion-ios-checkmark-outline"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default AddBudget;
