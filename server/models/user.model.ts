import { db } from "../utils/db";
import { users } from "../db/schema";
import { eq, and } from "drizzle-orm";
import type { User } from "~/types/user.types";

export const findByCredentials = async (
  username: string,
  password: string,
): Promise<User | null> => {
  const [user] = await db
    .select()
    .from(users)
    .where(and(eq(users.username, username), eq(users.password, password)))
    .limit(1);

  return (user as User) || null;
};
