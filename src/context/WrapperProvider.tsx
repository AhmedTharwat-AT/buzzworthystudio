"use client";

import { createContext, useContext, useRef, useState } from "react";

const WrapperContext = createContext<{
  pageHeight: number;
  setPageHeight: (height: number) => void;
  contentRef: React.RefObject<HTMLDivElement | null>;
} | null>(null);

export default function WrapperProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pageHeight, setPageHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <WrapperContext.Provider value={{ pageHeight, setPageHeight, contentRef }}>
      {children}
    </WrapperContext.Provider>
  );
}

export const useWrapper = () => {
  const context = useContext(WrapperContext);
  if (!context)
    throw new Error("useWrapper must be used within a WrapperProvider");
  return context;
};
