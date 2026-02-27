import Header from './components/Header'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Galeria from './components/Galeria'
import SobreNosotros from './components/SobreNosotros'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsappFloat from './components/WhatsappFloat'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-studio-white">
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Galeria />
        <SobreNosotros />
        <Contacto />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  )
}
