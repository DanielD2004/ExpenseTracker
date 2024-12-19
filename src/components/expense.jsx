
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Expense = ({ onExpenseAdd, onExpenseRemove }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState();
  const [expenses, setExpenses] = useState([]);
  const [currentExpense, setCurrentExpense] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !amount.trim()) {
        alert('Expense name and amount are required');
    }
    else{
      const newExpense = { name, amount: parseFloat(amount).toFixed(2)};
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
      setName(''); 
      setAmount('');
      onExpenseAdd(newExpense);
    }
  };

  const removeExpense = (index) => {
    const amount = expenses[index].amount;
    onExpenseRemove(amount);
    setExpenses((prevExpenses) => prevExpenses.filter((val, i) => i !== index));
  }

  return (
    <div style={{ padding: '20px', width: '400px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <label style={{ marginBottom: '5px' }}>Expense Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Expense Name"
          style={{ marginBottom: '50px', padding: '8px' }}
          required
        />

        <label style={{ marginBottom: '5px' }}>Amount:</label>
        <input
          type="decimal" 
          min = "0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          step="1"
          style={{ marginBottom: '10px', padding: '8px' }}
          required
        />

        <button type="submit" style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
          Add Expense
        </button>
      </form>

      {expenses.length != 0 && <h2 style={{ marginTop: '20px' }}>Expenses:</h2>}
      <ol style={{ padding: 0, listStyleType: 'integer' }}>
        {expenses.map((expense, index) => (
            <li key={index} style={{ marginBottom: '10px', padding: '8px' }}>
            <button onClick={() => removeExpense(index)} style={{ border: "1px solid grey"}}>
                <strong>{expense.name}</strong> - ${expense.amount}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

Expense.propTypes = {
    onExpenseAdd: PropTypes.func.isRequired,
    onExpenseRemove: PropTypes.func.isRequired  // onExpenseAdd should be a function and is required
  };

export default Expense;
