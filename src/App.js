
import './App.css';
import Header from './component/Header/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Page from './component/pages/Page';
import Data from './component/FlashDeal/Data';
import { useState } from 'react';
import Cart from './component/Cart/Cart';
import Sdata from './component/Shop/Shopdata';
import Footer from './component/Footer/Footer';
import Login from './component/Acount/Login';
import Register from './component/Acount/Register';
import Cash from './component/Cash/Cash';
function App() {
  const { productItems } = Data
  const [cartItem, setCartItem] = useState([])
  const {shopItems} = Sdata
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map((item) =>
      (item.id === product.id ?
        {...productExit, qty: productExit.qty+1}: item)))
    } else {
      setCartItem([...cartItem,{...product,qty:1}])
    }
  }
  const decreseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item)=>item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty-1}:item)))
    }
  }
  return (
    <div className="App">
      <Router>
        <Header cartItem={cartItem}></Header>
        <Switch>
            <Route path="/" exact>
              <Page productItems={productItems} addToCart={addToCart} cartItem={cartItem} shopItems={shopItems} />
          </Route>
          <Route path="/cart" exact>
              <Cart cartItem={cartItem} addToCart={addToCart} decreseQty={decreseQty} />
          </Route>
          <Route path="/login" exact>
              <Login/>
          </Route>
          <Route path="/register" exact>
              <Register/>
          </Route>
          <Route path='/cash' exact>
              <Cash/>
          </Route>
        </Switch>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
