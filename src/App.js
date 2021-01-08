import React from 'react';
import './components/widgets/NavBar/NavBar';
import Shop from './components/pages/Shop/Shop';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Cart from './components/pages/Cart/Cart';
import MyAccount from './components/pages/MyAccount/MyAccount';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemPage from './components/pages/ItemPage/ItemPage';
import Wishlist from './components/pages/Wishlist/Wishlist';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <main>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tienda" component={Shop}/>
            <Route path="/nosotros" component={About}/>
            <Route path="/contacto" component={Contact}/>
            <Route path='/mi-cuenta' component={MyAccount}/>
            <Route path="/carro" component={Cart}/>
            <Route path="/mi-cuenta/wishlist" component={Wishlist}/>
            <Route path="/category/:categoryId" component={Shop}/>
            <Route path="/item/:itemId" component={ItemPage}/>
          </Switch>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
