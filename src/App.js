import React from "react";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import ExpenseForm from "./Components/NewExpense/ExpenseForm";

import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Hand Sanitizer",
      amount: 150,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "Iphone", amount: 55000, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Medicines",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
