import React, { useState, useEffect } from 'react';
import './Expenses.css';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    category: '',
    date: ''
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchExpenses();
    fetchCategories();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('/api/expenses');
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newExpense),
      });
      if (response.ok) {
        fetchExpenses();
        setNewExpense({
          description: '',
          amount: '',
          category: '',
          date: ''
        });
      }
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div className="expenses-container">
      <h1>Expenses</h1>
      
      <div className="add-expense-form">
        <h2>Add New Expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="description"
              value={newExpense.description}
              onChange={handleInputChange}
              placeholder="Description"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="amount"
              value={newExpense.amount}
              onChange={handleInputChange}
              placeholder="Amount"
              required
            />
          </div>
          <div className="form-group">
            <select
              name="category"
              value={newExpense.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map(category => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="date"
              name="date"
              value={newExpense.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Add Expense</button>
        </form>
      </div>

      <div className="expenses-list">
        <h2>Recent Expenses</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr key={expense._id}>
                <td>{new Date(expense.date).toLocaleDateString()}</td>
                <td>{expense.description}</td>
                <td>{expense.category.name}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expenses;
