import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import Services from './sections/Services';
import SolarCalculator from './sections/SolarCalculator';
import LeadForm from './sections/LeadForm';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <SolarCalculator />
        <LeadForm />
        <Projects />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
