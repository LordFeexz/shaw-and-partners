import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let message: string;
  let status: number;

  switch (err.name) {
    case "Bad Request":
      message = err.msg;
      status = 400;
      break;
    default:
      message = "Internal Server Error";
      status = 500;
      break;
  }

  res.status(status).json({ message });
};
