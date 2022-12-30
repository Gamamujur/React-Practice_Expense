import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
  const [selectedyear, setyear] = useState("2020");

  const filterchange = (selectyear) => {
    setyear(selectyear);
  };

  const filteryear = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedyear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedyear} onchange={filterchange} />
        <ExpensesChart expense={filteryear}/>
        <ExpensesList items={filteryear} />
      </Card>
    </div>
  );
}

export default Expenses;
