import AdminCoursesPage from "@/components/admin/courses-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create a new course",
};
export default function Page() {
  return <AdminCoursesPage />;
}
