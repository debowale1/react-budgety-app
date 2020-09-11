import React, { Component } from "react";
import Top from "./components/Top";
import AddBudget from "./components/AddBudget";
import IncomeExpenseContainer from "./components/IncomeExpenseContainer";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { Provider } from "./context";

class App extends Component {
  //handle submit
  // handleClick = (type, description, value) => {
  //   console.log(type, description, value);

  //   //create new budget item
  //   const newItem = {
  //     id: uuidv4(),
  //     description,
  //     amount: +value,
  //     type,
  //   };
  //   //add the new Item to the state
  //   this.setState({ allData: [...this.state.allData, newItem] });
  //   //clear form state
  // };
  //delete item
  // handleDelete = (id) => {
  //   this.setState({
  //     allData: this.state.allData.filter((item) => item.id !== id),
  //   });
  // };
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/">
                <Top />
                <div className="bottom">
                  <AddBudget handleClick={this.handleClick} />
                  <div className="container clearfix">
                    <IncomeExpenseContainer handleDelete={this.handleDelete} />
                  </div>
                </div>
              </Route>
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
