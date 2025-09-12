import { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axios.config";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import DashboardTable from "../../components/Dashboard/DashboardTable";
import DashboardLinks from "../../components/Dashboard/DashboardLinks";

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
    if (!window.confirm("Delete this admin?")) return;
    try {
      await axiosInstance.delete(`/admin/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmins((prev) => prev.filter((a) => a._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleResetPassword = (id) => {
    const newPassword = prompt("Enter new password:");
    if (!newPassword) return;
    axiosInstance.put(
      `/admin/${id}/reset-password`,
      { newPassword },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  return (
    <DashboardLayout
      title="Admin Dashboard"
      actions={
        <button
          className="btn btn-success"
          onClick={() => navigate("/admin/add")}
        >
          ➕ Add Admin
        </button>
      }
    >
      {/* Quick Navigation */}
      <DashboardLinks
        links={[
          { label: "Manage Gallery", to: "/admin/gallery", variant: "info", icon: "📸" },
          { label: "Manage Team", to: "/admin/team", variant: "success", icon: "👥" },
        ]}
      />

      {/* Admins Table */}
      <DashboardTable
        headers={[
  { label: "Username", maxWidth: "150px" },
  { label: "Full Name", maxWidth: "180px" },
  { label: "Email", maxWidth: "200px" },
  { label: "Role", maxWidth: "120px", className: "text-center" },
  { label: "Active", maxWidth: "100px", className: "text-center" },
  { label: "Actions", maxWidth: "220px", className: "text-center" },
]}

        rows={admins.map((admin) => (
          <tr key={admin._id}>
            <td>{admin.username}</td>
            <td>{admin.firstName} {admin.lastName}</td>
            <td>{admin.email}</td>
            <td>
              <span className={`badge bg-${admin.role === "superadmin" ? "danger" : "primary"}`}>
                {admin.role}
              </span>
            </td>
            <td>
              {admin.isActive ? (
                <span className="badge bg-success">Yes</span>
              ) : (
                <span className="badge bg-secondary">No</span>
              )}
            </td>
            <td>
              <button
                className="btn btn-sm btn-primary me-2"
                onClick={() => navigate(`/admin/edit/${admin._id}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => handleResetPassword(admin._id)}
              >
                Reset
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(admin._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        emptyMessage="No admins found."
      />
    </DashboardLayout>
  );
}
