import React from "react";
import { Form } from "react-bootstrap";

const Navbar = ({ toggleView, isAdminView }) => {
  return (
    <nav style={{ padding: "10px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Form.Switch
          id="admin-user-toggle"
          label={isAdminView ? "Admin" : "User"}
          checked={isAdminView}
          onChange={toggleView}
          style={{ marginLeft: "auto" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
