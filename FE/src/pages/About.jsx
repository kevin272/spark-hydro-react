import { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import AboutSection from "../components/AboutPage/AboutSection";
import ProcessSection from "../components/AboutPage/ProcessSection";
import TeamSection from "../components/AboutPage/TeamSection";
import useExternalScripts from "../utils/useExternalScripts";

const scripts = [
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
  "/assets/js/app.min.js",
];

const About = () => {
  // ✅ Load scripts and then initialize
  useExternalScripts(scripts, () => {
    if (window.$) {
      // Magnific Popup
      $(".popup-link").magnificPopup({ type: "image" });

      // Swiper
      if (window.Swiper) {
        new Swiper(".swiper", { loop: true });
      }

      // GSAP Animations
      if (window.gsap) {
        const { gsap, ScrollTrigger } = window;
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".about-section", {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
          },
        });
      }
    }
  });

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
