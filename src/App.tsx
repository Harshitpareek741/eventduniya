import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Events from './pages/Events';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';
import ArtistProfile from './pages/ArtistProfile';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold text-purple-500">
                EventDuniya
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="hover:text-purple-500 transition">Home</Link>
                <Link to="/artist" className="hover:text-purple-500 transition">Artists</Link>
                <Link to="/events" className="hover:text-purple-500 transition">Events</Link>
                <Link to="/contact" className="hover:text-purple-500 transition">Contact</Link>
                <Link to="/profile" className="hover:text-purple-500 transition">Profile</Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-lg">
              <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col space-y-4">
                  <Link to="/" className="hover:text-purple-500 transition" onClick={() => setIsMenuOpen(false)}>Home</Link>
                  <Link to="/artist" className="hover:text-purple-500 transition" onClick={() => setIsMenuOpen(false)}>Artists</Link>
                  <Link to="/events" className="hover:text-purple-500 transition" onClick={() => setIsMenuOpen(false)}>Events</Link>
                  <Link to="/contact" className="hover:text-purple-500 transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                  <Link to="/profile" className="hover:text-purple-500 transition" onClick={() => setIsMenuOpen(false)}>Profile</Link>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/artist-profile" element={<ArtistProfile />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-black/90 text-white py-12 mt-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-purple-500 mb-4">EventDuniya</h3>
                <p className="text-gray-400">Celebrating creativity and artistic expression through unforgettable experiences.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-purple-500">Home</Link></li>
                  <li><Link to="/artist" className="text-gray-400 hover:text-purple-500">Artists</Link></li>
                  <li><Link to="/events" className="text-gray-400 hover:text-purple-500">Events</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-purple-500">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>123 Art Street</li>
                  <li>New York, NY 10001</li>
                  <li>contact@artspace.com</li>
                  <li>(555) 123-4567</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-purple-500">Instagram</a>
                  <a href="#" className="text-gray-400 hover:text-purple-500">Twitter</a>
                  <a href="#" className="text-gray-400 hover:text-purple-500">Facebook</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 ArtSpace. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;