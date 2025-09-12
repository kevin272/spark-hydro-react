const processSteps = [
  {
    number: "01",
    title: "Consultation & Feasibility Assessment",
    text: "We begin with detailed consultations, hydrological studies, and feasibility analysis to understand river flow, geography, and environmental impact.",
    img: "https://images.unsplash.com/photo-1682229190339-72404dcf2b4d?q=80&w=1181&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    number: "02",
    title: "Design & Planning",
    text: "Our engineering partners develop tailored civil, electro-mechanical, and transmission designs that balance performance, cost, and sustainability.",
    img: "https://images.unsplash.com/photo-1619759247142-b457e9e6b634?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    number: "03",
    title: "Construction & Implementation",
    text: "From headworks and tunnels to powerhouse and grid connection, we manage every stage of construction with strict quality and safety standards.",
    img: "https://images.unsplash.com/photo-1581094481644-f2ab64522498?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    number: "04",
    title: "Monitoring & Operations",
    text: "Ongoing monitoring, maintenance, and optimization ensure reliable power generation while protecting local ecosystems.",
    img: "https://www.sparkhydro.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-18-at-12.41.33-PM-1.jpeg"
  },
];

const ProcessSection = () => (
  <section className="space overflow-hidden position-relative bg-smoke2">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xxl-5 col-xl-7">
          <div className="title-area text-center pe-xl-5 ps-xl-5">
            <span className="sub-title">Our Working Process</span>
            <h2 className="sec-title">How We Deliver Sustainable Hydropower Projects</h2>
          </div>
        </div>
      </div>
      <div className="step-wrap">
        <div className="process-card_wrapp">
          {processSteps.map((step) => (
            <div key={step.number} className="process-card">
              <div className="process-image">
                <div className="box-img global-img">
                  <img src={step.img} alt={step.title} />
                </div>
                <span className="number">{step.number}</span>
              </div>
              <div className="box-content">
                <h2 className="box-title">{step.title}</h2>
                <p className="box-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
