import "./App.css";
import Header from "./components/navbar/Navbar";
import Homepage from "./screens/homepage/Homepage";
import Signup from "./screens/signup/Signup";
import Login from "./screens/login/Login";
import Books from "./components/books/Books";
import About from "./screens/about/About";
import Order from "./screens/order/Order";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
