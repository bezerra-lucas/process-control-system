import React, { useState, useContext } from "react";

import { firebaseApp } from "./../firebase";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(firebaseApp);

const AuthContext = React.createContext({
  isAuthenticated: false,
});

export function useAuthContext() {
  return useContext(AuthContext);
}

import { NotAuthedRoutes } from "../routes/UnknownRoutes";

export function AuthProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [userState, loading, error] = useAuthState(auth);

  if (userState) {
    return (
      <AuthContext.Provider value={{ isAuthenticated: true }}>
        {children}
      </AuthContext.Provider>
    );
  } else {
    return <NotAuthedRoutes />;
  }
}
