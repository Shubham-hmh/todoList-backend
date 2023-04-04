# todoList-backend
backend

# Prerequisites
Node.js (version 12 or higher)
MongoDB (version 4 or higher)

# Installation
Clone the repository: git clone https://github.com/your-username/nodejs-backend.git
Install dependencies: npm install
Set environment variables:
MONGODB_URL: MongoDB connection string
PORT: Port to run the server on (default: 3000)
Start the server: npm start or node index.js


#  API Documentation
Endpoints

GET /api/todo: Get a list of all todos.

GET /api/todo/:id  Get a single todo by ID

POST /api/todo: Create a new todo

PUT /api/todo/updateUser/:id  Update a todo by ID

DELETE /api/todo/deleteUser/:id  Delete a todo by ID
