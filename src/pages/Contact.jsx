import ContactForm from '../components/ContactForm'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <div className="fade-in">
      <section className="bg-primary/5 py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark mb-4">Contact Us</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">We're here to help you get the best value for your gold.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Info */}
            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-black text-dark mb-8 sm:mb-10 uppercase tracking-tight">Get In Touch</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-xl text-primary shrink-0">
                    <MapPin size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600 text-xs sm:text-base">Main Road, Opp. Sivan Temple, Coimbatore, Tamil Nadu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-xl text-primary shrink-0">
                    <Phone size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-lg mb-1">Call Us</h3>
                    <a href="tel:9843257757" className="text-gray-600 hover:text-primary transition-colors text-base sm:text-xl font-bold italic tracking-wider">9843257757</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-xl text-primary shrink-0">
                    <Clock size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-xs sm:text-base font-medium">Mon - Sat: 10:30 AM - 08:30 PM</p>
                    <p className="text-red-500 font-black text-[10px] sm:text-xs uppercase mt-1 tracking-widest bg-red-50 inline-block px-2 py-0.5 rounded">Sunday Holiday</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-gray-50 pt-6 sm:pt-8">
                  <div className="bg-red-50 p-3 rounded-xl text-primary shrink-0">
                    <Mail size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600 text-xs sm:text-base font-medium">info@sdrsgoldfinance.com</p>
                  </div>
                </div>
              </div>

              {/* Simple Map Placeholder */}
              <div className="mt-10 sm:mt-12 w-full h-40 sm:h-48 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 font-bold border-2 border-dashed border-gray-200 text-sm sm:text-base px-6 text-center">
                Coimbatore Google Maps Location
              </div>
            </div>

            {/* Right: Form */}
            <div className="order-1 lg:order-2">
              {/* Note: ContactForm already has internally responsive padding/layout */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
