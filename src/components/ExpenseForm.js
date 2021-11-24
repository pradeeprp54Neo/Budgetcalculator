import React from "react";
import {Container,Row,Button,InputGroup,Form,Col} from 'react-bootstrap';
import { MdSend } from "react-icons/md";

const ExpenseForm = ({title,amount,handleTitle,handleAmount,handleSubmit,edit}) => {
  return (
    <Container className="w-25 bg">

   
    <Row>
        <Col md={6}>
    <form onSubmit={handleSubmit} className=" mt-4">
     
        <div className="form-group">
          <label htmlFor="expense">Enter Title</label>
          <input type="text" className="form-control" id="title" name="title" className="control-form"  value={title} onChange={handleTitle}/>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Enter Your Expense Amount</label>
          <input type="number" className="form-control" id="amount" name="amount" className="control-form" value={amount} onChange={handleAmount}/>
        </div>


      <button type="submit" className="btn btn-success">{edit ? "edit" : "submit"}</button>
  
    </form>
   
    
    </Col>
    </Row>
    </Container>
  );
};

export default ExpenseForm;