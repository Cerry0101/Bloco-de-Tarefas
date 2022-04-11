import React from 'react' //importar o react, para que ele reconheça as funções do React.

const App = () => { //criar uma função
     const falabro = "hello world" ; //usando js, basta por as variaveis entre {}
    
    return <h1>{falabro}</h1>;
};

export default App; //exportar o App, para que o index importe.