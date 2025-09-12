import { Outlet, useLocation } from "react-router-dom";
import HeaderLayout1 from "./HeaderLayout1";
import HeaderLayout2 from "./HeaderLayout2";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome ? <HeaderLayout2 /> : <HeaderLayout1 />}
      <Outlet />
      <Footer />
    </>
  );
}
