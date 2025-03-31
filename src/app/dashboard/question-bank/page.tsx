import QuestionBankPage from "@/components/dashboard/question-bank-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Question Bank",
};

export default function Page() {
  return <QuestionBankPage />;
}
