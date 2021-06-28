import React from "react";
import uuid from "react-uuid";

import "../../Styles/ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ item }) => {
  // Logic Placed outside JSX for code readability
  if (item.length === 0) {
    return <h4 className="expenses-list__fallback">No Expenses Found !</h4>;
  }

  return (
    <ul className="expenses-list">
      {item.map((x) => (
        <ExpenseItem
          key={uuid()}
          title={x.title}
          amount={x.amount}
          date={x.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
