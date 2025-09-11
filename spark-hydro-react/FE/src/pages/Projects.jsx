import { useEffect, useState } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Breadcrumb from "../components/Breadcrumb";
import { axiosInstance } from "../config/axios.config";

const Projects = () => {
  const [images, setImages] = useState([]);

  const baseURL = import.meta.env.VITE_API_URL.replace("/api", "");

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axiosInstance.get("/gallery");
        setImages(res.data.data || []);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      }
    };

    fetchGallery();
  }, []);

  // Initialize GLightbox after images are rendered
  useEffect(() => {
    if (images.length > 0) {
      const lightbox = GLightbox({
        selector: ".glightbox",
        loop: true,
        touchNavigation: true,
        zoomable: true,
      });

      return () => lightbox.destroy(); // Cleanup on unmount
    }
  }, [images]);

  return (
    <>
      <Breadcrumb title="Gallery" />
      <section className="overflow-hidden space" id="project-sec">
        <div className="container">
          <div className="row gy-4">
            {images.map((item, idx) => (
              <div className="col-md-6 col-xl-4" key={item._id || idx}>
                <div className="project-item2">
                  <a
                    href={`${baseURL}${item.image}`}
                    className="glightbox"
                    data-gallery="projects"
                  >
                    <div className="box-img">
                      <img
                        src={`${baseURL}${item.image}`}
                        alt={item.title}
                        style={{ width: "100%", display: "block" }}
                      />
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
