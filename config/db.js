const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sente-sense', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Create default categories
    const Category = require('../models/Category');
    const defaultCategories = [
      { name: 'Food & Dining', color: '#FF6B6B', icon: 'restaurant' },
      { name: 'Transportation', color: '#4ECDC4', icon: 'car' },
      { name: 'Shopping', color: '#45B7D1', icon: 'shopping-cart' },
      { name: 'Entertainment', color: '#96CEB4', icon: 'movie' },
      { name: 'Bills & Utilities', color: '#FFEEAD', icon: 'receipt' },
      { name: 'Health & Fitness', color: '#D4A5A5', icon: 'heart' },
      { name: 'Travel', color: '#9B59B6', icon: 'plane' },
      { name: 'Education', color: '#3498DB', icon: 'school' }
    ];

    for (const category of defaultCategories) {
      await Category.findOneAndUpdate(
        { name: category.name },
        { ...category },
        { upsert: true }
      );
    }

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
