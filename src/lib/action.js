"use server";

import { signIn, signOut } from "next-auth/react";

async function signInAction() {
  const res = await signIn("google", { redirect: false });
  if (res?.error) {
    console.error("Sign-in error:", res.error);
  } else {
    console.log("Signed in successfully!");
  }
}

async function signOutAction() {
  const res = await signOut({ redirect: false });
  if (res?.error) {
    console.error("Sign-in error:", res.error);
  } else {
    console.log("Signed in successfully!");
  }
}
