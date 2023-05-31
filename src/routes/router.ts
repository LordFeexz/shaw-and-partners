import Controller from "../controllers";
import { queryFilter } from "../middlewares/queryFilter";
import BaseRoutes from "./base";

class Router extends BaseRoutes {
  public routes(): void {
    this.router
      .use(queryFilter)
      .get("/api/users", Controller.getUsers)
      .get("/api/users/:username/detail", Controller.getUserByUsername)
      .get("/api/users/:username/repos");
  }
}

export default new Router().router;
