import bcrypt from "bcryptjs";
import { supabase } from "../lib/supabase";

export async function getUsers(email) {
  const { data, error } = await supabase
    .from("users")
    .select("email, role, password")
    .eq("email", email)
    .single();

  if (error) {
    console.error("Error in getUsers(email):", error.message);
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
    return { error: error.message };
  }

  return { message: "User created successfully", user: data };
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

  return user;
}

export async function loginUser(email, password) {
  console.log(email);
  // Fetch user with matching email
  const { data, error } = await supabase
    .from("users")
    .select("email, password")
    .eq("email", email)
    .maybeSingle();

  if (error) {
    console.error("Login error:", error.message);
    return { error: "Invalid credentials" };
  }

  if (!data) {
    // No user found with the provided email
    console.log(`No user found for email: ${email}`);
    return { error: "Invalid credentials" };
  }

  console.log(`Fetched user: ${JSON.stringify(data)}`);

  // Ensure we have a hashed password in data
  const isPasswordValid = await bcrypt.compare(password, data.password);
  console.log(`Password valid: ${isPasswordValid}`);

  if (!isPasswordValid) {
    return { error: "Invalid credentials" };
  }

  return { message: "Login successful", user: { email: data.email } };
}
