const GoldRate = () => {
  const today = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white border-2 border-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 group-hover:scale-110 transition-transform duration-500"></div>
          
          <div className="text-center relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-dark mb-2">
              Today's Gold Rate in Coimbatore
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-medium mb-6 sm:mb-8">
              Last updated: {today}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* 22K Rate */}
              <div className="bg-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-primary">
                <div className="text-base sm:text-lg font-bold text-gray-600 mb-1 text-left sm:text-center">22K Gold (per gram)</div>
                <div className="text-3xl sm:text-4xl font-black text-primary text-left sm:text-center">₹ 6,450</div>
              </div>

              {/* 24K Rate */}
              <div className="bg-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-primary">
                <div className="text-base sm:text-lg font-bold text-gray-600 mb-1 text-left sm:text-center">24K Gold (per gram)</div>
                <div className="text-3xl sm:text-4xl font-black text-primary text-left sm:text-center">₹ 7,036</div>
              </div>
            </div>

            <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400 font-medium italic">
              *Market rates are subject to change. Please call us for the latest price.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoldRate
