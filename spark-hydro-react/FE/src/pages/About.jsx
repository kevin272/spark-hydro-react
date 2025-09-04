import { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import AboutSection from "../components/AboutPage/AboutSection";
import ProcessSection from "../components/AboutPage/ProcessSection";
import TeamSection from "../components/AboutPage/TeamSection";

const About = () => {
  useEffect(() => {
    // Wait until DOM is rendered
    if (window.$) {
      // Magnific Popup
      $(".popup-link").magnificPopup({ type: "image" });

      // Swiper
      if (window.Swiper) {
        new Swiper(".swiper", { loop: true });
      }

      // GSAP Animations
      if (window.gsap) {
        const { gsap } = window;
        const { ScrollTrigger } = window;

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
  }, []);

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
