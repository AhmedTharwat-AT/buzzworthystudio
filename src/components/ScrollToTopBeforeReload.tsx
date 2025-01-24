"use client";

import { useEffect } from "react";

function ScrollToTopBeforeReload() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return null;
}

export default ScrollToTopBeforeReload;
