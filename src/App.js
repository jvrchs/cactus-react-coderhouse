import React from 'react';
import './components/widgets/NavBar/NavBar';
import Shop from './components/pages/Shop/Shop';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import MyAccount from './components/pages/MyAccount/MyAccount';
import {HashRouter, Switch, Route} from 'react-router-dom';
import ItemPage from './components/pages/ItemPage/ItemPage';
import Wishlist from './components/pages/Wishlist/Wishlist';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import CartContext from './components/context/CartContext';
import ScrollToTop from './components/widgets/ScrollToTop/ScrollToTop';
import CartContainer from './components/pages/Cart/CartContainer';

function App() {

  return (
    <CartContext>      
      <HashRouter>
        <ScrollToTop/>
        <div className="App">
          <Header/>
          <main>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/tienda" component={Shop}/>
              <Route path="/nosotros" component={About}/>
              <Route path="/contacto" component={Contact}/>
              <Route path='/mi-cuenta' component={MyAccount}/>
              <Route path="/carro" component={CartContainer}/>
              <Route path="/mi-cuenta/wishlist" component={Wishlist}/>
              <Route path="/category/:categoryId" component={Shop}/>
              <Route path="/item/:itemId" component={ItemPage}/>
            </Switch>
          </main>
          <Footer/>
        </div>
      </HashRouter>
    </CartContext>
  );
}

export default App;
