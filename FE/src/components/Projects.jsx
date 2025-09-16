import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);

  const baseURL = import.meta.env.VITE_API_URL.replace("/api", "");
  const slidesPerView = 4;

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

  // repeat projects to always fill 4 panels
  let displayProjects = [...projects];
  while (displayProjects.length < slidesPerView) {
    displayProjects = displayProjects.concat(projects);
  }
  displayProjects = displayProjects.slice(0, slidesPerView); // only 4

  return (
    <section className="project-area2 overflow-hidden" id="project-sec">
      <div className="title-area mb-0">
        <div className="shadow-title">Our Projects</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {displayProjects.map((project, idx) => {
          const hoveredImage = hoveredProject?.images?.[0]?.url
            ? `${baseURL}${hoveredProject.images[0].url}`
            : null;

          // background slicing logic
          const sliceStyle =
            hoveredImage
              ? {
                  backgroundImage: `url(${hoveredImage})`,
                  backgroundSize: `${slidesPerView * 100}% 100%`,
                  backgroundPosition: `${(idx / (slidesPerView - 1)) * 100}% center`,
                }
              : {
                  backgroundImage: project.images?.[0]?.url
                    ? `url(${baseURL}${project.images[0].url})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                };

          return (
            <div
              key={project._id}
              className="project-item relative"
              style={{
                ...sliceStyle,
                height: "600px",
                transition: "all 0.4s ease-in-out",
              }}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Always dim overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="box-content absolute bottom-4 left-4 text-white z-10">
                <p className="box-subtitle">{project.category || project.subtitle}</p>
                <h3 className="box-title">
                  <a href={`/projects/${project._id}`}>{project.title}</a>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
