Full eCommerce Application

This is a full-stack eCommerce web application built with React for the frontend and Node.js with Express.js for the backend. The app allows users to browse products, add them to their cart, and place orders. It includes features like product search, quantity management, and an order summary.

Features

Product Listing: Display a list of products with their name, price, image, and ratings.

Search Products: Users can search for products based on various parameters.

Product Details: Users can view detailed information about a product.

Add to Cart: Users can add products to their cart, view the cart, and modify quantities.

Order Management: Users can place orders and see an order summary.

Cart Functionality:

Increase or decrease the quantity of items.

Remove items from the cart.

View the subtotal and estimated total cost.

Backend API Integration: Data is fetched from a backend server using a REST API.

Tech Stack

Frontend:

React.js

React Router

Axios for HTTP requests

React Toastify for notifications

Bootstrap or Tailwind CSS for styling

Backend:

Node.js

Express.js

MongoDB for storing product and user data

Installation

1. Clone the repository

git clone https://github.com/Rakshana77/ARSCART.git
cd ARSCART

2. Install dependencies

Frontend:

cd frontend
npm install

Backend:

cd backend
npm install

3. Set up environment variables

Create a .env file in the backend directory and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Run the application

Backend:

cd backend
npm start

Frontend:

cd frontend
npm start

Open http://localhost:3000 to view the app in your browser.

How It Works

Product Listing: The homepage fetches a list of products from the backend API and displays them using a responsive grid.

Search Products: Users can search for products by name, category, or other criteria using a search bar.

Add to Cart: Users can add products to their cart and update the quantity directly from the cart page.

Order Placement: After reviewing their cart, users can proceed to checkout and place an order. The backend processes the order and updates the database.

API Integration

The backend API provides endpoints for:

Fetching products

User authentication (login, signup, JWT-based authorization)

Managing cart items

Placing orders

Example Endpoints

GET /api/products: Fetch all products

GET /api/products/:id: Fetch details of a single product

POST /api/cart: Add an item to the cart

POST /api/orders: Place an order

Available Scripts

In the project directory, you can run:

npm start

Runs the app in the development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes.

npm test

Launches the test runner in the interactive watch mode.

npm run build

Builds the app for production to the build folder. It optimizes the build for the best performance. The app is ready to be deployed.

Deployment

The application can be deployed to platforms like Vercel (frontend) and Render or Heroku (backend). Follow the respective platform’s documentation for deployment instructions.

License

This project is licensed under the MIT License. See the LICENSE file for details.


