import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaBell, FaWallet, FaChartPie } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Sente Sense</h1>
          <p className="hero-subtitle">Smart Expense Tracking for Smart People</p>
          <div className="auth-buttons">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-secondary">Create Account</Link>
          </div>
        </div>
      </header>

      <section className="features-section">
        <h2>Why Choose Sente Sense?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Expense Tracking</h3>
            <p>Easily track and categorize your daily expenses with our intuitive interface.</p>
          </div>
          <div className="feature-card">
            <FaWallet className="feature-icon" />
            <h3>Budget Management</h3>
            <p>Set and monitor budgets for different categories to keep your spending in check.</p>
          </div>
          <div className="feature-card">
            <FaChartPie className="feature-icon" />
            <h3>Visual Reports</h3>
            <p>Get detailed insights into your spending patterns with beautiful charts and graphs.</p>
          </div>
          <div className="feature-card">
            <FaBell className="feature-icon" />
            <h3>Smart Notifications</h3>
            <p>Receive timely alerts when you're approaching your budget limits.</p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Take Control of Your Finances</h2>
        <div className="benefits-content">
          <div className="benefit-text">
            <ul>
              <li>Track expenses across multiple categories</li>
              <li>Set and manage monthly budgets</li>
              <li>View detailed spending analytics</li>
              <li>Get customized financial insights</li>
              <li>Access your data from anywhere</li>
            </ul>
          </div>
          <div className="cta-container">
            <h3>Ready to Start?</h3>
            <p>Join thousands of users who trust Sente Sense for their expense tracking needs.</p>
            <Link to="/register" className="btn btn-primary">Get Started Free</Link>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2024 Sente Sense. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
