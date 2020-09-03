import React from "react";

const Income = (props) => {
  const { amount, description, id } = props.income;
  return (
    <div className="item clearfix">
      <div className="item__description">{description}</div>
      <div className="right clearfix">
        <div className="item__value">+ {amount}</div>
        <div className="item__delete">
          <button
            className="item__delete--btn"
            onClick={props.handleDelete.bind(this, id)}
          >
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Income;
