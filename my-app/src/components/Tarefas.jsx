import React from "react";
import TasksItem from "./TasksItem";

//componente para renderizar as taks
const Tarefas = ({ tarefas, handleTaskClick, handleTaskDeletion}) => { //como as tarefas, então dentro do objeto props, coloca direto as tasks.
    return(
        <>
        {tarefas.map(task => ( //para cada task ele renderiza uma task, ultilizando JS.
            <TasksItem 
            key={task.id}
            task={task} 
            handleTaskClick={handleTaskClick} 
            handleTaskDeletion={handleTaskDeletion}/>
        ))} 
        </>
    )
}

export default Tarefas;