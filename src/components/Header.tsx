import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Test Catalog', href: '/tests' },
    { name: 'Book Appointment', href: '/book-appointment' },
    { name: 'Patient Portal', href: '/patient-portal' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  // Add scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`bg-white shadow sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo with animation */}
          <Link to="/" className="flex items-center group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <img src={logo} alt="Yash Pathology Logo" className="h-12 w-12 mr-3 rounded-lg" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                Yash Pathology Laboratory
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation with hover animations */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-2 py-1 text-base font-semibold transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                {/* Animated underline for active and hover states */}
                <span 
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button with animation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 transition-colors duration-300 transform hover:rotate-90"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with slide-down animation */}
      <div className={`md:hidden border-t border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 text-lg font-medium transition-all duration-300 transform ${
                isActive(item.href)
                  ? 'text-blue-600 bg-blue-50 translate-x-2'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:translate-x-2'
              }`}
              style={{ transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms' }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;