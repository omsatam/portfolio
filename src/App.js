import "./App.css";
import Navbar from "./myComponents/Navbar";
import Home from "./myComponents/Home";
import About from "./myComponents/About";
import Projects from "./myComponents/Projects";
import Contact from "./myComponents/Contact";
import Footer from "./myComponents/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
