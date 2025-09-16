import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Careers from "./pages/Careers";
import useExternalScripts from "./utils/useExternalScripts";
import Login from "./pages/Login";
import AdminDashboard from "./pages/Dashboardpages/AdminDashboard";
import GalleryDashboard from "./pages/Dashboardpages/GalleryDashboard";
import TeamDashboard from "./pages/Dashboardpages/TeamDashboard";
import GalleryForm from "./pages/Dashboardpages/GalleryForm";
import TeamForm from "./pages/Dashboardpages/TeamForm";
import AdminLayout from "./components/Dashboard/AdminLayout";
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProjectForm from "./pages/Dashboardpages/ProjectForm";
import ProjectDashboard from "./pages/Dashboardpages/ProjectDashboard";
import ProjectPage from "./pages/ProjectPage";
import ContactDashboard from "./pages/Dashboardpages/ContactDashboard";
import ProjectEdit from "./pages/Dashboardpages/ProjectEdit";
import TeamEdit from "./pages/Dashboardpages/TeamEdit";



export default function App() {
  return (
    <Router>
      <AppContent /> {/* ✅ Scripts now inside Router context */}
    </Router>
  );
}

export function AppContent() {
  // ✅ This hook is now safe, runs inside <Router>
  useExternalScripts([
    "/assets/js/vendor/jquery-3.7.1.min.js",
    "/assets/js/bootstrap.min.js",
    "/assets/js/swiper-bundle.min.js",
    "/assets/js/jquery.magnific-popup.min.js",
    "/assets/js/jquery.counterup.min.js",
    "/assets/js/circle-progress.js",
    "/assets/js/jquery-ui.min.js",
    "/assets/js/imagesloaded.pkgd.min.js",
    "/assets/js/isotope.pkgd.min.js",
    "/assets/js/nice-select.min.js",
    "/assets/js/wow.min.js",
    "/assets/js/gsap.min.js",
    "/assets/js/ScrollTrigger.min.js",
    "/assets/js/SplitText.min.js",
    "/assets/js/lenis.min.js",
    "/assets/js/main.js",
    "/assets/js/app.min.js",
  ]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Project />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<Login />} />
         <Route path="/projects/:projectId" element={<ProjectPage/>} />

        
      </Route>

      <Route element = {<AdminLayout/>}>
      <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/team" element={<TeamDashboard />} />
        <Route path="/admin/team/add" element={<TeamForm />} />
        <Route path="/admin/team/edit/:id" element={<TeamEdit />} />


        <Route path="/admin/gallery" element={<GalleryDashboard />} />
        <Route path="/admin/gallery/add" element={<GalleryForm />} />
        <Route path="/admin/projects" element={<ProjectDashboard />} />
        <Route path="/admin/contact" element={<ContactDashboard/>} />
        <Route path="/admin/projects/add" element={<ProjectForm/>} />
        <Route path="/admin/projects/edit/:id" element={<ProjectEdit/>} />

      </Route>

      <Route
        path="*"
        element={<h2 className="text-center py-5">404 - Page Not Found</h2>}
      />
    </Routes>
  );
}
