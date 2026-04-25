import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+91 ',
    location: '',
    goldType: '',
    goldWeight: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Prevent deleting +91
    if (name === 'phone') {
      if (!value.startsWith('+91 ')) {
        return
      }
      // Allow only numbers after +91 
      const numbersOnly = value.slice(4).replace(/\D/g, '')
      if (numbersOnly.length > 10) return
      setFormData({ ...formData, [name]: '+91 ' + numbersOnly })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name is required'
    
    const phoneDigits = formData.phone.slice(4)
    if (phoneDigits.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    
    if (!formData.location) newErrors.location = 'Location is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      alert('Thank you! Our expert will call you shortly.')
      setFormData({
        name: '',
        phone: '+91 ',
        location: '',
        goldType: '',
        goldWeight: ''
      })
    }
  }

  return (
    <section id="contact-form" className="py-10 sm:py-16 md:py-20 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-dark mb-3 sm:mb-4">Request a Callback</h2>
            <p className="text-sm sm:text-base text-gray-500">Fill in the details below and get a free valuation estimate.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 sm:mb-2 uppercase tracking-wide">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border-2 focus:border-primary focus:ring-0 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-100'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 sm:mb-2 uppercase tracking-wide">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border-2 focus:border-primary focus:ring-0 outline-none transition-all font-mono ${errors.phone ? 'border-red-500' : 'border-gray-100'}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Location */}
              <div className="sm:col-span-2 md:col-span-1">
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 sm:mb-2 uppercase tracking-wide">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Coimbatore"
                  className={`w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-0 outline-none transition-all ${errors.location ? 'border-red-500' : 'border-gray-100'}`}
                />
                {errors.location && <p className="text-red-500 text-xs mt-1 font-bold">{errors.location}</p>}
              </div>

              {/* Gold Type */}
              <div className="sm:col-span-1">
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 sm:mb-2 uppercase tracking-wide">Gold Type</label>
                <select
                  name="goldType"
                  value={formData.goldType}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-0 outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select Karat</option>
                  <option value="22K">22K</option>
                  <option value="24K">24K</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Weight */}
              <div className="sm:col-span-1">
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 sm:mb-2 uppercase tracking-wide">Weight (approx)</label>
                <input
                  type="text"
                  name="goldWeight"
                  value={formData.goldWeight}
                  onChange={handleChange}
                  placeholder="e.g. 10g"
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-0 outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-black py-3 sm:py-4 rounded-xl shadow-xl hover:bg-red-700 transition-all active:scale-95 text-base sm:text-lg uppercase tracking-widest mt-4"
            >
              Get Free Valuation
            </button>
            <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-4 leading-tight">
              By clicking the button, you agree to our terms and to be contacted by our expert.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
