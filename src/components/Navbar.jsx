import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PhoneCall, Menu, X } from 'lucide-react'
import logo from "../assets/logo.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-24 items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <img 
              src={logo} 
              alt="SDRS Gold Finance Logo" 
              className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary font-medium transition-colors">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">Contact</Link>
          </div>

          {/* CTA Right Side */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:9843257757" 
              className="hidden sm:flex items-center space-x-2 bg-primary text-white px-4 py-2 md:py-2.5 rounded-full font-bold hover:bg-red-700 transition-all shadow-md active:scale-95 text-xs md:text-sm"
            >
              <PhoneCall size={16} />
              <span className="hidden md:inline">Speak to Expert:</span> 
              <span>9843257757</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-primary font-bold py-2 border-b border-gray-50">Home</Link>
          <Link to="/services" onClick={toggleMenu} className="block text-gray-700 hover:text-primary font-bold py-2 border-b border-gray-50">Services</Link>
          <Link to="/about" onClick={toggleMenu} className="block text-gray-700 hover:text-primary font-bold py-2 border-b border-gray-50">About</Link>
          <Link to="/contact" onClick={toggleMenu} className="block text-gray-700 hover:text-primary font-bold py-2 border-b border-gray-50">Contact</Link>
          <a 
            href="tel:9843257757" 
            className="flex items-center justify-center space-x-2 bg-primary text-white p-4 rounded-xl font-bold w-full"
          >
            <PhoneCall size={20} />
            <span>Call Expert: 9843257757</span>
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
