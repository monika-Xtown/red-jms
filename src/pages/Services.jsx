import ServicesComponent from '../components/Services'
import { CheckCircle2 } from 'lucide-react'

const ServicesPage = () => {
  return (
    <div className="fade-in">
      {/* Header Section */}
      <section className="bg-primary py-12 sm:py-16 md:py-20 lg:py-28 text-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-white/5 skew-y-3 transform translate-y-12"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tight">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive gold and silver financial solutions designed with transparency, speed, and maximum value in mind.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <ServicesComponent showTitle={false} />

      {/* Detailed Table/Process section */}
      <section className="py-10 sm:py-16 md:py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-[3rem] shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-dark mb-10 sm:mb-12 md:mb-16 text-center">Transparent Valuation Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {[
                { step: "01", title: "Testing", desc: "We test your gold using world-class methods for 100% accuracy right in front of you." },
                { step: "02", title: "Weight Measurement", desc: "Precise weight measurement using calibrated digital scales with zero deductions." },
                { step: "03", title: "Price Calculation", desc: "Valuation based on the current market gold rate with no hidden service charges." },
                { step: "04", title: "Instant Payment", desc: "Receive your payment via Cash, IMPS, or NEFT immediately after valuation." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 sm:gap-6 items-start group">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary/10 shrink-0 group-hover:text-primary/20 transition-colors">{item.step}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-dark mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-red-50 p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl border-2 border-dashed border-primary/20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-dark mb-6">Need a custom solution?</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto">
              Visit our Coimbatore branch for a detailed discussion about your gold loan takeover or customized EMI requirements.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8">
              <div className="flex items-center space-x-2 text-primary font-bold text-sm sm:text-base">
                <CheckCircle2 size={24} className="shrink-0" />
                <span>Highest Payout Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2 text-primary font-bold text-sm sm:text-base">
                <CheckCircle2 size={24} className="shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
