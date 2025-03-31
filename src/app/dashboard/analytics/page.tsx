import AnalyticsPage from "@/components/dashboard/analytics-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics",
};

export default function Page() {
  return <AnalyticsPage />;
}
