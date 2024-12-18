import React, { useState } from "react";
import AdminView from "./pages/AdminView";
import UserView from "./pages/UserView";
import NavbarComponent from "./components/Navbar/navbar";

const App = () => {
  const [view, setView] = useState("admin");
  const toggleView = () => {
    setView(view === "admin" ? "user" : "admin");
  };

  return (
    <div>
      <NavbarComponent toggleView={toggleView} isAdminView={view === "admin"} />
      <h2>Inventory Stats</h2>
      <div style={{ marginTop: "20px" }}>
        {view === "admin" ? <AdminView /> : <UserView />}
      </div>
    </div>
  );
};

export default App;
