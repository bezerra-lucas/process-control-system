import React, { useState, useContext } from "react";

const SidebarContext = React.createContext(true);
const SidebarUpdateContext = React.createContext({
  toggleSidebarState: () => {},
});

export function useSidebarContext() {
  return useContext(SidebarContext);
}

export function useSidebarUpdateContext() {
  return useContext(SidebarUpdateContext);
}

export function SidebarProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [sidebarState, setSidebarState] = useState(true);

  function toggleSidebarState() {
    setSidebarState(!sidebarState);
    console.log(sidebarState);
  }

  return (
    <SidebarContext.Provider value={sidebarState}>
      <SidebarUpdateContext.Provider value={{ toggleSidebarState }}>
        {children}
      </SidebarUpdateContext.Provider>
    </SidebarContext.Provider>
  );
}
