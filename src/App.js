import React from 'react';
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import Shop from './components/Pages/Shop/Shop';
import ItemListContainer from './components/Pages/ItemListContainer/ItemListContainer';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Cart from './components/Pages/Cart/Cart';
import MyAccount from './components/Pages/MyAccount/MyAccount';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import Wishlist from './components/Pages/Wishlist/Wishlist';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/tienda" component={Shop}/>
          <Route path="/nosotros" component={About}/>
          <Route path="/contacto" component={Contact}/>
          <Route path='/mi-cuenta' component={MyAccount}/>
          <Route path="/carro" component={Cart}/>
          <Route path="/mi-cuenta/wishlist" component={Wishlist}/>
          <Route path="/category/:categoryId" component={ItemListContainer}/>
          <Route path="/item/:itemId" component={ItemDetailContainer}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
