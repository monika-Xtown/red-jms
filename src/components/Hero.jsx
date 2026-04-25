import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-16 md:py-20 lg:py-24">
      {/* Red accent shape - Desktop only */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center">
          {/* Content */}
          <div className="w-full md:w-1/2 fade-in text-center md:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs sm:text-sm font-bold tracking-wider text-primary uppercase bg-red-50 rounded-full">
              Trustworthy Gold Finance
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-dark leading-tight mb-6">
              Sell Your Gold Easily & <br className="hidden sm:block" />
              <span className="text-primary">Get Instant Cash</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Transparent valuation and immediate payment. We provide the best market rates for your gold and silver jewelry in Coimbatore.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-xl hover:shadow-red-200 active:scale-95"
              >
                Get Instant Cash
              </button>
              <Link 
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-dark font-bold rounded-lg border-2 border-gray-100 hover:border-primary hover:text-primary transition-all active:scale-95 group"
              >
                Discover Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative fade-in [animation-delay:200ms]">
            <div className="bg-gray-100 rounded-3xl overflow-hidden aspect-video sm:aspect-[4/3] md:aspect-square shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Gold Finance Coins" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Float badge - hidden on small mobile */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-2xl sm:text-3xl font-black text-primary mb-1">100%</div>
              <div className="text-xs sm:text-sm font-bold text-gray-500 uppercase">Secure Process</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
