import React from 'react';
import './components/NavBar/NavBar'
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer/>
     <ItemDetailContainer id={'123'}/>
    </div>
  );
}

export default App;
