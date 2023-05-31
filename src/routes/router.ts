import BaseRoutes from "./base";

class Router extends BaseRoutes {
  public routes(): void {
    this.router
      .get("/api/users")
      .get("/api/users/:username/detail")
      .get("/api/users/:username/repos");
  }
}

export default new Router().router;
