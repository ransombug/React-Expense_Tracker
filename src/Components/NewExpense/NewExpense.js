import React from "react";

import ExpenseForm from "./ExpenseForm";

import "../../Styles/NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  // Here 'enteredExpenseData' will contain entered form data.
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // Pass the data as argument into 'App' component.
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
