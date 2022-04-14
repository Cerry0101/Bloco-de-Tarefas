import React from "react";
import TasksItem from "./TasksItem";

//renderizar as taks
const Tasks = ({ tasks}) => {
   
    return(
        <>
        {tasks.map(task => (
            <TasksItem task={task} />
        
        ))} 
        </>
    )
}

export default Tasks;