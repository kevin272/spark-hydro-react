// utils/useExternalScripts.js
import { useEffect, useRef } from "react";

export default function useExternalScripts(scripts = [], callback) {
  const loadedScripts = useRef({});

  useEffect(() => {
    let isMounted = true;

    const loadScripts = async () => {
      for (const src of scripts) {
        if (!loadedScripts.current[src]) {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = false;
            script.onload = () => resolve();
            script.onerror = () => reject(`Failed to load ${src}`);
            document.body.appendChild(script);
          });
          loadedScripts.current[src] = true;
        }
      }
      if (isMounted && callback) callback();
    };

    loadScripts();

    return () => {
      isMounted = false;
    };
  }, [scripts, callback]);
}
