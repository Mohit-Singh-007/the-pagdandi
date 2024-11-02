import bcrypt from "bcryptjs";
import { supabase } from "../lib/supabase";
import { User } from "@supabase/supabase-js";

export async function getUsers(email) {
  const { data, error } = await supabase
    .from("users")
    .select("email , role")
    .eq("email", email)
    .single();

  if (error) {
    console.error("Error in getUsers(email)");
    return null;
  }
  return data;
}

export async function createUser({ email, password, provider, role }) {
  let hashedPassword = null;
  if (provider === "Credentials" && password) {
    hashedPassword = await bcrypt.hash(password, 10); // Hash the password
  }

  const { data, error } = await supabase
    .from("users")
    .insert({ email, password: hashedPassword, provider, role: "user" });

  if (error) {
    console.error("Error creating user:", error.message);
    return null;
  }

  console.log("User created successfully:", data);
  return data; // Returns created user data
}

export async function verifyUser(email, password) {
  const user = await getUsers(email); // Get user by email

  if (!user) {
    throw new Error("User not found");
  }

  // Compare provided password with the hashed password in the database
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  return user; // Return the user data if verification is successful
}
