import ScoreReportRouter from "@/components/dashboard/score-report-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Score Report",
  description: "Detailed analysis of your exam performance",
};

export default function Page() {
  return <ScoreReportRouter />;
}
