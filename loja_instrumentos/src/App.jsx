
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quemsomos from './assets/pages/Quemsomos';
import Home from './assets/pages/Home';
import Header from './assets/components/Header';
import Instrumentos from './assets/pages/Instrumentos';
import Endereco from './assets/pages/Endereco';
import Contato from './assets/pages/Contato';
import Footer from './assets/components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quemsomos" element={<Quemsomos />} />
        <Route path="/instrumentos" element={<Instrumentos />} />
        <Route path="/endereco" element={<Endereco />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

