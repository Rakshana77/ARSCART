import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import Payment from './pages/Payment';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
        <Router>
          <div>
            <ToastContainer theme='dark' position='top-center' />
            <Header cartItems={cartItems} />
            <Routes>
                <Route path="/"  element={ <Home />}/>
                <Route path="/search"  element={ <Home />}/>
                <Route path="/product/:id"  element={ <ProductDetail cartItems={cartItems}  setCartItems={setCartItems}  />}/>
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/payment" element={<Payment />} />

            
            </Routes>
          </div>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
// import './App.css';
// import Home from './pages/Home';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProductDetail from './pages/ProductDetail';
// import { useState } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Cart from './pages/Cart';
// import Payment from './pages/Payment';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   // Calculate total cart price
//   const totalCartAmount = cartItems.reduce(
//     (acc, item) => acc + item.product.price * item.qty,
//     0
//   );

//   return (
//     <div className="App">
//       <Router>
//         <div>
//           <ToastContainer theme="dark" position="top-center" />
//           <Header cartItems={cartItems} />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/search" element={<Home />} />
//             <Route
//               path="/product/:id"
//               element={
//                 <ProductDetail cartItems={cartItems} setCartItems={setCartItems} />
//               }
//             />
//             <Route
//               path="/cart"
//               element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
//             />
//             {/* Pass totalCartAmount as a prop to Payment */}
//             <Route
//               path="/payment"
//               element={<Payment cartTotal={totalCartAmount} />}
//             />
//           </Routes>
//         </div>
//       </Router>
//       <Footer />
//     </div>
//   );
// }

// export default App;
