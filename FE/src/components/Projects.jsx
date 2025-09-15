import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseURL = import.meta.env.VITE_API_URL.replace("/api", "");

  // Fetch public projects
  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/projects`);
      setProjects(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) return <p className="p-6 text-center">Loading projects...</p>;
  if (!projects.length) return <p className="p-6 text-center">No projects found.</p>;

  // Repeat projects if less than 4 (or max slides per view)
  const slidesPerView = 4;
  let displayProjects = [...projects];
  while (displayProjects.length < slidesPerView) {
    displayProjects = displayProjects.concat(projects);
  }

  return (
    <section
      className="project-area2 overflow-hidden"
      id="project-sec"
      style={{
        backgroundImage: displayProjects[0]?.img
          ? `url(${getImageUrl(displayProjects[0].img)})`
          : "none",
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
            1200: { slidesPerView: slidesPerView },
          }}
        >
          {displayProjects.map((project, idx) => (
            <SwiperSlide key={`${project._id}-${idx}`}>
              <div
                className="project-item"
                style={{
                  backgroundImage: project.images[0]
                    ? `url(${baseURL}${project.images[0]})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "600px",
                }}
              >
                <div className="box-content">
                  <p className="box-subtitle">{project.category || project.subtitle}</p>
                  <h3 className="box-title">
                    <a href={`/projects/${project._id}`}>{project.title}</a>
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
