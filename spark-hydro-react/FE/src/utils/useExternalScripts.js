import { useEffect } from "react";

export default function useExternalScripts(scripts = [], callback) {
  useEffect(() => {
    let isMounted = true;

    const loadScripts = async () => {
      for (const src of scripts) {
        await new Promise((resolve, reject) => {
          const existing = document.querySelector(`script[src="${src}"]`);
          if (existing) return resolve();

          const script = document.createElement("script");
          script.src = src;
          script.async = false; // important for order
          script.onload = () => resolve();
          script.onerror = () => reject(`Failed to load ${src}`);
          document.body.appendChild(script);
        });
      }
      if (isMounted && callback) callback(); // Run template init after all scripts loaded
    };

    loadScripts();

    return () => {
      isMounted = false;
    };
  }, [scripts, callback]);
}
