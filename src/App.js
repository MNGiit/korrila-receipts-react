import {useState} from 'react';
import './App.css';
import Receipts from './models/receipts';
import Receipt from './components/Receipt';
import ShoppingCart from './components/ShoppingCart';
import Button from './components/Button';
import buttons from './models/buttons';

// eslint-disable-next-line
function App() {
  const state = {
    receipt1: Receipts[0],
    receipt2: Receipts[1],
    receipt3: Receipts[2] 
  }

  const [cartCount , setCartCount] = useState(0);

  const addToCart = () => {
    console.log("Current count:", cartCount);
    setCartCount(cartCount+1);
  }

  const subtractFromCart = () => {
    console.log("Current count:", cartCount);
    if(cartCount > 0) setCartCount(cartCount-1);
  }
  
  return (
    <div classname="App">
      <h1>Korilla Restaurant Receipts</h1>
      <hr/>
      <Receipt receiptOne={state.receipt1} />
      <Button changeAmount={addToCart} buttons={buttons.add} />
      <Button changeAmount={subtractFromCart} buttons={buttons.remove} />
      {/* <Receipt receiptTwo={state.receipt2} />
      <Receipt receiptThree={state.receipt3} /> */}
      <ShoppingCart itemOne={state.item1} count={cartCount}/>
      <ShoppingCart itemOne={state.item1} />
      <ShoppingCart itemOne={state.item1} />
    </div> 
  );
}

export default App;
