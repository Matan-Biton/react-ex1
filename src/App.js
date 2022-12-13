import { Outlet } from "react-router-dom";
import { AuthContext } from "./providers/authContext";
import { useState } from "react";
import { Navbar } from "./components/NavBar";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
        <Navbar />
        <Outlet />
    </AuthContext.Provider>
  );
}
