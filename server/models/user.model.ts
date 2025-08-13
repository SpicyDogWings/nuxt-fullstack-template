import { db } from "../utils/db";
import { users } from "../db/schema";
import { eq, and } from "drizzle-orm";
import type { User } from "~/types/user.types";
import bcrypt from "bcrypt";

export const findByCredentials = async (
  username: string,
  password: string,
): Promise<User | null> => {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.username, username))
    .limit(1);
  if (!user) return null;
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;
  return user as User;
};
