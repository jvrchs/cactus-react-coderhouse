import React from 'react';
import './components/NavBar/NavBar'
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer/>
    </div>
  );
}

export default App;
