import React, { Component } from "react";
import Income from "./Income";
import Expense from "./Expense";

class IncomeExpenseContainer extends Component {
  state = {};
  render() {
    const { incomes, expenses } = this.props;
    return (
      <React.Fragment>
        <div className="income">
          <h2 className="icome__title">Income</h2>
          <div className="income__list">
            {incomes.map((income) => (
              <Income
                key={income.id}
                income={income}
                handleDelete={this.props.handleDelete}
              />
            ))}
          </div>
        </div>

        <div className="expenses">
          <h2 className="expenses__title">Expenses</h2>
          <div className="expenses__list">
            {expenses.map((expense) => (
              <Expense
                key={expense.id}
                expense={expense}
                handleDelete={this.props.handleDelete}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IncomeExpenseContainer;
