import AdminDashboard from "@/components/admin/admin-dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};
export default function Page() {
  return <AdminDashboard />;
}
