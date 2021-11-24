import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
const ExpenseItem = ({
  expense: { id, title, amount },handleDelete,handleEdit}) => {

  return (
 
    <div className="Container">
     
    <div className="item">

      <div className="info pt-2">
        <span className="expense">{title} </span>&nbsp;&nbsp;
        <span className="amount">{amount}</span>&nbsp;&nbsp;
         <button className="edit-btn" aria-label="edit button" onClick={() => handleEdit(id)} > <MdEdit /></button>&nbsp;&nbsp;
        <button className="clear-btn" aria-label="delete button" onClick={() => handleDelete(id)}>  <MdDelete />  </button>
        </div>
    </div>
    </div>
  
  );
};

export default ExpenseItem;
