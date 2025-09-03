import { useEffect } from "react";
import { Link } from "react-router-dom";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const Projects = () => {
  const images = [
    "https://www.sparkhydro.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-18-at-12.41.33-PM-4.jpeg",
    "https://www.sparkhydro.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-18-at-12.41.33-PM-3.jpeg",
    "https://www.sparkhydro.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-18-at-12.41.33-PM-2.jpeg",
    "https://www.sparkhydro.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-18-at-12.41.33-PM-1.jpeg",
    "https://www.sparkhydro.com/wp-content/uploads/2025/01/WhatsApp-Image-2024-12-18-at-12.41.33-PM-1-1024x682-1.jpeg",
    "https://www.sparkhydro.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-18-at-12.41.33-PM-5.jpeg",
    "https://www.sparkhydro.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-18-at-12.41.33-PM-4.jpeg",
  ];

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      loop: true,
      touchNavigation: true,
      zoomable: true,
    });
  }, []);

  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage:
            "url('https://www.sparkhydro.com/wp-content/uploads/2024/11/imager-3.png')",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Gallery</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Gallery</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="overflow-hidden space" id="project-sec">
        <div className="container">
          <div className="row gy-4">
            {images.map((src, idx) => (
              <div className="col-md-6 col-xl-4" key={idx}>
                <div className="project-item2">
                  <a href={src} className="glightbox" data-gallery="projects">
                    <div className="box-img">
                      <img src={src} alt={`project ${idx + 1}`} />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
