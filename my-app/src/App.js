import React, { useState } from 'react' //importar o react, para que ele reconheça as funções do React.
import "./App.css"; //importar o css para utilizar as suas classes 

const App = () => { //criar uma função
     //const falabro = "hello world" ; //usando js, basta por as variaveis entre {<h1>{falabro}</h1>}
     // let falabro = "hello world" ; //As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente. As variáveis de const não podem ser atualizadas nem declaradas novamente. Todas elas passam por hoisting para o topo de seu escopo.
     const [falabro, setFalabro] = useState('oi bro') //State (estado do componente), É como uma variável que guardamos um valor, porém quando ele é atualizado o componente é renderizado novamente.

    return (
        <div> 
            {
            /*precisa renderizar tudo do componente em uma div 
            somente ou dentro de um fragment <> </>*/
            }

            <div className="container">{falabro}</div> {/*é um container genérico para conteúdo de fluxo, que de certa forma não representa nada. */}
            <button onClick={() => setFalabro("hellooooooooo")}>
            {/* console.log("ois") forma de debugar códigos*/}
            mudar mensagem
            </button>
        </div>
    );
};

export default App; //exportar o App, para que o index importe.