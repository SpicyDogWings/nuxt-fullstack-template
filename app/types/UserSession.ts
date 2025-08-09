export interface UserSession {
  username: string;
  name: string;
  token: string;
  email?: string; // El '?' indica que el campo es opcional
  role?: "admin" | "user"; // Puedes usar uniones para roles
}
