import React, { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Budget from "./Budget"


const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
  
  const initialbudget = localStorage.getItem("budget")
  ? JSON.parse(localStorage.getItem("budget"))
  : [];

  export default function Home()  {

  const [expenses, setExpenses] = useState(initialExpenses);

  const [title, setTitle] = useState("");

  const [amount, setAmount] = useState("");

  // const [alert, setAlert] = useState({ show: false });

  const [edit, setEdit] = useState(false);

  const [id, setId] = useState(0);

  const [Bamount, setBamount] = useState("");
  const [budget, setBudget] = useState(initialbudget);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("budget", JSON.stringify(budget));
    }, [expenses,budget]);

  
  const handleTitle = e => {
    setTitle(e.target.value);
  };

  const handleAmount = e => {
    const amount = e.target.value;
    if (amount === "") {
      setAmount(amount);
    } else {
      setAmount(parseInt(amount));
    }
  };
  const handleBamount = e => {
    let Bamount = e.target.value;
    if (Bamount >500) {
      setBamount(Bamount);
    } else {
      setBamount(parseInt(Bamount));
    }
  };

  // const handleAlert = ({ type, text }) => {
  //   setAlert({ show: true, type, text });
  //   setTimeout(() => {
  //     setAlert({ show: false });
  //   }, 7000);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    if (title !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, id,title, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        const singleExpense = {  id:Math.random(),title, amount };

        setExpenses([...expenses, singleExpense]);
        // handleAlert({ type: "success", text: "item added" });
      }

      setTitle("");
    
      setAmount("");
    }
  };

  const handleDelete = id => {
    var newData=[...expenses]
    let tempExpenses = newData.filter(item => item.id !== id);
    setExpenses(tempExpenses);

  };
//   const delete1 = (id)=> {
//     var newData = [...expenses]
//     var todo = newData.filter((exp, i) => {
//         return i !== id;
//     })
//     setexpenses(todo)
// }

  const clearItems = () => {
    setExpenses([]);
  };
  // handle edit
  const handleEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let { title, amount } = expense;
    setTitle(title);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };
  const handleSubmitBudget = e => {
    e.preventDefault();
    if(Bamount >500){
      console.log(Bamount)
      setBudget(parseInt(Bamount));
    }
    else{
      alert("value is less than 500")
    }
    
  };
  return (
    <>
      {/* {alert.show && <Alert type={alert.type} text={alert.text} />} */}
      <Budget Bamount={Bamount}
          handleBamount={handleBamount}
          handleSubmitBudget={handleSubmitBudget} />
        <br /><hr />
      <h1 className="center">Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          handleSubmit={handleSubmit}
        title={title}
          handleTitle={handleTitle}
          amount={amount}
          handleAmount={handleAmount}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      {/* <h1>
        total spending :
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1> */}

     <div>
         <table border="1">
             <thead className="bg-2">
                 <th>Budget</th>
                 <th>Expenses</th>
                 <th>Remianing Bal</th>
             </thead>
             <tbody>
                 <td>{budget}</td>
                 <td><span className="total">{expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span></td>
        <td>
              {budget - expenses.reduce((acc, curr) => {
                    return (acc += curr.amount);
                    }, 0)}
            </td>
             </tbody>
         </table>
     </div>
    </>
  );
}

