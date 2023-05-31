import { NextFunction, Request, Response } from "express";
import Api from "../models";
import User from "../models/user";

export default class Controller {
  public static async getUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const since = parseInt(req.query?.since as string) || 1;
      const limit = parseInt(req.query?.limit as string) || 10;

      const user: Promise<User[] | any> = await Api.getAllUser(since, limit);

      if (!(await user).length)
        throw { name: "Not Found", msg: "Data not found" };

      if ((await user).response && (await user).response.status === 403)
        throw { name: "Forbidden", msg: "Limit Api Call" };

      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  public static async getUserByUsername(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { username } = req.params;
      const user = await Api.getUserByUsername(username);

      if ((await user).response && (await user).response.status === 404)
        throw { name: "Not Found", msg: "Data not found" };

      if ((await user).response && (await user).response.status === 403)
        throw { name: "Forbidden", msg: "Limit Api Call" };

      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}
