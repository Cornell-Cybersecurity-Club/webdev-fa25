import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import People from "./pages/People";
import Contact from "./pages/Contact";
import CTF from "./pages/CTF";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        {/* make main full width so content can stretch edge-to-edge */}
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/join" element={<Join />} />
            <Route path="/people" element={<People />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ctf" element={<CTF />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
