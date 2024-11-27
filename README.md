
Role-Based Access Control (RBAC) Dashboard
==========================================

Project Overview
----------------
This project is a Role-Based Access Control (RBAC) Dashboard built with React and Material-UI. 
The dashboard provides administrators with tools to manage users, roles, and permissions. It ensures 
a secure, intuitive, and visually appealing interface for performing CRUD operations, role assignment, 
and dynamic permissions management. Additional features such as sorting, filtering, searching, 
and workflows enhance usability and efficiency.

Key Features
------------
### User Management
- Add, edit, delete users.
- Assign roles and toggle user status (Active/Inactive).
- Sort, filter, and search users for efficient management.
- Bulk user selection with action workflows.

### Role Management
- Add, edit, delete roles dynamically.
- Assign and toggle permissions (Read, Write, Delete) per role.
- Display permissions clearly with checkboxes.
- Includes workflows for bulk role management.

### Innovative Workflows
- Perform batch actions on users and roles.
- Dynamic modals for user-friendly interactions.
- Visual cues to enhance accessibility and navigation.

Installation
------------
### Prerequisites
- Node.js installed (v14 or higher).
- Package manager: npm or yarn.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Shrutimaru/Authorization-System.git
   ```
2. Navigate to the project folder:
   ```bash
   cd rbac-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

The application will be available at http://localhost:3000.

Folder Structure
----------------
rbac-dashboard/
│
├── public/                # Static assets
│
├── src/
│   ├── components/        # Reusable UI components (e.g., UserTable, RoleTable)
│   ├── pages/             # Pages (UserManagement, RoleManagement)
│   ├── services/          # Mock API and data management
│   ├── styles/            # CSS and Material-UI styles
│   ├── App.js             # Main application file
│   ├── index.js           # Entry point
│
├── package.json           # Project dependencies and scripts
├── README.md              # Documentation

Usage
-----
### 1. User Management
- **Add a User**: Click the "Add User" button to open a modal. Fill out the form and save.
- **Edit a User**: Click the "Edit" button next to a user to update their details.
- **Delete a User**: Click the "Delete" button to remove a user.
- **Search, Sort, and Filter**: Use the search bar or dropdowns to refine the user list.

### 2. Role Management
- **Add a Role**: Use the "Add Role" button to create a new role.
- **Edit Permissions**: Toggle permissions (Read, Write, Delete) using the checkboxes.
- **Delete a Role**: Remove a role using the delete button.

### 3. Innovative Workflows
- Select multiple users/roles for bulk actions.
- Save and restore state between page reloads for continuity.

Technologies Used
-----------------
- **Frontend**: React, Material-UI.
- **State Management**: React hooks (useState, useEffect).
- **Mock API**: Custom simulated API for data management.
- **Styling**: Material-UI components and custom CSS.


