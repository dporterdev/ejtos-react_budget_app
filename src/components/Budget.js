import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, total } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);


        if(newBudget < total) {
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget("")
            return;
    }
        }
    return (

<div className='alert alert-secondary'>
<span>Budget: £{newBudget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>

    );

    
};



export default Budget;
