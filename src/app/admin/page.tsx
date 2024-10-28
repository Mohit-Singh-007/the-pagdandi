import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (session?.user.role !== "admin") {
    redirect("/unauthorized");
  }
  return <div>Admin page</div>;
}
