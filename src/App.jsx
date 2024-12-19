import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Expense from './components/expense'
import Chart from './components/chart'

function App() {
  const [total, setTotal] = useState();
  const [max, setMax] = useState();
  const [showGraph, setShowGraph] = useState(false);

  const handleShowGraph = (e) => {
    e.preventDefault();
    setShowGraph(true);
    console.log(total);
    console.log(max);
  };


  const handleSubtract = (e) => {
    e.preventDefault();
    setTotal(total - 10000);
  }

  const handleExpenseAdd = (newExpense) => {
    setTotal((prevTotal) => prevTotal - newExpense.amount);
  }

  const handleExpenseRemove = (expense) => {
    console.log(expense)
    setTotal((prevTotal) => prevTotal + expense);
  }

  return (
    <>
      <h1>Expense Tracker</h1>

      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {!showGraph && <label htmlFor="name">How Much Money?</label>}
        {!showGraph && <input 
          type="number" 
          id="total" 
          name="total" 
          value={total}
          onChange={(e) => {
            setTotal(e.target.value);
            setMax(e.target.value);
          }}
          />}
          {!showGraph && <button onClick={handleShowGraph}>Show Graph</button>}
          {/* {showGraph && <button onClick={handleSubtract}>Subtract $10,000</button>} */}
      </form>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Expense onExpenseAdd={handleExpenseAdd} onExpenseRemove={handleExpenseRemove}/>
        {showGraph && <Chart total={total} max={max} />}
      </div>
    </>
)}

export default App
