import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/axios.config";

export default function GalleryForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return setError("Please select an image");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      await axiosInstance.post("/gallery", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/gallery");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Upload failed");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Add Gallery Image</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
            required
          />
        </div>
        <button className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
}
