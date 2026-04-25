import { Link } from 'react-router-dom'
import logo from "../assets/logo.jpg"

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-10 sm:pt-14 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Logo and Brand Section */}
          {/* Logo and Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="SDRS Gold Finance Logo" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              Trusted gold financial services in Coimbatore. Get the best value for your gold and silver instantly with our transparent processes.
            </p>
          </div>

          {/* Section 1: Quick Links */}
          <div className="sm:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 border-b-2 border-white/20 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li><Link to="/" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/services" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link to="/about" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/contact" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Section 2: Our Services */}
          <div className="sm:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 border-b-2 border-white/20 pb-2 inline-block">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li className="opacity-80">Cash for Gold</li>
              <li className="opacity-80">Cash for Silver</li>
              <li className="opacity-80">Gold Loan</li>
              <li className="opacity-80">EMI Loan</li>
              <li className="opacity-80">Loan Takeover</li>
            </ul>
          </div>

          {/* Section 3: Operating Hours */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 border-b-2 border-white/20 pb-2 inline-block">Operating Hours</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li className="flex justify-between max-w-xs">
                <span className="opacity-70">Mon - Sat:</span>
                <span className="font-bold">10:30 AM - 08:30 PM</span>
              </li>
              <li className="flex justify-between max-w-xs">
                <span className="opacity-70">Sunday:</span>
                <span className="font-bold text-white uppercase italic">Holiday</span>
              </li>
              <li className="mt-6 pt-4 border-t border-white/10 italic opacity-60 text-xs sm:text-sm">
                Coimbatore, Tamil Nadu
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs sm:text-sm opacity-50">
          <p>© {new Date().getFullYear()} SDRS Gold Finance. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
