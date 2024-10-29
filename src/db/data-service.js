import { supabase } from "../lib/supabase";

export async function saveUserToDB(user) {
  const { email, name, role, image } = user;

  try {
    const { data, error } = await supabase.from("users").upsert(
      {
        name,
        email,
        image,
        role,
      },
      { onConflict: ["email"] }
    );
    if (error) {
      console.error("Error upserting user:", error);
    }

    return { data, error };
  } catch (err) {
    console.error("Unexpected error in upsertUser:", err);
    return { data: null, error: err };
  }
}
