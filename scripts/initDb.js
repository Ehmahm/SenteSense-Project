const mongoose = require('mongoose');
const User = require('../models/User');
const Category = require('../models/Category');
const Expense = require('../models/Expense');
const Budget = require('../models/Budget');
require('dotenv').config();

const initializeDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sente-sense', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      User.deleteMany({}),
      Category.deleteMany({}),
      Expense.deleteMany({}),
      Budget.deleteMany({})
    ]);

    // Create a demo user
    const demoUser = await User.create({
      name: 'Demo User',
      email: 'demo@sentesense.com',
      password: 'demo123'
    });

    // Create categories
    const categories = await Category.insertMany([
      { name: 'Food & Dining', color: '#FF6B6B', icon: 'restaurant', user: demoUser._id },
      { name: 'Transportation', color: '#4ECDC4', icon: 'car', user: demoUser._id },
      { name: 'Shopping', color: '#45B7D1', icon: 'shopping-cart', user: demoUser._id },
      { name: 'Entertainment', color: '#96CEB4', icon: 'movie', user: demoUser._id },
      { name: 'Bills & Utilities', color: '#FFEEAD', icon: 'receipt', user: demoUser._id }
    ]);

    // Create sample expenses
    const currentDate = new Date();
    const expenses = [];
    
    for (let i = 0; i < 20; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() - i);
      
      expenses.push({
        user: demoUser._id,
        description: `Sample Expense ${i + 1}`,
        amount: Math.floor(Math.random() * 100) + 10,
        category: categories[Math.floor(Math.random() * categories.length)]._id,
        date: date
      });
    }

    await Expense.insertMany(expenses);

    // Create sample budgets
    const budgets = [];
    for (const category of categories) {
      budgets.push({
        user: demoUser._id,
        amount: Math.floor(Math.random() * 500) + 200,
        category: category._id,
        startDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        endDate: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0),
        notifications: {
          enabled: true,
          threshold: 80
        }
      });
    }

    await Budget.insertMany(budgets);

    console.log('Database initialized with sample data');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
};

initializeDatabase();
