import FullLengthsPage from "@/components/dashboard/full-lengths-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Lengths",
};

export default function Page() {
  return <FullLengthsPage />;
}
