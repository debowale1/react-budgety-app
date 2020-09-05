import React from "react";

const Top = (props) => {
  const { totalIncome, totalExpense, budgetValue, expensePercentage } = props;

  const getExpensePercentage = (num, total) => {
    if (isFinite(num / total)) {
      return `${Math.round((num / total) * 100)}%`;
    } else {
      return "--";
    }
  };

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">{getMonth()}</span>:
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
              {getExpensePercentage(totalExpense, totalIncome)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getMonth = () => {
  const date = new Date();
  let monthName;
  const month = date.getMonth();

  switch (month) {
    case 0:
      monthName = "January";
      break;
    case 1:
      monthName = "February";
      break;
    case 2:
      monthName = "March";
      break;
    case 3:
      monthName = "April";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "July";
      break;
    case 7:
      monthName = "August";
      break;
    case 8:
      monthName = "September";
      break;
    case 9:
      monthName = "October";
      break;
    case 10:
      monthName = "November";
      break;
    default:
      monthName = "December";
  }
  return monthName;
};

export default Top;
