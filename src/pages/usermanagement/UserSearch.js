import React from "react";
import { TextField } from "@mui/material";

const UserSearch = ({ query, onSearchChange }) => (
  <TextField
    label="Search by Name, Email, or Status"
    variant="outlined"
    fullWidth
    value={query}
    onChange={(e) => onSearchChange(e.target.value.toLowerCase())}
    style={{ marginBottom: "20px" }}
  />
);

export default UserSearch;
