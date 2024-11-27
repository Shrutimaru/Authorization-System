export const mockApi = (() => {
  let users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Inactive" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Viewer", status: "Active" },
    { id: 4, name: "David Miller", email: "david@example.com", role: "Admin", status: "Inactive" },
    { id: 5, name: "Eve Davis", email: "eve@example.com", role: "Editor", status: "Active" },
    { id: 6, name: "Frank Moore", email: "frank@example.com", role: "Viewer", status: "Inactive" },
    { id: 7, name: "Grace Lee", email: "grace@example.com", role: "Admin", status: "Active" },
    { id: 8, name: "Henry Wilson", email: "henry@example.com", role: "Editor", status: "Active" },
    { id: 9, name: "Isabelle Taylor", email: "isabelle@example.com", role: "Viewer", status: "Inactive" },
    { id: 10, name: "Jack Harris", email: "jack@example.com", role: "Admin", status: "Inactive" },
    { id: 11, name: "Katherine Clark", email: "katherine@example.com", role: "Editor", status: "Active" },
    { id: 12, name: "Liam Rodriguez", email: "liam@example.com", role: "Viewer", status: "Active" },
    { id: 13, name: "Mia Lewis", email: "mia@example.com", role: "Admin", status: "Inactive" },
    { id: 14, name: "Nathan Young", email: "nathan@example.com", role: "Editor", status: "Inactive" },
    { id: 15, name: "Olivia Walker", email: "olivia@example.com", role: "Viewer", status: "Active" },
    { id: 16, name: "Paul Allen", email: "paul@example.com", role: "Admin", status: "Active" },
    { id: 17, name: "Quinn Martinez", email: "quinn@example.com", role: "Editor", status: "Active" },
    { id: 18, name: "Rachel White", email: "rachel@example.com", role: "Viewer", status: "Inactive" },
    { id: 19, name: "Sam Scott", email: "sam@example.com", role: "Admin", status: "Active" },
    { id: 20, name: "Tina Harris", email: "tina@example.com", role: "Editor", status: "Inactive" },
    { id: 21, name: "Ursula Adams", email: "ursula@example.com", role: "Viewer", status: "Active" },
    { id: 22, name: "Victor Hall", email: "victor@example.com", role: "Admin", status: "Inactive" },
    { id: 23, name: "Wendy Allen", email: "wendy@example.com", role: "Editor", status: "Active" },
    { id: 24, name: "Xander Clark", email: "xander@example.com", role: "Viewer", status: "Active" },
    { id: 25, name: "Yvonne Perez", email: "yvonne@example.com", role: "Admin", status: "Inactive" },
    { id: 26, name: "Zachary Green", email: "zachary@example.com", role: "Editor", status: "Active" },
    { id: 27, name: "Ava Mitchell", email: "ava@example.com", role: "Viewer", status: "Inactive" },
    { id: 28, name: "Benjamin Carter", email: "benjamin@example.com", role: "Admin", status: "Active" },
    { id: 29, name: "Chloe Evans", email: "chloe@example.com", role: "Editor", status: "Inactive" },
    { id: 30, name: "Daniel Thomas", email: "daniel@example.com", role: "Viewer", status: "Active" },
    { id: 31, name: "Ella Jackson", email: "ella@example.com", role: "Admin", status: "Active" },
    { id: 32, name: "Felix King", email: "felix@example.com", role: "Editor", status: "Inactive" },
    { id: 33, name: "Gina Lee", email: "gina@example.com", role: "Viewer", status: "Active" },
    { id: 34, name: "Harrison Perez", email: "harrison@example.com", role: "Admin", status: "Inactive" },
    { id: 35, name: "Ivy Collins", email: "ivy@example.com", role: "Editor", status: "Active" },
    { id: 36, name: "James Morris", email: "james@example.com", role: "Viewer", status: "Inactive" },
    { id: 37, name: "Kylie Garcia", email: "kylie@example.com", role: "Admin", status: "Active" },
    { id: 38, name: "Liam Martin", email: "liam.martin@example.com", role: "Editor", status: "Active" },
    { id: 39, name: "Megan Wright", email: "megan@example.com", role: "Viewer", status: "Inactive" },
    { id: 40, name: "Nathan Williams", email: "nathan.williams@example.com", role: "Admin", status: "Active" },
    { id: 41, name: "Olivia Thomas", email: "olivia.thomas@example.com", role: "Editor", status: "Active" },
    { id: 42, name: "Parker Harris", email: "parker.harris@example.com", role: "Viewer", status: "Inactive" },
    { id: 43, name: "Quinn Evans", email: "quinn.evans@example.com", role: "Admin", status: "Active" },
    { id: 44, name: "Rachel King", email: "rachel.king@example.com", role: "Editor", status: "Inactive" },
    { id: 45, name: "Sophie Adams", email: "sophie.adams@example.com", role: "Viewer", status: "Active" },
    { id: 46, name: "Tommy Scott", email: "tommy.scott@example.com", role: "Admin", status: "Active" },
    { id: 47, name: "Ursula Perez", email: "ursula.perez@example.com", role: "Editor", status: "Inactive" },
    { id: 48, name: "Vera Thomas", email: "vera.thomas@example.com", role: "Viewer", status: "Active" },
    { id: 49, name: "William Miller", email: "william.miller@example.com", role: "Admin", status: "Active" },
    { id: 50, name: "Xena Johnson", email: "xena.johnson@example.com", role: "Editor", status: "Inactive" }
  ];
  

  let roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
  ];

  const delay = () => new Promise((resolve) => setTimeout(resolve, 500)); // Mock delay

  return {
    fetchUsers: async () => {
      await delay();
      return users;
    },

    addUser: async (user) => {
      await delay();
      const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1; // Generate unique ID
      const newUser = { ...user, id: newId }; // Assign new ID
      users.push(newUser); // Add user to the list
      return newUser;
    },

    updateUser: async (userId, updatedUser) => {
      await delay();
      users = users.map((user) => (user.id === userId ? { ...user, ...updatedUser } : user));
      return users.find((user) => user.id === userId);
    },

    deleteUser: async (userId) => {
      users = users.filter((user) => user.id !== userId);
      return { success: true };
    },

    fetchRoles: async () => {
      await delay();
      return roles;
    },

    addRole: async (role) => {
      await delay();
      const newId = roles.length ? Math.max(...roles.map((r) => r.id)) + 1 : 1;
      const newRole = { ...role, id: newId };
      roles.push(newRole);
      return newRole;
    },

    updateRole: async (roleId, updatedRole) => {
      await delay();
      roles = roles.map((role) => (role.id === roleId ? { ...role, ...updatedRole } : role));
      return roles.find((role) => role.id === roleId);
    },

    deleteRole: async (roleId) => {
      await delay();
      roles = roles.filter((role) => role.id !== roleId);
      return { success: true };
    },
  };
})();
