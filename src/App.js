import React from 'react';
import './components/widgets/NavBar/NavBar';
import Shop from './components/pages/Shop/Shop';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import MyAccount from './components/pages/MyAccount/MyAccount';
import {HashRouter, Switch, Route} from 'react-router-dom';
import ItemPage from './components/pages/ItemPage/ItemPage';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import CartContext from './components/context/CartContext';
import ScrollToTop from './components/widgets/ScrollToTop/ScrollToTop';
import CartContainer from './components/pages/Cart/CartContainer';
import Checkout from './components/pages/Checkout/Checkout';
import Dashboard from './components/pages/Dashboard/Dashboard';
import FirebaseContext from './components/context/FirebaseContext';
import PopUpWishlist from './components/widgets/PopUpWishlist/PopUpWishlist';

function App() {

  return (
    <FirebaseContext>
      <CartContext>      
        <HashRouter>
          <ScrollToTop/>
          <div className="App">
            <Header/>
            <PopUpWishlist/>
            <main>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/tienda" component={Shop}/>
                <Route path="/contacto" component={Contact}/>
                <Route path='/mi-cuenta' exact component={MyAccount}/>
                <Route path='/mi-cuenta/:userId' component={Dashboard}/>
                <Route path="/carro" component={CartContainer}/>
                <Route path="/category/:categoryId" component={Shop}/>
                <Route path="/item/:itemId" component={ItemPage}/>
                <Route path="/checkout" component={Checkout}/>
              </Switch>
            </main>
            <Footer/>
          </div>
        </HashRouter>
      </CartContext>
    </FirebaseContext>
  );
}

export default App;
