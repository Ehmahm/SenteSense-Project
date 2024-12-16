# Sente Sense - Expense Tracking Application

A modern expense tracking application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- User Authentication
- Expense Tracking
- Budget Management
- Category Management
- Visual Reports and Analytics
- Real-time Notifications
- Responsive Design

## Tech Stack

- Frontend: React, Redux Toolkit, Material-UI
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT

## Getting Started

1. Clone the repository
```bash
git clone [your-repo-url]
```

2. Install dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
```

3. Set up environment variables
Create a .env file in the root directory with:
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

4. Run the application
```bash
# Run both frontend and backend
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
