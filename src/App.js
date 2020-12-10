import React from 'react';
import './components/NavBar/NavBar'
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting="Bienvenido/a :D"/>
    </div>
  );
}

export default App;
