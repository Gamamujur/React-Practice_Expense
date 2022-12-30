import React, {useState} from "react";
import "./ExpensesForm.css";

function ExpensesForm(props) {
  const [enteredTitle,setTitle] = useState('')
  const [enteredAmount,setAmount] = useState('')
  const [enteredDate,setDate] = useState('')

  function titleinput(event){
    setTitle(event.target.value)
  }

  function amountinput(event){
    setAmount(event.target.value)
  }

  function dateinput(event){
    setDate(event.target.value)
  }

  function submithandler(event){
    event.preventDefault()

    const expenseData = {
      title : enteredTitle,
      amount : enteredAmount,
      date : new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData)
    setTitle('')
    setAmount('')
    setDate('')
  }

  return (
    <form onSubmit={submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" onChange={titleinput} value={enteredTitle}></input>
        </div>

        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountinput} value={enteredAmount}></input>
        </div>

        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-12" onChange={dateinput} value={enteredDate}></input>
        </div>
      </div>

      <div className="new-expense__actions">
          <button type="button" onClick={props.oncancel}>Cancel</button>
          <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpensesForm;
