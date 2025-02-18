const routes = {
  home: "/",
  admin: "/admin",
  users: "/users",
} as const;

type RoutesOf = (typeof routes)[keyof typeof routes];

const goToRoute = (route: RoutesOf) => {}

goToRoute('/');
goToRoute(routes.users);
