const roles = ["user", "superadmin", "admin", "anonymous"] as const;
type RolesArray = typeof roles;

// type Roles = RolesArray[0] | RolesArray[1] | RolesArray[2] | RolesArray[3];
// type Roles = RolesArray[0 | 1 | 2 | 3];
type Roles1 = RolesArray[number];
type Roles2 = typeof roles[number];