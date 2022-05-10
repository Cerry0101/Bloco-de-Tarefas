import React, { useState } from 'react';
import "./AddTask.css"
import Button from './Button';

const AddTaks = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (b) => {
        //console.log(b.target.value);
        setInputData(b.target.value);
    };

    const handleAddTaskClick = () =>{
        handleTaskAddition(inputData)
    }
    return(
        <div className="add-task-container">
            <input 
            value={inputData}
            onChange={handleInputChange}
            className='add-task-input' 
            type="text" />;
            <div className="add-task-button-container">
                 <Button onClick={handleAddTaskClick}>Adicionar</Button>  
            </div>
    </div>
    );
   
     
};
 
export default AddTaks;