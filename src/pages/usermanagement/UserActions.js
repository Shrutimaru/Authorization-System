import React from "react";
import { Button } from "@mui/material";

const UserActions = ({ onAddUser, onDeleteSelected, onActivateSelected, selectedUsers }) => (
  <div style={{ marginBottom: "20px" }}>
    <Button
      variant="contained"
      color="primary"
      onClick={onAddUser}
      style={{ marginRight: "10px" }}
    >
      Add User
    </Button>
    <Button
      variant="contained"
      color="secondary"
      onClick={onDeleteSelected}
      disabled={selectedUsers.length === 0}
      style={{ marginRight: "10px" }}
    >
      Delete Selected
    </Button>
    <Button
      variant="contained"
      color="primary"
      onClick={onActivateSelected}
      disabled={selectedUsers.length === 0}
    >
      Activate Selected
    </Button>
  </div>
);

export default UserActions;
