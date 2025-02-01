"use client";

import { createContext, useContext, useRef, useState } from "react";

const PageHeightContext = createContext<{
  pageHeight: number;
  setPageHeight: (height: number) => void;
  pageRef: React.RefObject<HTMLDivElement | null>;
} | null>(null);

export default function PageHeightProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pageHeight, setPageHeight] = useState(0);
  const pageRef = useRef<HTMLDivElement>(null);
  return (
    <PageHeightContext.Provider value={{ pageHeight, setPageHeight, pageRef }}>
      {children}
    </PageHeightContext.Provider>
  );
}

export const usePageHeight = () => {
  const context = useContext(PageHeightContext);
  if (!context)
    throw new Error("useWrapper must be used within a WrapperProvider");
  return context;
};
