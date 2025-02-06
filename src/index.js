import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartProvider } from "./Components/CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);

