import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DashboardTable from "../../components/Dashboard/DashboardTable";

export default function ProjectDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch projects
  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}/projects`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProjects(response.data.data || []);
    } catch (err) {
      console.error("Error fetching projects:", err.response || err);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await axios.delete(`${API_URL}/projects/${id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error deleting project:", err.response || err);
    }
  };

  const headers = [
    { label: "Title" },
    { label: "Category" },
    { label: "Status" },
    { label: "Featured" },
    { label: "Actions", className: "text-right" },
  ];

  // Map projects into <tr> elements
  const rows = projects.map((p) => (
    <tr key={p._id} className="border-t">
      <td className="px-4 py-3">{p.title}</td>
      <td className="px-4 py-3 capitalize">{p.category}</td>
      <td className="px-4 py-3">{p.status}</td>
      <td className="px-4 py-3">{p.featured ? "✅" : "❌"}</td>
      <td className="px-4 py-3 text-right">
        <Link
          to={`/admin/projects/edit/${p._id}`}
          className="text-blue-600 hover:underline mr-3"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDelete(p._id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  if (loading) return <p className="p-6">Loading projects...</p>;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Projects Dashboard</h1>
        <Link
          to="/admin/projects/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          + Add Project
        </Link>
      </div>

      <DashboardTable
        headers={headers}
        rows={rows}
        emptyMessage="No projects found."
      />
    </div>
  );
}
