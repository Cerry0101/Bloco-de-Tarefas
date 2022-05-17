//importa o react e rfce cria a estrutura, sfc cria componentes.
import React from 'react';
import "./Taks.css";
import {CgClose, CgInfo} from 'react-icons/cg';
import { useNavigate } from "react-router-dom";

//criar as tasks
const TasksItem = ({task, handleTaskClick, handleTaskDeletion}) => {
  const navigate = useNavigate()
  return(
    <div className='task-container' style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
      <div className='task-title' onClick={() => handleTaskClick(task.id)}>
          {task.title}
      </div>

      <div className='buttons-container'>
          <button className='remove-task-button' onClick={() => handleTaskDeletion(task.id)}>
            <CgClose/>
          </button>
          <button className='see-task-details-button'  onClick={() => {
            navigate(`/${task.title}`);
          }} >
            <CgInfo/>
          </button>
      </div>
    </div>
  );
}

export default TasksItem;

