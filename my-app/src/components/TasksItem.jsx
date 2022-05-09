//importa o react e rfce cria a estrutura, sfc cria componentes.
import React from 'react';
import "./Taks.css";

//criar as tasks
const TasksItem = ({task}) => {
  return <div className='task-container'>
    {task.title}
  </div>
}

export default TasksItem;

