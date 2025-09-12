import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axios.config";

export default function TeamForm() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [role, setRole] = useState(""); // backend expects role, not position
  const [img, setImg] = useState(null); // file object
  const [preview, setPreview] = useState(""); // image preview
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // Fetch existing member (edit mode)
  useEffect(() => {
    if (id) {
      axiosInstance
        .get(`/team/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          const member = res.data.data;
          setName(member.name);
          setRole(member.role);
          setPreview(member.img ? `${member.img}` : "");
        })
        .catch((err) =>
          setError(err.response?.data?.message || "Failed to fetch member")
        );
    }
  }, [id, token]);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      setPreview(URL.createObjectURL(file)); // preview
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("role", role);
      if (img) formData.append("img", img);

      if (id) {
        await axiosInstance.put(`/team/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        await axiosInstance.post("/team", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
      }
      navigate("/admin/team");
    } catch (err) {
      setError(err.response?.data?.message || "Action failed");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">{id ? "Edit Team Member" : "Add Team Member"}</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Role / Position</label>
          <input
            type="text"
            className="form-control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Avatar (Upload Image)</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              style={{ marginTop: "10px", width: "100px", borderRadius: "8px" }}
            />
          )}
        </div>
        <button className="btn btn-primary">
          {id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}
