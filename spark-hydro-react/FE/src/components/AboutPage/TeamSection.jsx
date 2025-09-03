const teamMembers = [
  { name: "Mr. Bhanendra Kumar Limbu", role: "Chairman", img: "assets/img/spark/Mr. Bhanendra Kumar Limbu.jpeg" },
  { name: "Sudip Kumar Chaudhary", role: "Managing Director", img: "assets/img/spark/Mr. Sudip Kumar Chaudhary.jpeg" },
  { name: "Mr. Hari Prasad Bhatta", role: "Executive Director", img: "assets/img/spark/Mr. Hari Prasad Bhatta.jpeg" },
  { name: "Mr. Ishwari Bahadur Adhikari", role: "Director", img: "assets/img/spark/Mr. Ishwari Bahadur Adhikari.jpeg" },
  { name: "Mr. Navaraj Raut", role: "Director", img: "assets/img/spark/Mr. Navaraj Raut.jpeg" },
  { name: "Mr. Baldev Chaudhary", role: "Director", img: "assets/img/spark/Mr. Baldev Chaudhary.jpeg" },
  { name: "Mrs. Smriti Limbu", role: "Director (Female)", img: "assets/img/spark/Mrs. Smiriti Limbu.jpeg" },
];

const TeamSection = () => (
  <section className="overflow-hidden space" id="team-sec">
    <div className="container">
      <div className="row justify-content-lg-between justify-content-center align-items-center">
        <div className="col-lg-6">
          <div className="title-area">
            <span className="sub-title">Team Members</span>
            <h2 className="sec-title">Meet our Professional team of Hydropower experts</h2>
          </div>
        </div>
      </div>
      <div className="team-area py-5">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="th-team team-box style2">
                <div className="box-img">
                  <img src={member.img} alt={member.name} />
                </div>
                <h3 className="box-title">{member.name}</h3>
                <span className="team-desig">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
