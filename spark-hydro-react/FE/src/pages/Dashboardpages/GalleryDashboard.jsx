import { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axios.config";
import { useNavigate } from "react-router-dom";

export default function GalleryDashboard() {
  const [images, setImages] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/login");

    const fetchGallery = async () => {
      try {
        const res = await axiosInstance.get("/gallery", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setImages(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchGallery();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this image?")) return;
    try {
      await axiosInstance.delete(`/gallery/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setImages(images.filter((img) => img._id !== id));
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Gallery</h2>
      <button className="btn btn-success mb-3" onClick={() => navigate("/gallery/add")}>
        Add New Image
      </button>
      <div className="row">
        {images.map((img) => (
          <div key={img._id} className="col-md-3 mb-3">
            <div className="card">
              <img src={img.url} className="card-img-top" alt={img.title} />
              <div className="card-body">
                <p className="card-text">{img.title}</p>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(img._id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
