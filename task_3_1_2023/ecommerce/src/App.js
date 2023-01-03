import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Product from './components/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product"  element={<Product/>}></Route>
        <Route path="/cart"  element={<Cart/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
