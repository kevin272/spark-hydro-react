import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import AboutSection from "../components/AboutPage/AboutSection";
import ProcessSection from "../components/AboutPage/ProcessSection";
import TeamSection from "../components/AboutPage/TeamSection";
import useExternalScripts from "../utils/useExternalScripts";

const About = () => {
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
    <>
      <Breadcrumb title="About Us" />
      <AboutSection />
      <ProcessSection />
      <TeamSection />
    </>
  );
};

export default About;
