import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { axiosInstance } from "../config/axios.config";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

export default function ProjectPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseURL = import.meta.env.VITE_API_URL.replace("/api", "");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axiosInstance.get(`/projects/${projectId}`);
        setProject(res.data);
      } catch (err) {
        console.error("Error fetching project:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectId]);

  useEffect(() => {
    if (project?.images?.length > 0) {
      const lightbox = GLightbox({
        selector: ".glightbox",
        loop: true,
        zoomable: true,
      });
      return () => lightbox.destroy();
    }
  }, [project]);

  if (loading) return <p className="text-center">Loading project...</p>;
  if (!project) return <p className="text-center">Project not found!</p>;

  return (
    <>
      {/* Hero / Breadcrumb */}
      <Breadcrumb title={project.title} />

      {/* Main project details */}
      <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            {/* Left column */}
            <div className="col-xxl-8 col-lg-7">
              <div className="th-blog blog-single">
                {/* Main image */}
                <div className="blog-img">
                  {project.images?.[0] && (
                    <img
                      src={`${baseURL}${project.images[0].url}`}
                      alt={project.title}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="blog-content">
                  {/* Meta */}
                  <div className="blog-meta">
                    <span>
                      <i className="fa-regular fa-calendar"></i>{" "}
                      {new Date(project.createdAt).toLocaleDateString()}
                    </span>
                    <span>
                      <i className="fa-regular fa-clock"></i> {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="blog-title">{project.title}</h3>

                  {/* Description */}
                  <p>{project.description}</p>


                  {/* Meta Info */}
                  <div className="project-meta mt-4">
                    <p>
                      <strong>Client:</strong> {project.client}
                    </p>
                    <p>
                      <strong>River:</strong> {project.river}
                    </p>
                    <p>
                      <strong>Capacity:</strong> {project.capacityMW} MW
                    </p>
                    <p>
                      <strong>Technologies:</strong>{" "}
                      {project.technologies?.join(", ")}
                    </p>
                  </div>

                  {/* Tags + Share */}
                  <div className="share-links clearfix mt-4">
                    <div className="row justify-content-between">
                      <div className="col-sm-auto">
                        <span className="share-links-title">Tags:</span>
                        <div className="tagcloud">
                          {project.technologies?.map((tag, idx) => (
                            <span key={idx} className="me-2">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="col-sm-auto text-xl-end">
                        <span className="share-links-title">Share:</span>
                        <ul className="social-links">
                          <li>
                            <a href="https://facebook.com/" target="_blank">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/" target="_blank">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://linkedin.com/" target="_blank">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_categories">
                  <h3 className="widget_title">Project Info</h3>
                  <ul>
                    <li>Status: {project.status}</li>
                    <li>Client: {project.client}</li>
                    <li>River: {project.river}</li>
                    <li>Capacity: {project.capacityMW} MW</li>
                  </ul>
                </div>

                
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
