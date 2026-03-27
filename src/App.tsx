import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlassCase from './components/GlassCase';
import Menu from './components/Menu';
import About from './components/About';
import FindUs from './components/FindUs';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GlassCase />
        <Menu />
        <About />
        <FindUs />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
