import logo from './logo.svg';
import './App.css';

function App() {
  const state = {
    receipt1: Receipts[0],
    receipt2: Receipts[1],
    receipt3: Receipts[2] 
  }
  
  return (
    <div classname="App">
      <h1>Korilla Restaurant Receipts</h1>
      <hr/>
      <Receipt receiptOne={state.receipt1} />
      <Receipt receiptTwo={state.receipt2} />
      <Receipt receiptThree={state.receipt3} />
    </div> 
  );
}

export default App;
