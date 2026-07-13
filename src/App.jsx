import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <ScrollProgress/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </>
  );
}

export default App;