import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HydropowerProjectForm() {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    shortDescription: "",
    category: "hydropower",
    status: "planning",
    featured: false,
    isPublic: true,
    capacityMW: "",
    river: "",
    client: "",
    technologies: "",
    startDate: "",
    endDate: "",
  });

  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  // Remove a selected image
  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    const newPreviews = [...imagePreviews];
    newPreviews.splice(index, 1);
    setImagePreviews(newPreviews);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = new FormData();
      // Append form data
      Object.entries({
        ...formData,
        technologies: formData.technologies
          ? formData.technologies.split(",").map((t) => t.trim())
          : [],
      }).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => payload.append(key, v));
        } else {
          payload.append(key, value);
        }
      });

      // Append images
      images.forEach((img) => payload.append("images", img));

      await axios.post(`${API_URL}/projects`, payload, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/admin/projects");
    }  catch (err) {
  console.error("Error creating project:", err.response?.data || err.message);
  alert(err.response?.data?.message || "Failed to create project");
}

   finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Hydropower Project</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border rounded-md p-2"
        />
        <textarea
          name="description"
          placeholder="Full Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border rounded-md p-2"
        />
        <input
          type="text"
          name="shortDescription"
          placeholder="Short Description (max 200 chars)"
          maxLength={200}
          value={formData.shortDescription}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        />
        <input
          type="number"
          name="capacityMW"
          placeholder="Capacity (MW)"
          value={formData.capacityMW}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        />
        <input
          type="text"
          name="river"
          placeholder="River / Location"
          value={formData.river}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        />
        <input
          type="text"
          name="client"
          placeholder="Client / Owner"
          value={formData.client}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        />

        <input
          type="text"
          name="technologies"
          placeholder="Key Technologies (comma separated)"
          value={formData.technologies}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        />

        <div className="flex gap-4">
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-1/2 border rounded-md p-2"
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-1/2 border rounded-md p-2"
          />
        </div>

        {/* Toggle Buttons */}
        {["featured", "isPublic"].map((key) => (
          <div key={key} className="flex items-center justify-between gap-4">
            <span>{key === "featured" ? "Featured Project" : "Publicly Visible"}</span>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, [key]: !formData[key] })}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                formData[key] ? "bg-green-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  formData[key] ? "translate-x-6" : ""
                }`}
              ></div>
            </button>
          </div>
        ))}

        {/* Image Upload */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Project Images</label>
          <input type="file" multiple onChange={handleImageChange} />
          <div className="flex gap-2 mt-2 flex-wrap">
            {imagePreviews.map((src, idx) => (
              <div key={idx} className="relative w-20 h-20 border rounded overflow-hidden">
                <img src={src} alt={`preview-${idx}`} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(idx)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
        >
          {loading ? "Saving..." : "Save Project"}
        </button>
      </form>
    </div>
  );
}
