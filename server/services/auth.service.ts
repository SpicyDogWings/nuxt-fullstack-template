import * as userModel from "../models/user.model";
import { setCookie, createError, type H3Eventm } from "h3";
import type { User } from "~/types/user.types";

export const login = async (
  event: H3Event,
  username: string,
  password: string,
) => {
  const user: User | null = await userModel.findByCredentials(
    username,
    password,
  );
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Usuario o contraseña incorrectos",
    });
  }
  const token = signToken({ id: user.id, username: user.username });
  return { token };
};
