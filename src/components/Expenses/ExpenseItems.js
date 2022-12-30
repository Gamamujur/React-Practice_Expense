import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItems(props) {
  const [title, settitle] = useState(props.title);

  const clickhandler = () => {
    settitle("Baru na");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickhandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItems;
