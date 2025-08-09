import * as authController from "../../controllers/auth.controller";
import type { H3Event } from "h3";
import type { LoginBody } from "../../controllers/auth.controller";

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody<LoginBody>(event);
  return await authController.login(event, body);
});
