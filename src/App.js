import React from 'react';
import './App.css';
import CountFunction from './components/CountFunction/CountFunction';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CountClass from './components/CountClass/CountClass';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    
    <div className="App">
       <NavBar />
       {/* <CountFunction />
       <CountClass/> */}
       <ItemListContainer greeting="¡Bienvenido!"/>
       <ItemCount stock="5" initial="1"/>
    </div>
  );
}

export default App;
