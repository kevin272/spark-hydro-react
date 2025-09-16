import { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axios.config";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import DashboardTable from "../../components/Dashboard/DashboardTable";
const baseURL = import.meta.env.VITE_API_URL.replace("/api", "");

export default function GalleryDashboard() {
  const [images, setImages] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

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
  }, [token, navigate]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this image?")) return;
    try {
      await axiosInstance.delete(`/gallery/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setImages((prev) => prev.filter((img) => img._id !== id));
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  return (
    <DashboardLayout
      title="GalleryDashboard"
      actions={
        <button
          className="btn btn-success"
          onClick={() => navigate("/admin/gallery/add")}
        >
          ➕ Add New Image
        </button>
      }
    >
      <DashboardTable
        headers={[
          { label: "Title" },
          { label: "Image" },
          { label: "Actions", style: { width: "200px" } },
        ]}
        rows={
          images.length > 0
            ? images.map((img) => (
                <tr key={img._id}>
                  <td>{img.title}</td>
                  <td>
                    <img
                      src={`${baseURL}${img.image}`}
                      alt={img.title}
                      style={{ width: "100px", height: "auto" }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(img._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : []
        }
        emptyMessage="No images found."
      />
    </DashboardLayout>
  );
}
