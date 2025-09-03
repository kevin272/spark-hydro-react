import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => (
  <div className="breadcumb-wrapper" data-bg-src="https://www.sparkhydro.com/wp-content/uploads/2024/11/imager-3.png">
    <div className="container">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">{title}</h1>
        <ul className="breadcumb-menu">
          <li><Link to="/">Home</Link></li>
          <li>{title}</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Breadcrumb;
