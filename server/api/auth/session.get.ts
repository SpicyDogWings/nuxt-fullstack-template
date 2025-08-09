import * as authController from "../../controllers/auth.controller";
import type { H3Event } from "h3";

export default defineEventHandler((event: H3Event) => {
  return authController.session(event);
});
