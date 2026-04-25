import { ShieldCheck, Zap, Scale, HeartHandshake } from 'lucide-react'

const reasons = [
  {
    title: "Transparent Valuation",
    description: "Every step of our gold testing and valuation process is done right in front of you.",
    icon: <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
  },
  {
    title: "Instant Payment",
    description: "Walk in with your gold and walk out with cash or bank transfer in minutes.",
    icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
  },
  {
    title: "Safe & Secure",
    description: "Your assets and data are handled with the highest level of security and confidentiality.",
    icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
  },
  {
    title: "Trusted Local Service",
    description: "We are deeply rooted in Coimbatore, serving thousands of happy customers with integrity.",
    icon: <HeartHandshake className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
  },
]

const WhyChoose = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-dark mb-4">Why Choose Us?</h2>
          <div className="w-16 sm:w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-4 sm:p-6 transition-transform hover:-translate-y-2">
              <div className="mb-4 sm:mb-6 flex justify-center">
                <div className="p-4 sm:p-5 bg-white rounded-2xl shadow-md border border-gray-100">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-dark mb-2 sm:mb-3">{reason.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
