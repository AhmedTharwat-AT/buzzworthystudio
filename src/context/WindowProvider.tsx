"use client";

import { createContext, use, useEffect, useState } from "react";

const WindowContext = createContext<{
  windowDim: { width: number; height: number };
  setWindowDim: React.Dispatch<
    React.SetStateAction<{ width: number; height: number }>
  >;
} | null>(null);

function WindowProvider({ children }: { children: React.ReactNode }) {
  const [windowDim, setWindowDim] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setWindowDim({ width: window.innerWidth, height: window.innerHeight });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowContext.Provider value={{ windowDim, setWindowDim }}>
      {children}
    </WindowContext.Provider>
  );
}

export function useWindow() {
  const context = use(WindowContext);
  if (context === null) {
    throw new Error("useWindow must be used within a WindowProvider");
  }
  return context;
}

export default WindowProvider;
