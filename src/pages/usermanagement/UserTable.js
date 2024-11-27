import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper, Button } from "@mui/material";
import { mockApi } from "../../services/mockApi";
import EditUserModal from "./EditUserModal";
import UserActions from "./UserActions";
import AddUserModal from "./AddUserModal";

const UserTable = ({filteredUsers}) => {
  const [users, setUsers] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "Editor", status: "Active" });
  useEffect(() => {
    mockApi.fetchUsers().then((fetchedUsers) => {
      setUsers(fetchedUsers);
    });
  }, []);

  const handleDelete = (userId) => {
    mockApi.deleteUser(userId).then(() => {
      setUsers((prev) => prev.filter((user) => user.id !== userId));
    });
  };

  const handleAddUser = () => {
    mockApi.addUser(newUser).then((addedUser) => {
      setUsers((prev) => [...prev, addedUser]);
      setNewUser({ name: "", email: "", role: "Editor", status: "Active" });
      setOpenAddModal(false);
    });
  };

  const handleEditUser = () => {
    if (selectedUser) {
      setUsers((prev) =>
        prev.map((user) => (user.id === selectedUser.id ? selectedUser : user))
      );
      setOpenEditModal(false);
    }
  };

  const handleDeleteSelected = () => {
    setUsers((prev) => prev.filter((user) => !selectedUsers.includes(user.id)));
    setSelectedUsers([]);
  };

  const handleActivateSelected = () => {
    setUsers((prev) =>
      prev.map((user) =>
        selectedUsers.includes(user.id) ? { ...user, status: "Active" } : user
      )
    );
    setSelectedUsers([]);
  };

  return (
    <>
      <UserActions
        onAddUser={() => setOpenAddModal(true)}
        onDeleteSelected={handleDeleteSelected}
        onActivateSelected={handleActivateSelected}
        selectedUsers={selectedUsers}
      /><TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  checked={selectedUsers?.length === users?.length}
                  onChange={() =>
                    users.length === selectedUsers?.length
                      ? setSelectedUsers([]) // Deselect all
                      : setSelectedUsers(users.map((user) => user.id)) // Select all
                  }
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedUsers?.includes(user.id)}
                    onChange={() => setSelectedUsers(users)}
                  />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setSelectedUser(user);
                      setOpenEditModal(true);
                    }}
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(user.id)}
                    style={{ marginRight: "10px" }}
                  >
                    Delete
                  </Button>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditUserModal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        onEditUser={handleEditUser}
      />
      <AddUserModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        newUser={newUser}
        setNewUser={setNewUser}
        onAddUser={handleAddUser}
      />
    </>

  );
};

export default UserTable;
