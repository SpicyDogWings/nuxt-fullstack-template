import * as authService from "../services/auth.service";
import { createError, type H3Event } from "h3";

export interface LoginBody {
  username: string;
  password: string;
}

export const login = async (
  event: H3Event,
  { username, password }: LoginBody,
) => {
  if (!username || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Usuario y contraseña son obligatorios",
    });
  }
  const { token } = await authService.login(event, username, password);
  return {
    message: "Usuario autenticado",
    token,
  };
};

export const session = (event: H3Event) => {
  const token = getCookie(event, "auth.token");
  if (!token) return { authenticated: false };
  try {
    verifyToken(token);
    return { authenticated: true };
  } catch {
    return { authenticated: false };
  }
};
