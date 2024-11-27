import React, { useState, useEffect } from "react";
import UserTable from "./UserTable";
import UserSearch from "./UserSearch";
import { mockApi } from "../../services/mockApi";
import { Card, Typography } from "@mui/material";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  

  useEffect(() => {
    mockApi.fetchUsers().then((fetchedUsers) => {
      setUsers(fetchedUsers);
      setFilteredUsers(fetchedUsers);
    });
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setFilteredUsers(
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query) ||
          user.status.toLowerCase().includes(query)
      )
    );
  };


  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f6f9" }}>
      <Card style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom align="center">
          User Management
        </Typography>
        <UserSearch query={searchQuery} onSearchChange={handleSearchChange} />
        <UserTable filteredUsers={filteredUsers}/>
      </Card>
    </div>
  );
};

export default UserManagement;
