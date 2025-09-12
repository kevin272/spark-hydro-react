import { Outlet, useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";


export default function AdminLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}


<AdminHeader
  logo={"logo.svg"}
  logoAlt="Company Logo"
/>

      {/* Main content */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* Footer */}
      <AdminFooter />
    </div>
  );
}
