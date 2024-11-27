import React, { useState } from "react";
import RoleTable from "../components/RoleTable";
import { Button, Card, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Checkbox, FormControlLabel } from '@mui/material';

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility
  const [newRole, setNewRole] = useState({ name: "", permissions: [] }); // State for new role form data

  // Toggle permission in role
  const handleTogglePermission = (roleId, permission) => {
    setRoles((prev) =>
      prev.map((role) =>
        role.id === roleId
          ? {
              ...role,
              permissions: role.permissions.includes(permission)
                ? role.permissions.filter((perm) => perm !== permission)
                : [...role.permissions, permission],
            }
          : role
      )
    );
  };

  // Handle opening modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setNewRole({ name: "", permissions: [] }); // Reset form data on modal close
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRole((prev) => ({ ...prev, [name]: value }));
  };

  // Handle adding the new role
  const handleAddRole = () => {
    if (newRole.name && newRole.permissions.length > 0) {
      const newRoleData = {
        ...newRole,
        id: roles.length ? Math.max(roles.map((r) => r.id)) + 1 : 1, // Generate unique ID
      };
      setRoles((prev) => [...prev, newRoleData]);
      handleCloseModal(); // Close modal after adding role
    } else {
      alert("Please enter valid role name and permissions");
    }
  };

  // Handle permission checkbox changes
  const handlePermissionChange = (permission) => {
    setNewRole((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter((perm) => perm !== permission)
        : [...prev.permissions, permission],
    }));
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f6f9" }}>
      <Card style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom align="center">Role Management</Typography>
        <Button variant="contained" color="primary" onClick={handleOpenModal} style={{ marginBottom: "20px" }}>
          Add Role
        </Button>
        <RoleTable roles={roles} onTogglePermission={handleTogglePermission} />
      </Card>

      {/* Modal for Adding New Role */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Add New Role</DialogTitle>
        <DialogContent>
          <TextField
            label="Role Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={newRole.name}
            onChange={handleInputChange}
          />
          <div style={{ marginTop: "20px" }}>
            <Typography variant="h6">Permissions</Typography>
            {["Read", "Write", "Delete"].map((permission) => (
              <FormControlLabel
                key={permission}
                control={
                  <Checkbox
                    checked={newRole.permissions.includes(permission)}
                    onChange={() => handlePermissionChange(permission)}
                    name={permission}
                  />
                }
                label={permission}
              />
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddRole} color="primary">
            Add Role
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RoleManagement;
