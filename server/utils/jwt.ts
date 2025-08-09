import jwt from "jsonwebtoken";
import { JwtPayload } from "~/types/user.types";

const JWT_SECRET = process.env.JWT_SECRET;

export const signToken = (payload: Omit<JwtPayload, "exp">): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
};
