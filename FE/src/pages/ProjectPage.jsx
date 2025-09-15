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

  // Initialize GLightbox for images
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
      <Breadcrumb title={project.title} />
      <section className="overflow-hidden space" projectId="project-detail">
        <div className="container">
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          <div className="row gy-4">
            {project.images?.map((img) => (
              <div className="col-md-6 col-xl-4" key={img._id}>
                <a
                  href={`${baseURL}${img.url}`}
                  className="glightbox"
                  data-gallery="project-images"
                >
                  <div className="box-img">
                    <img
                      src={`${baseURL}${img.url}`}
                      alt={img.caption || project.title}
                      style={{ width: "100%" }}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="project-meta mt-4">
            <p><strong>Client:</strong> {project.client}</p>
            <p><strong>River:</strong> {project.river}</p>
            <p><strong>Capacity:</strong> {project.capacityMW} MW</p>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
