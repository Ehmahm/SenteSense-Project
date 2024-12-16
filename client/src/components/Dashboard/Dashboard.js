import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './Dashboard.css';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [monthlyBudget, setMonthlyBudget] = useState(0);

  useEffect(() => {
    // Fetch expenses data from backend
    fetchExpenses();
    fetchBudget();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('/api/expenses');
      const data = await response.json();
      setExpenses(data);
      calculateTotalExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const fetchBudget = async () => {
    try {
      const response = await fetch('/api/budgets/current');
      const data = await response.json();
      setMonthlyBudget(data.amount);
    } catch (error) {
      console.error('Error fetching budget:', error);
    }
  };

  const calculateTotalExpenses = (expenseData) => {
    const total = expenseData.reduce((acc, expense) => acc + expense.amount, 0);
    setTotalExpenses(total);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Total Expenses</h3>
          <p>${totalExpenses.toFixed(2)}</p>
        </div>
        <div className="summary-card">
          <h3>Monthly Budget</h3>
          <p>${monthlyBudget.toFixed(2)}</p>
        </div>
        <div className="summary-card">
          <h3>Remaining Budget</h3>
          <p>${(monthlyBudget - totalExpenses).toFixed(2)}</p>
        </div>
      </div>

      <div className="expense-chart">
        <h2>Expense Trend</h2>
        {/* Chart component will go here */}
      </div>

      <div className="recent-expenses">
        <h2>Recent Expenses</h2>
        <div className="expense-list">
          {expenses.slice(0, 5).map((expense) => (
            <div key={expense._id} className="expense-item">
              <span>{expense.description}</span>
              <span>${expense.amount.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
