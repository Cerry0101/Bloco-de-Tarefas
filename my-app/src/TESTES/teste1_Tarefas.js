import React from "react";

//componente para renderizar as taks
const Tarefas = ({ tarefas}) => { //como as tarefas, então dentro do objeto props, coloca direto as tasks.
    console.log(tarefas);
    return(
        <h1>Tasks</h1>
       
    )
}

export default Tarefas;