import React, { useState } from 'react' 
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Tarefas from './components/Tarefas';
import AddTask from './components/AddTask.jsx';

import "./App.css"; 
import TaskDetails from './components/TaskDetails';


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
        <BrowserRouter>
            <div className="container">
                <Header />
                <Routes>
                        <Route
                            path="/"
                            exact
                            element={
                            <>
                                <AddTask handleTaskAddition={handleTaskAddition} />
                                <Tarefas tarefas={tarefas} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
                            </>
                            }
                        />
                        <Route path="/:taskTitle" exact element={<TaskDetails/>} />
                        <Route path="*" element={<sErrorPage/>} />
                </Routes>
            </div>
    </BrowserRouter>
  
    );
};

export default App;