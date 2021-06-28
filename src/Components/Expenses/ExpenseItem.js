import ExpenseDate from "./ExpenseDate";

import "../../Styles/ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
