import React from "react";

import { SidebarProvider } from "./contexts/SidebarContext";
import { AlertProvider } from "./contexts/AlertContext";
import { AuthProvider } from "./contexts/AuthContext";

import { NotAuthedRoutes } from "./routes/UnknownRoutes";
import { useAuthContext } from "./contexts/AuthContext";

export function Providers({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const authContext = useAuthContext();
  console.log(authContext.isAuthenticated);

  if (authContext.isAuthenticated) {
    return (
      <AuthProvider>
        <AlertProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </AlertProvider>
      </AuthProvider>
    );
  } else {
    return (
      <AuthProvider>
        <NotAuthedRoutes />
      </AuthProvider>
    );
  }
}
