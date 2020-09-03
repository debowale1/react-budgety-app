import React, { Component } from "react";
import Top from "./components/Top";
import AddBudget from "./components/AddBudget";
import "./App.css";

class App extends Component {
  state = {
    allData: [
      { id: 1, description: "website design", amount: 500, type: "inc" },
      { id: 2, description: "Cash Gift", amount: 150, type: "inc" },
      { id: 3, description: "Rent", amount: 350, type: "exp" },
      { id: 4, description: "Data Sub", amount: 100, type: "exp" },
    ],
  };

  generateRandomID = () => {
    return Math.floor(Math.random() * 1000000);
  };

  //handle submit
  handleClick = (type, description, value) => {
    console.log(type, description, value);

    //create new budget item
    const newItem = {
      id: this.generateRandomID(),
      description,
      amount: +value,
      type,
    };
    //add the new Item to the state
    this.setState({ allData: [...this.state.allData, newItem] });
  };
  render() {
    const { allData } = this.state;
    const incomes = allData.filter((item) => item.type === "inc");
    const expenses = allData.filter((item) => item.type === "exp");
    //calculate totals
    const totalIncome = incomes.reduce((acc, cur) => acc + cur.amount, 0);
    const totalExpense = expenses.reduce((acc, cur) => acc + cur.amount, 0);
    //budget value
    const budgetValue = totalIncome - totalExpense;
    //calculate expense %
    const expensePercentage = (totalExpense / totalIncome) * 100;
    return (
      <div className="App">
        <Top
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          budgetValue={budgetValue}
          expensePercentage={expensePercentage}
        />
        <div className="bottom">
          <AddBudget handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
