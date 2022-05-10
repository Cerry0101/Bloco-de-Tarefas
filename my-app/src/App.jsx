import React, { useState } from 'react' 
import Tarefas from './components/Tarefas';
import "./App.css"; 
import AddTaks from './components/AddTask.jsx';
import TasksItem from './components/TasksItem';

const App = () => { 
   
     const [tarefas, setTasks] = useState([ //state vai ser onde vamos armazenar nossas Tasks <tarefas>
        {
        
            id: '1',
            title: 'Estudar Programação',
            completed: false,
    
        },
        {
            id: '2',
            title: 'Ler Livros',
            completed: true,
        }

     ]); 

     const handleTaskAddition = (taskTitle) => {
        const newTasks = [...tarefas, {
            title: taskTitle,
            id: Math.random(10),
            completed: false,
        }]    
        setTasks(newTasks);
     }
    return (
        <div> 
            <div className="container">
                <AddTaks handleTaskAddition={handleTaskAddition} />
                <Tarefas tarefas={tarefas}/> {/*Uso de props */}
            </div> 
        </div>
    );
};

export default App;