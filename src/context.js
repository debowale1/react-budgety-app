import React, { Component } from "react";

const context = React.createContext();

export class Provider extends Component {
  state = {
    allData: [
      { id: 1, description: "website design", amount: 500, type: "inc" },
      { id: 2, description: "Cash Gift", amount: 150, type: "inc" },
      { id: 3, description: "Rent", amount: 350, type: "exp" },
      { id: 4, description: "Data Sub", amount: 100, type: "exp" },
    ],
  };
  render() {
    return (
      <context.Provider value={this.state}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export const Consumer = context.Consumer;
