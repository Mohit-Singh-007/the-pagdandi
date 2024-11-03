"use server";

import { createUser, getUsers } from "@/db/data-service";
import { signIn, signOut } from "@/lib/auth";
import { compare } from "bcryptjs";

async function signInAction(): Promise<void> {
  const res = await signIn("google", { redirect: false });
  if (res?.error) {
    console.error("Sign-in error:", res.error);
  } else {
    console.log("Signed in successfully!");
  }
}

async function signOutAction(): Promise<void> {
  await signOut({ redirect: false });
  console.log("Signed out successfully");
}

export const registerUser = async (formdata: FormData) => {
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;
  const confirmPassword = formdata.get("confirmPassword") as string;

  const existingUser = await getUsers(email);

  if (existingUser) {
    return { error: "User already exists" };
  }

  const provider = "Credentials"; // Default provider value

  const user = await createUser({ email, password, provider, role: "user" }); // Create new user
  if (!user) {
    return { error: "Error creating user" };
  }

  return { message: "Registration successful" };
};

export const loginUser = async (formdata: FormData) => {
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;

  const user = await getUsers(email);

  if (!user || !user.password) {
    return { error: "Invalid credentials" };
  }

  const isValidPassword = await compare(password, user.password);

  if (!isValidPassword) {
    return { error: "Invalid credentials" };
  }

  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  return { message: "Logged in Successfully" };
};
