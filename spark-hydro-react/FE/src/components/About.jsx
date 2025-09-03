export default function About() {
  return (
    <section className="space" id="about-sec">
      <div className="container">
        <div className="row gx-0 gy-4 align-items-end">
          <div className="col-xl-7">
            <span className="sub-title">About Us</span>
            <h2 className="sec-title">Powering Nepal’s Future with Clean Hydropower</h2>
            <p>
              Spark Hydro conducts site assessments, hydrological studies,
              and environmental reviews to design solutions that balance
              reliability with sustainability. From feasibility to
              commissioning, we’re committed to powering Nepal while uplifting
              communities and protecting the environment.
            </p>
            <a href="/about" className="th-btn black-btn style1 th-icon">More About Us</a>
          </div>
          <div className="col-xl-5">
            <img
              src="https://images.unsplash.com/photo-1655921779883-748ca0cb8372"
              alt="About"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
S