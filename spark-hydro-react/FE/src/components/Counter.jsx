import React from "react";

const Counter = () => {
  return (
    <div className="counter-area">
      <div className="container">
        <div className="counter-card-wrap style2">
          {/* 128 MW+ Installed generation capacity */}
          <div className="counter-box">
            <div className="box-icon">
              <img src="assets/img/icon/counter_1_1.svg" alt="" />
            </div>
            <div className="media-body">
              <h3 className="box-number">
                <span className="counter-number">128</span>
                <span className="unit"> MW</span>
                <span className="plus">+</span>
              </h3>
              <p className="box-text mb-n1">
                Installed Generation Capacity (Tamor–Mewa)
              </p>
            </div>
          </div>

          {/* 30+ Years PPA */}
          <div className="counter-box">
            <div className="box-icon">
              <img src="assets/img/icon/counter_1_2.svg" alt="" />
            </div>
            <div className="media-body">
              <h3 className="box-number">
                <span className="counter-number">30</span>
                <span className="plus">+</span>
                <span className="unit"> Years</span>
              </h3>
              <p className="box-text mb-n1">
                PPA with Nepal Electricity Authority
              </p>
            </div>
          </div>

          {/* 500+ Jobs */}
          <div className="counter-box">
            <div className="box-icon">
              <img src="assets/img/icon/counter_1_3.svg" alt="" />
            </div>
            <div className="media-body">
              <h3 className="box-number">
                <span className="counter-number">500</span>
                <span className="plus">+</span>
              </h3>
              <p className="box-text mb-n1">
                Jobs Created (Priority to Local Communities)
              </p>
            </div>
          </div>

          {/* 25+ Years Experience */}
          <div className="counter-box">
            <div className="box-icon">
              <img src="assets/img/icon/counter_1_4.svg" alt="" />
            </div>
            <div className="media-body">
              <h3 className="box-number">
                <span className="counter-number">25</span>
                <span className="plus">+</span>
                <span className="unit"> Years</span>
              </h3>
              <p className="box-text mb-n1">
                Experience in Hydropower Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
