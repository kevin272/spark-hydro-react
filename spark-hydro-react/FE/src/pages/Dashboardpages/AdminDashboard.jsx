import { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axios.config";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
  if (!token) return navigate("/login");

  const fetchAdmins = async () => {
    try {
      const res = await axiosInstance.get("/admin", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmins(res.data.data);
    } catch (err) {
      console.error(err);
      navigate("/login");
    }
  };

  fetchAdmins();
}, [token, navigate]);


  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this admin?")) return;
    try {
      await axiosInstance.delete(`/admin/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmins(admins.filter((a) => a._id !== id));
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  const handleResetPassword = async (id) => {
    const newPassword = prompt("Enter new password:");
    if (!newPassword) return;
    try {
      await axiosInstance.put(`/admin/${id}/reset-password`, { newPassword }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Password reset successfully!");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Admin Dashboard</h2>
      <button
        className="btn btn-success mb-3"
        onClick={() => navigate("/admin/add")}
      >
        Add New Admin
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin._id}>
              <td>{admin.username}</td>
              <td>{admin.firstName} {admin.lastName}</td>
              <td>{admin.email}</td>
              <td>{admin.role}</td>
              <td>{admin.isActive ? "Yes" : "No"}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => navigate(`/admin/edit/${admin._id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleResetPassword(admin._id)}
                >
                  Reset Password
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(admin._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
