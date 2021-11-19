import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ApiCrud from './components/ApiCrud';
import AplicacionCrudApp from "./components/AplicacionCrudApp" ;



function App() {
  return (
    <div>
        <div className="App">
          <h1 className="titulo">Aplicacion con React</h1>

          <ApiCrud/>
                                                                                                                  
          {/* <AplicacionCrudApp/> */}

          
        </div>
    </div>
  );
}

export default App;
