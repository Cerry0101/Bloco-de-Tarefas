import React, { useState } from 'react' 
import Tasks from './components/Tasks';
import "./App.css"; 

const App = () => { 
   
     const [tasks, setTasks] = useState([ //state vai ser onde vamos armazenar nossas Tasks <tarefas>
        {
        
            id: '1',
            title: 'Estudar Programação',
            completed: false,
    
        },
        {
            id: '2',
            title: 'Ler Livros',
            completed: true,
        },
        {
            id: '3',
            title: 'Ler Artigos',
            completed: true,
        }

     ]) ; 
    return (
        <div> 
            <div className="container">
                <Tasks tasks={tasks}/>
            </div> 
        </div>
    );
};

export default App;