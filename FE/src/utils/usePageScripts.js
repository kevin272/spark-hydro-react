// utils/usePageScripts.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageScripts(initFn) {
  const location = useLocation(); // detects route change

  useEffect(() => {
    // Run page-specific scripts on every route change
    if (initFn) initFn();
  }, [location.pathname, initFn]);
}
