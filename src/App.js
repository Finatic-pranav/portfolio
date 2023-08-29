import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Work from './components/Works/Work';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
