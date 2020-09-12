import React, { Component } from "react";
//context
const Context = React.createContext();
//reducers
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_BUDGET":
      return {
        ...state,
        allData: state.allData.filter((data) => data.id !== action.payload),
      };
    case "ADD_BUDGET":
      return {
        ...state,
        allData: [...state.allData, action.payload],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    allData: [
      { id: 1, description: "website design", amount: 500, type: "inc" },
      { id: 2, description: "Cash Gift", amount: 150, type: "inc" },
      { id: 3, description: "Rent", amount: 350, type: "exp" },
      { id: 4, description: "Data Sub", amount: 100, type: "exp" },
      { id: 5, description: "Grocery Shopping", amount: 50, type: "inc" },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
