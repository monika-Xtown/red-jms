import Hero from '../components/Hero'
import GoldRate from '../components/GoldRate'
import Services from '../components/Services'
import WhyChoose from '../components/WhyChoose'
import ContactForm from '../components/ContactForm'

const Home = () => {
  return (
    <div className="fade-in">
      <Hero />
      <GoldRate />
      <Services />
      <WhyChoose />
      <ContactForm />
    </div>
  )
}

export default Home
