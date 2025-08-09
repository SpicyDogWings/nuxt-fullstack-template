import { deleteCookie, createError } from "h3";

export default defineEventHandler(async (event) => {
  try {
    deleteCookie(event, "auth_token", {
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    deleteCookie(event, "auth.token", {
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return {
      message: "Logout exitoso",
    };
  } catch (error) {
    console.error("Error al hacer logout:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error interno al cerrar sesión",
    });
  }
});
