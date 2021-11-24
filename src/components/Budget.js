import React from 'react'
const Budget = ({
    Bamount,
    handleBamount,
    handleSubmitBudget,
   
  }) => {

    return (
        <div>
            <div className="Container mt-5 pt-3">
                <form onSubmit={handleSubmitBudget} className="bg-light  col-10 container pt-4">

                    <div className="form-group">

                        <label htmlFor="expense">Please Enter Your Budget</label>


                        <input type="text" className="form-control" id="charge" name="charge" placeholder="Enter Amount" value={Bamount} onChange={handleBamount} />

                    </div>
                   
                    <button type="submit"   className=" btn btn-outline-dark btn-lg">
                        
                    SUBMIT
                    </button>

                </form>
            </div>
        </div>
    )
};
export default Budget;