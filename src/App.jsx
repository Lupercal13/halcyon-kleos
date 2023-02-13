import About from "./components/About";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Music from "./components/Music";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <About />
      <Contact />
      <Music />
      <Footer />
    </div>
  );
}

export default App;
