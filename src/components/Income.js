import React from "react";
import { Consumer } from "../context";

const Income = (props) => {
  //handle income delete
  const handleDelete = (id, dispatch) => {
    dispatch({ type: "DELETE_BUDGET", payload: id });
  };

  const { amount, description, id } = props.income;
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <div className="item clearfix">
            <div className="item__description">{description}</div>
            <div className="right clearfix">
              <div className="item__value">+ {amount}</div>
              <div className="item__delete">
                <button
                  className="item__delete--btn"
                  onClick={handleDelete.bind(this, id, dispatch)}
                >
                  <i className="ion-ios-close-outline"></i>
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Income;
