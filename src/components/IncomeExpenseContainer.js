import React from "react";
import Income from "./Income";
import Expense from "./Expense";
import { Consumer } from "../context";

const IncomeExpenseContainer = () => {
  return (
    <Consumer>
      {(value) => {
        const { allData } = value;

        const incomes = allData.filter((item) => item.type === "inc");
        const expenses = allData.filter((item) => item.type === "exp");
        //calculate totals
        const totalIncome = incomes.reduce((acc, cur) => acc + cur.amount, 0);
        // const totalExpense = expenses.reduce((acc, cur) => acc + cur.amount, 0);
        return (
          <React.Fragment>
            <div className="income">
              <h2 className="icome__title">Income</h2>
              <div className="income__list">
                {incomes.map((income) => (
                  <Income
                    key={income.id}
                    income={income}
                    // handleDelete={props.handleDelete}
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
                    totalIncome={totalIncome}
                    // handleDelete={props.handleDelete}
                  />
                ))}
              </div>
            </div>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default IncomeExpenseContainer;
