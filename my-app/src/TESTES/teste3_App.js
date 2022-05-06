//USANDO O STATE
import React, { useState } from 'react' //importar O useState
import "./App.css"; 

const App = () => { 

    // let message = "hello world" ; //As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente. As variáveis de const não podem ser atualizadas nem declaradas novamente. Todas elas passam por hoisting para o topo de seu escopo.
    const [message, setMessage] = useState('oi bro') //State (estado do componente), É como uma variável que guardamos um valor, porém quando ele é atualizado o componente é renderizado novamente.
 
   return (
       <> 
        <div className="container">{message}</div> 

        <button onClick={() => setMessage("hellooooooooo")}> {/*oque é um button? o onclick? oque é o setMessage? */}
            {/* console.log("ois") forma de debugar códigos*/}
            mudar mensagem
        </button>
       </>
   );
};
 
export default App; //exportar o App, para que o index importe.