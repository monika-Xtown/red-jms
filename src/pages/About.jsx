const About = () => {
  return (
    <div className="fade-in">
      {/* Hero */}
      <section className="bg-white py-10 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-dark mb-6">
                About <span className="text-primary">SDRS Gold Finance</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
                We are a trusted financial service provider based in Coimbatore, dedicated to helping customers unlock the maximum value of their gold assets with complete transparency.
              </p>
              <div className="w-16 sm:w-20 h-2 bg-primary rounded-full mx-auto md:mx-0"></div>
            </div>
            <div className="w-full md:w-1/2 bg-secondary rounded-2xl sm:rounded-3xl p-1 aspect-video shadow-2xl overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Gold Jewelry" 
                className="w-full h-full object-cover rounded-[1.4rem]" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 sm:py-16 md:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-lg">
              <h2 className="text-xl sm:text-2xl font-black text-primary mb-4 uppercase tracking-tight">Our Mission</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                To provide honest, transparent, and efficient gold financial services that empower our community during their time of need. We believe in building lifelong relationships through trust and reliability.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-lg">
              <h2 className="text-xl sm:text-2xl font-black text-primary mb-4 uppercase tracking-tight">Our Process</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                We utilize standardized testing procedures to ensure you get the absolute best value. No complex marketing tactics, just straightforward valuation and instant cash settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust factors */}
      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-dark mb-10 sm:mb-12">Why Customers Trust Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-4 bg-red-50 sm:bg-transparent rounded-2xl">
              <div className="text-3xl sm:text-4xl font-black text-primary mb-2 sm:mb-3">100%</div>
              <p className="font-bold text-gray-600 text-sm sm:text-base uppercase tracking-wider">Privacy & Security</p>
            </div>
            <div className="p-4 bg-red-50 sm:bg-transparent rounded-2xl">
              <div className="text-3xl sm:text-4xl font-black text-primary mb-2 sm:mb-3">Best</div>
              <p className="font-bold text-gray-600 text-sm sm:text-base uppercase tracking-wider">Market Rate</p>
            </div>
            <div className="p-4 bg-red-50 sm:bg-transparent rounded-2xl">
              <div className="text-3xl sm:text-4xl font-black text-primary mb-2 sm:mb-3">Fast</div>
              <p className="font-bold text-gray-600 text-sm sm:text-base uppercase tracking-wider">Cash Settlement</p>
            </div>
          </div>
          <p className="mt-10 sm:mt-16 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto italic border-t border-gray-100 pt-8 sm:pt-10">
            At SDRS Gold Finance, we prioritize your satisfaction above all else. Our team of experts is always ready to guide you through our simple and secure process.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
