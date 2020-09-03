import React, { Component } from "react";

class Expense extends Component {
  state = {};
  render() {
    const { amount, description, id } = this.props.expense;
    return (
      <div className="item clearfix" id="expense-0">
        <div className="item__description">{description}</div>
        <div className="right clearfix">
          <div className="item__value">- {amount}</div>
          <div className="item__percentage">21%</div>
          <div className="item__delete">
            <button
              className="item__delete--btn"
              onClick={this.props.handleDelete.bind(this, id)}
            >
              <i className="ion-ios-close-outline"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Expense;
