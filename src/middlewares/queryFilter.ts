import { NextFunction, Request, Response } from "express";
import GlobalHelper from "../helpers/global";

export const queryFilter = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { query } = req;

    for (const key in query) {
      const value = query[key] as string;
      if (
        !key.toLowerCase().includes("password") &&
        GlobalHelper.ValidateChar(value)
      )
        throw {
          name: "Bad Request",
          msg: `${key} is not allowed contains symbol`,
        };
    }

    next();
  } catch (err) {
    next(err);
  }
};
