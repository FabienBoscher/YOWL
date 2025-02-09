import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import Wishlist from './components/Wishlist';
import Profil from './components/Profil';
import Register from './components/Register';
import CookieConsent from './components/CookieConsent';
import Private from './components/Private';
import Sugg from './components/Sugg';
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
            <Route path="/CookieConsent" element={<CookieConsent />} />
            <Route path="/Private" element={<Private />} />
            <Route path="/Sugg" element={<Sugg />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
