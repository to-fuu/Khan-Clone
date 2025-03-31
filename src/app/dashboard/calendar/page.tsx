import CalendarPage from "@/components/dashboard/calendar-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar",
};

export default function Page() {
  return <CalendarPage />;
}
