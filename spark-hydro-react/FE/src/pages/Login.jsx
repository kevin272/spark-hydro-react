import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../config/axios.config";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login", { username, password });
      localStorage.setItem("token", res.data.data.token); // Save JWT
      navigate("/admin"); // Redirect to Admin Panel
    } catch (err) {
      setError(err.data?.message || "Invalid login");
    }
  };

  return (
    <section className="container py-5">
      <h2 className="mb-4">Admin Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </section>
  );
}
