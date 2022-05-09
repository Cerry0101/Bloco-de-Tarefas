import React from "react";
import TasksItem from "./TasksItem";

//componente para renderizar as taks
const Tarefas = ({ tarefas}) => { //como as tarefas, então dentro do objeto props, coloca direto as tasks.
    return(
        <>
        {tarefas.map(task => ( //para cada task ele renderiza uma task, ultilizando JS.
            <TasksItem task={task} />
        ))} 
        </>
    )
}

export default Tarefas;