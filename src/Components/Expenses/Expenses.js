import React, { useState } from "react";

import "../../Styles/ExpenseItem.css";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((x) => {
    return x.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {/* Outputting Conditional content */}
      <ExpensesList item={filteredExpenses} />
    </div>
  );
};

export default Expenses;
