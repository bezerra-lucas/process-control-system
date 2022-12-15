import React, { useState, useContext } from "react";

import Alert from "../components/Alert";

const AlertContext = React.createContext(false);
const AlertUpdateContext = React.createContext({
  toggleAlertState: () => {},
});

export function useAlertContext() {
  return useContext(AlertContext);
}

export function useAlertUpdateContext() {
  return useContext(AlertUpdateContext);
}

export function AlertProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [AlertState, setAlertState] = useState(false);

  function toggleAlertState() {
    setAlertState(!AlertState);
    console.log(AlertState);
  }

  return (
    <AlertContext.Provider value={AlertState}>
      <AlertUpdateContext.Provider value={{ toggleAlertState }}>
        {/* <Alert /> */}
        {children}
      </AlertUpdateContext.Provider>
    </AlertContext.Provider>
  );
}
