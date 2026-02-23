import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import People from "./pages/People";
import Contact from "./pages/Contact";
import Sponsorship from "./pages/Sponsorship.tsx";
import "./App.css";
import Footer from "./components/Footer.tsx";

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
            <Route path="/sponsorship" element={<Sponsorship />} />
          </Routes>
        </main>
        <div className="z-500">
          <Footer />
        </div>
      </div>
      {/*div>
        <hr className="border-t border-[#FF3B3B] my-4"/>
        <div className="flex gap-5 justify-center mt-10">
          <img src="" alt="image here" className="w-[80px] h-[80px] ml-20 mr-20"/>
          <div className="w-[500px] h-[200px] p-[10px]">
            <p className="text-[#FF3B3B] text-lg"> Connect </p>
            <p className="text-white"> Stay connected with the latest Cornell Cybersecurity Club news and events</p>
            <div className="flex gap-10 mt-4">
              <img src="disc_logo.png" alt="Discord" className="w-[50px] h-[80px]"/>
              <img src="instafin_logo.png" alt="Instagram" className="w-[50px] h-[80px]"/>
              <img src="link_logo2.png" alt="LinkedIn" className="w-[50px] h-[80px]"/>
            </div>
          </div>
          <div className="w-[500px] h-[200px] p-[10px] ml-10">
            <p className="text-[#FF3B3B] text-lg"> Join </p>
            <Link to="/join">
              <p className="text-white underline"> New member intake</p>
            </Link>
          </div>
          <div className="w-[500px] h-[200px] p-[10px]">
            <p className="text-[#FF3B3B] text-lg"> Contact </p>
            <Link to="/contact">
            <p className="text-white underline"> Contact Us</p>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white text-center">© 2025. All rights reserved.</p>
          <p className="text-white text-center">This organization is a registered student organization of Cornell University.</p>
          <a href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment" target="_blank" className="text-white text-center underline"> Equal Education and Employment</a>
        </div>
      </div>*/}
    </Router>
  );
}

export default App;
