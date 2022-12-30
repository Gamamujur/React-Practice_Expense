import React, {useState} from "react";
import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";

function NewExpenses(props) {
  const saveExpense = (enteredExpense) =>{
    const expensedata = {
      ...enteredExpense,
      id: Math.random().toString()
    }
    props.onAddExpense(expensedata)
  }

  const [isEditing,setEdit] = useState(false)

  const starthandler = () => {
    setEdit(true)
  }

  const cancelhandler = () => {
    setEdit(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={starthandler}>Add New Expense</button>}
      {isEditing && <ExpensesForm onSaveExpenseData={saveExpense} oncancel={cancelhandler}/>}
    </div>
  );
}

export default NewExpenses;
