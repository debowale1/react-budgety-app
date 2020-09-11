import React from "react";

const Expense = (props) => {
  const { amount, description, id } = props.expense;
  const { totalIncome } = props;
  // console.log(typeof amount);

  const getItemPercentage = (num) => {
    if (isFinite(num / totalIncome)) {
      return `${Math.round((Math.abs(num) / totalIncome) * 100)}%`;
    } else {
      return "--";
    }
  };
  return (
    <div className="item clearfix" id="expense-0">
      <div className="item__description">{description}</div>
      <div className="right clearfix">
        <div className="item__value">- {amount}</div>
        <div className="item__percentage">{getItemPercentage(amount)}</div>
        <div className="item__delete">
          <button
            className="item__delete--btn"
            // onClick={props.handleDelete.bind(this, id)}
          >
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expense;
