import NewCoursePage from "@/components/admin/new-course-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create a new course",
};
export default function Page() {
  return <NewCoursePage />;
}
