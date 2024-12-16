import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Sente Sense</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/dashboard" className="nav-item">Dashboard</Link>
        <Link to="/expenses" className="nav-item">Expenses</Link>
        <Link to="/budgets" className="nav-item">Budgets</Link>
        <Link to="/reports" className="nav-item">Reports</Link>
        <Link to="/categories" className="nav-item">Categories</Link>
      </div>
      <div className="navbar-user">
        <Link to="/profile" className="nav-item">Profile</Link>
        <button className="logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
