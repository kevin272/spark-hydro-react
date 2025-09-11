import { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axios.config";

const baseURL = import.meta.env.VITE_API_URL.replace("/api", "");

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [error, setError] = useState(null);

  // Define priority mapping
  const priority = { "Chairman": 1, 
    "Managing Director": 2, 
    "Director": 3, 
    "Director (Female)": 4 };

  useEffect(() => {
    axiosInstance
      .get("/team")
      .then((res) => {
        const data = res.data.data || [];
        // Sort by role priority
        const sorted = data.sort(
          (a, b) => (priority[a.role] || 99) - (priority[b.role] || 99)
        );
        setTeamMembers(sorted);
      })
      .catch((err) =>
        setError(err.response?.data?.message || "Failed to load team")
      );
  }, []);

  return (
    <section className="overflow-hidden space" id="team-sec">
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="title-area">
              <span className="sub-title">Team Members</span>
              <h2 className="sec-title">
                Meet our Professional team of Hydropower experts
              </h2>
            </div>
          </div>
        </div>

        <div className="team-area py-5">
          <div className="container">
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="team-grid">
              {teamMembers.length === 0 ? (
                <p>No team members available.</p>
              ) : (
                teamMembers.map((member) => (
                  <div key={member._id} className="th-team team-box style2">
                    <div className="box-img">
                      <img
                        src={`${baseURL}${member.img}`}
                        alt={member.name}
                      />
                    </div>
                    <h3 className="box-title">{member.name}</h3>
                    <span className="team-desig">{member.role}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
