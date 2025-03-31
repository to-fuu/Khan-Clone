import CourseEditPage from "@/components/admin/course-edit-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Course",
};
export default function Page() {
  return <CourseEditPage />;
}
