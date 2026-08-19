import Navbar from './components/Navbar'
import SectionIndicator from './components/SectionIndicator'
import Hero from './sections/Hero'
import Experiences from './sections/Experiences'
import OpenClassrooms from './sections/OpenClassrooms'
import VocationalDay from './sections/VocationalDay'
import Audience from './sections/Audience'
import ContactPlaceholder from './sections/ContactPlaceholder'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-cream text-brand-ink">
      <Navbar />
      <SectionIndicator />
      <main>
        <Hero />
        <Experiences />
        <OpenClassrooms />
        <VocationalDay />
        <Audience />
        <ContactPlaceholder />
      </main>
      <Footer />
    </div>
  )
}
