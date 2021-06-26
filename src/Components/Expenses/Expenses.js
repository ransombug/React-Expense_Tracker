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

  return (
    <div>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {items.map((x) => (
        <ExpenseItem
          key={uuid()}
          title={x.title}
          amount={x.amount}
          date={x.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
