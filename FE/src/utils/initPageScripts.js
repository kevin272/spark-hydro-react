// utils/initPageScripts.js
export default function initPageScripts() {
  // Discount animation
  const discount = document.querySelector(".discount-anime");
  if (discount && window.SplitText && window.gsap) {
    const split = new window.SplitText(discount, { type: "chars" });
    window.gsap.from(split.chars, {
      rotate: 360,
      duration: 2,
      stagger: 0.05,
      repeat: -1,
      yoyo: true,
    });
  }

  // WOW.js animations
  if (window.WOW) new window.WOW().init();

  // CounterUp
  if (window.jQuery && window.jQuery.fn.counterUp) {
    window.jQuery(".counter-number").counterUp({ delay: 10, time: 1000 });
  }

  // Any other template-specific JS (like Swiper, Isotope, etc.)
}
