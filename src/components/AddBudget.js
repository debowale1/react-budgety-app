import React, { Component } from "react";
import { Consumer } from "../context";
import InputGroup from "./InputGroup";
import { v4 as uuidv4 } from "uuid";

class AddBudget extends Component {
  state = {
    type: "",
    description: "",
    amount: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddBudget = (type, description, amount, dispatch) => {
    const newBudget = {
      id: uuidv4(),
      description,
      amount: +amount,
      type,
    };

    dispatch({ type: "ADD_BUDGET", payload: newBudget });

    //clear fields

    this.setState({
      type: "",
      description: "",
      amount: "",
    });
  };

  render() {
    const { type, description, amount } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
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
                <InputGroup
                  type="text"
                  placeholder="Add description"
                  className="add__description"
                  value={description}
                  name="description"
                  onChange={this.handleChange}
                />
                <InputGroup
                  type="number"
                  className="add__value"
                  placeholder="Value"
                  value={amount}
                  name="amount"
                  onChange={this.handleChange}
                />
                <button
                  className="add__btn"
                  onClick={this.handleAddBudget.bind(
                    this,
                    type,
                    description,
                    amount,
                    dispatch
                  )}
                >
                  <i className="ion-ios-checkmark-outline"></i>
                </button>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddBudget;
