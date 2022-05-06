import React, { useState } from 'react' 
import Tarefas from './components/Tarefas';
import "./App.css"; 

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
                <Tarefas tarefas={tarefas}/> {/*Uso de props */}
            </div> 
        </div>
    );
};

export default App;