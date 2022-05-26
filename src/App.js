import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (    
    <div className="App">
       <NavBar />
       <ItemListContainer greeting="¡Bienvenido!"/>
    </div>
  );
}

export default App;
