import React, { useState } from "react";
import uuid from "react-uuid";

import "../../Styles/ExpenseItem.css";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((x) => {
    return x.date.getFullYear().toString() === filteredYear;
  });

  // Logic olaced outside JSX for code readability
  let expensesContent = <h4 style={{ color: "white" }}>No Expenses Found !</h4>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((x) => (
      <ExpenseItem
        key={uuid()}
        title={x.title}
        amount={x.amount}
        date={x.date}
      />
    ));
  }

  return (
    <div>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {/* Outputting Conditional content */}
      {expensesContent}
    </div>
  );
};

export default Expenses;
