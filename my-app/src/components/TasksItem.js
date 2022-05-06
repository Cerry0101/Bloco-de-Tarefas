//imr importa o react e rfce cria a estrutura, sfc cria componentes.
import React from 'react'

//criar as tasks
const TasksItem = ({task}) => {
  return (
    <h1>{task.title}</h1>
  )
}

export default TasksItem;

