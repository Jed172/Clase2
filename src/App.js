import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import MercadoLibre from './components/MercadoLibre/Mercadolibre';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (    
    <div className="App">
       <NavBar />
       <ItemListContainer greeting="¡Bienvenido!"/>
      {/* <MercadoLibre/> */}
      <ItemDetailContainer id="1"/>
    </div>
  );
}

export default App;
