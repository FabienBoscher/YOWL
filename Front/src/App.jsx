import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import Wishlist from './components/Wishlist';
import Profil from './components/Profil';
import Register from './components/Register';


function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
