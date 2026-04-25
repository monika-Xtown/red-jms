import { Wallet, Coins, Landmark, CreditCard, Repeat, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const servicesData = [
  {
    title: "Cash for Gold",
    description: "Convert your unused or old gold jewelry into instant cash with transparent valuation.",
    icon: <Wallet className="w-8 h-8 text-primary" />,
  },
  {
    title: "Cash for Silver",
    description: "Get the best market value for your silver items, articles, and jewelry instantly.",
    icon: <Coins className="w-8 h-8 text-primary" />,
  },
  {
    title: "Gold Loan",
    description: "Easy and quick gold loans with minimal documentation and attractive interest rates.",
    icon: <Landmark className="w-8 h-8 text-primary" />,
  },
  {
    title: "EMI Loan",
    description: "Flexible EMI options for your financial needs with customized repayment plans.",
    icon: <CreditCard className="w-8 h-8 text-primary" />,
  },
  {
    title: "Loan Takeover",
    description: "Switch your existing gold loan to us for lower interest rates and better service.",
    icon: <Repeat className="w-8 h-8 text-primary" />,
  },
]

const Services = ({ showTitle = true }) => {
  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-dark mb-4">Our Professional Services</h2>
            <div className="w-16 sm:w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 sm:mt-6 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              We offer a wide range of financial services tailored to meet your immediate cash requirements securely.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4 sm:mb-6 p-4 bg-red-50 rounded-xl inline-block group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-dark mb-3 sm:mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-primary font-bold hover:underline text-sm sm:text-base"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
