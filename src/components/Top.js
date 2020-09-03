import React, { Component } from "react";

class Top extends Component {
  state = {};
  render() {
    const {
      totalIncome,
      totalExpense,
      budgetValue,
      expensePercentage,
    } = this.props;
    return (
      <div className="top">
        <div className="budget">
          <div className="budget__title">
            Available Budget in{" "}
            <span className="budget__title--month">%Month%</span>:
          </div>

          <div className="budget__value">
            {" "}
            {budgetValue > 0
              ? `+ ${budgetValue.toFixed(2)}`
              : budgetValue.toFixed(2)}
          </div>

          <div className="budget__income clearfix">
            <div className="budget__income--text">Income</div>
            <div className="right">
              <div className="budget__income--value">
                + {totalIncome.toFixed(2)}
              </div>
              <div className="budget__income--percentage">&nbsp;</div>
            </div>
          </div>

          <div className="budget__expenses clearfix">
            <div className="budget__expenses--text">Expenses</div>
            <div className="right clearfix">
              <div className="budget__expenses--value">
                - {totalExpense.toFixed(2)}
              </div>
              <div className="budget__expenses--percentage">
                {expensePercentage > 0
                  ? `${Math.round(expensePercentage)}%`
                  : "--"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
