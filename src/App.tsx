import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import SocialProof from './components/SocialProof'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <SocialProof />
        <Location />
      </main>
      <Footer />
    </>
  )
}
