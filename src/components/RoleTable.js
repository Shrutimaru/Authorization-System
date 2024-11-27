import React from "react";
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const RoleTable = ({ roles, onTogglePermission }) => {
  const permissionsList = ["Read", "Write", "Delete"];

  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Role Name</TableCell>
            {permissionsList.map((permission) => (
              <TableCell key={permission} align="center">{permission}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              {permissionsList.map((permission) => (
                <TableCell key={permission} align="center">
                  <Checkbox
                    checked={role.permissions.includes(permission)}
                    onChange={() => onTogglePermission(role.id, permission)}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RoleTable;
