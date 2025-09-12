// ProjectsSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const projects = [
  {
    title: "Tamor Mewa",
    subtitle: "Hydroelectric",
    img: "https://www.sparkhydro.com/wp-content/uploads/2025/01/Tamor-Mewa-hydroelectric-cover-2.jpg",
  },
  {
    title: "Tamor Mewa",
    subtitle: "Hydroelectric",
    img: "https://www.sparkhydro.com/wp-content/uploads/2025/01/Tamor-Mewa-Hydroelectric-Project-Cover.jpg",
  },
  {
    title: "Tamor Mewa",
    subtitle: "Hydroelectric",
    img: "https://www.sparkhydro.com/wp-content/uploads/2024/11/imager-3.png",
  },
  {
    title: "Tamor Mewa",
    subtitle: "Hydroelectric",
    img: "https://www.sparkhydro.com/wp-content/uploads/2025/01/Tamor-Mewa-hydroelectric-cover-2.jpg",
  },
  {
    title: "Tamor Mewa",
    subtitle: "Hydroelectric",
    img: "https://www.sparkhydro.com/wp-content/uploads/2024/11/imager-3.png",
  },
  {
    title: "Tamor Mewa",
    subtitle: "Hydroelectric",
    img: "https://www.sparkhydro.com/wp-content/uploads/2025/01/Tamor-Mewa-Hydroelectric-Project-Cover.jpg",
  },
  {
    title: "Tamor Mewa",
    subtitle: "Hydroelectric",
    img: "https://www.sparkhydro.com/wp-content/uploads/2024/11/imager-3.png",
  },
  {
    title: "Tamor Mewa",
    subtitle: "Hydroelectric",
    img: "https://www.sparkhydro.com/wp-content/uploads/2025/01/Tamor-Mewa-hydroelectric-cover-2.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <section
      className="project-area2 overflow-hidden"
      id="project-sec"
      style={{
        backgroundImage:
          "url('https://www.sparkhydro.com/wp-content/uploads/2025/01/Tamor-Mewa-hydroelectric-cover-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="title-area mb-0">
        <div className="shadow-title">Our Projects</div>
      </div>

      <div className="slider-area">
        <Swiper
          spaceBetween={0}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2 },
            1200: { slidesPerView: 4 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className="project-item"
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "600px", // optional, adjust height
                }}
              >
                <div className="box-content">
                  <p className="box-subtitle">{project.subtitle}</p>
                  <h3 className="box-title">
                    <a href="service.html">{project.title}</a>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSection;
