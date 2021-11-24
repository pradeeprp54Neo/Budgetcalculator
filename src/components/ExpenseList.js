import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      <div className="list pt-2">
        {expenses.map(expense => {
          return (
            <ExpenseItem Col md={6}
           
               key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>clear expenses<MdDelete className="btn-icon" /> </button>
      )}
    </>
  );
};

export default ExpenseList;