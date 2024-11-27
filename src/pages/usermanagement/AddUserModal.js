import React from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const AddUserModal = ({ open, onClose, newUser, setNewUser, onAddUser }) => (
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
        Add New User
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        fullWidth
        style={{ marginBottom: "15px" }}
      />
      <TextField
        label="Email"
        name="email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        fullWidth
        style={{ marginBottom: "15px" }}
      />
      <TextField
        label="Role"
        name="role"
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        fullWidth
        style={{ marginBottom: "15px" }}
      />
      <TextField
        label="Status"
        name="status"
        value={newUser.status}
        onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
        fullWidth
        style={{ marginBottom: "15px" }}
      />
      <Button variant="contained" color="primary" onClick={onAddUser} fullWidth>
        Add User
      </Button>
    </Box>
  </Modal>
);

export default AddUserModal;
