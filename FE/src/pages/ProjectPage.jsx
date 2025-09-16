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
        setProject(res.data.data);
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

  if (loading) return <p style={{ textAlign: "center" }}>Loading project...</p>;
  if (!project) return <p style={{ textAlign: "center" }}>Project not found!</p>;

  const statusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "#28a745"; // green
      case "planning":
        return "#007bff"; // blue
      case "ongoing":
        return "#fd7e14"; // orange
      default:
        return "#6c757d"; // gray
    }
  };

  const fadeInStyle = {
    opacity: 0,
    animation: "fadeIn 1s forwards",
  };

  return (
    <>
      <Breadcrumb title={project.title} />

      <section style={{ padding: "60px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
            }}
          >
            {/* Left Column */}
            <div style={{ flex: "1 1 65%", minWidth: "300px", ...fadeInStyle }}>
              {/* Main Image */}
              {project.images?.[0] && (
                <img
                  src={`${baseURL}${project.images[0].url}`}
                  alt={project.title}
                  style={{ width: "100%", borderRadius: "20px", marginBottom: "20px" }}
                />
              )}

              {/* Meta */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginBottom: "10px" }}>
                <span>
                  <i className="fa-regular fa-calendar"></i>{" "}
                  {new Date(project.createdAt).toLocaleDateString()}
                </span>
                <span
                  style={{
                    backgroundColor: statusColor(project.status),
                    color: "#fff",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>{project.title}</h3>

              {/* Description */}
              <p style={{ lineHeight: 1.7 }}>{project.description}</p>

              {/* Meta Info */}
              <div style={{ marginTop: "20px" }}>
                <p><strong>Client:</strong> {project.client}</p>
                <p><strong>River:</strong> {project.river}</p>
                <p><strong>Capacity:</strong> {project.capacityMW} MW</p>
                <p><strong>Technologies:</strong> {project.technologies?.join(", ")}</p>
              </div>

              {/* Tags + Share */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                  flexWrap: "nowrap", // prevent wrapping
                  overflowX: "auto", // allow horizontal scroll if needed
                  gap: "10px",
                }}
              >
                <div style={{ whiteSpace: "nowrap", flexShrink: 0 }}>
                  <span style={{ fontWeight: 600, marginRight: "10px" }}>Tags:</span>
                  {project.technologies?.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: "inline-block",
                        backgroundColor: "#6c757d",
                        color: "#fff",
                        padding: "2px 10px",
                        borderRadius: "8px",
                        fontSize: "0.85rem",
                        marginRight: "5px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
                  <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div style={{ flex: "1 1 30%", minWidth: "250px", ...fadeInStyle }}>
              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <h3 style={{ marginBottom: "15px" }}>Project Info</h3>
                <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
                  <li>
                    <span style={{ fontWeight: 600 }}>Status:</span>{" "}
                    <span
                      style={{
                        backgroundColor: statusColor(project.status),
                        color: "#fff",
                        padding: "4px 10px",
                        borderRadius: "12px",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                      }}
                    >
                      {project.status}
                    </span>
                  </li>
                  <li>
                    <span style={{ fontWeight: 600 }}>Client:</span> {project.client}
                  </li>
                  <li>
                    <span style={{ fontWeight: 600 }}>River:</span> {project.river}
                  </li>
                  <li>
                    <span style={{ fontWeight: 600 }}>Capacity:</span> {project.capacityMW} MW
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
