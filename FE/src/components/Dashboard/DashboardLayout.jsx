export default function DashboardLayout({ title, actions, children }) {
  return (
    <div className="container-fluid py-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">{title}</h2>
        <div>{actions}</div>
      </div>

      {/* Content Section */}
      <div className="card shadow-sm border-0 rounded-3">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
