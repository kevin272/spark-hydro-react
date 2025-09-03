import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useExternalScripts from "./utils/useExternalScripts";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Careers from "./pages/Careers";

export default function App() {

useExternalScripts([
    "/assets/js/vendor/jquery-3.7.1.min.js",
    "/assets/js/bootstrap.min.js",
    "/assets/js/swiper-bundle.min.js",
    "/assets/js/jquery.magnific-popup.min.js",
    "/assets/js/jquery.counterup.min.js",
    "/assets/js/circle-progress.js",
    "/assets/js/jquery-ui.min.js",
    "/assets/js/imagesloaded.pkgd.min.js",
    "/assets/js/isotope.pkgd.min.js",
    "/assets/js/nice-select.min.js",
    "/assets/js/wow.min.js",
    "/assets/js/gsap.min.js",
    "/assets/js/ScrollTrigger.min.js",
    "/assets/js/SplitText.min.js",
    "/assets/js/lenis.min.js",
    "/assets/js/main.js",
    "/assets/js/app.min.js"
  ]);

  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path= "/careers" element={<Careers/>} />
      </Routes>
      <Footer />
    </Router>
  );
}
