import { auth } from "@/lib/auth";
import { Metadata } from "next";

import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function page() {
  const session = await auth();

  if (session?.user.role !== "admin") {
    redirect("/unauthorized");
  }
  return <div>admin page</div>;
}
