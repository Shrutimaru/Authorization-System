import React from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const EditUserModal = ({ open, onClose, selectedUser, setSelectedUser, onEditUser }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: 24,
          width: "400px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Edit User
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={selectedUser?.name || ""}
          onChange={handleInputChange}
          fullWidth
          style={{ marginBottom: "15px" }}
        />
        <TextField
          label="Email"
          name="email"
          value={selectedUser?.email || ""}
          onChange={handleInputChange}
          fullWidth
          style={{ marginBottom: "15px" }}
        />
        <TextField
          label="Role"
          name="role"
          value={selectedUser?.role || ""}
          onChange={handleInputChange}
          fullWidth
          style={{ marginBottom: "15px" }}
        />
        <TextField
          label="Status"
          name="status"
          value={selectedUser?.status || ""}
          onChange={handleInputChange}
          fullWidth
          style={{ marginBottom: "15px" }}
        />
        <Box style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={onEditUser}
            style={{ marginRight: "10px" }}
          >
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
