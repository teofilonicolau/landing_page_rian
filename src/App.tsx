import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ConsultarDireitos from './pages/ConsultarDireitos';

const LandingPage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Services />
      <Team />
      <FAQ />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/consultar-direitos" element={<ConsultarDireitos />} />
      </Routes>
    </Router>
  );
}

export default App;
