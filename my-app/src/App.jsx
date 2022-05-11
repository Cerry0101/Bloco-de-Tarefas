import React, { useState } from 'react' 
import Tarefas from './components/Tarefas';
import "./App.css"; 
import AddTaks from './components/AddTask.jsx';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom'

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

    const handleTaskDeletion = (taskId) => {
		const newTasks = tarefas.filter((task) => task.id !== taskId);

		setTasks(newTasks);
	};

	const handleTaskClick = (taskId) => {
		const newTasks = tarefas.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };

			return task;
		});

		setTasks(newTasks);
	};
     const handleTaskAddition = (taskTitle) => {
        const newTasks = [...tarefas, {
            title: taskTitle,
            id: uuidv4(),
            completed: false,
        }]    
        setTasks(newTasks);
     }
    return (
        <Router> 
            <div className="container">
                <Header/>
                
                    <AddTaks handleTaskAddition={handleTaskAddition} />
                    <Tarefas 
                        handleTaskDeletion={handleTaskDeletion}
                        handleTaskClick={handleTaskClick}
                        tarefas={tarefas}/> {/*Uso de props */}
            </div> 
        </Router>
    );
};

export default App;