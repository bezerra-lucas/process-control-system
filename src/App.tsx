// Components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import { SidebarProvider } from "./contexts/SidebarContext";

import { Routes } from "./routes/AuthenticatedRoutes";

import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <Sidebar />
        <Navbar />
        <Routes />
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App;
