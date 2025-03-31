import ContactForm from "@/components/landing/contact/contact-form";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background padding-navbar">
      <div className="flex flex-col items-center text-center pt-16 lg:pt-32 pb-24 container max-w-8xl mx-auto gap-6">
        <h1 className="font-medium text-4xl lg:text-5xl">Contact Us</h1>
        <p className="text-muted-foreground max-w-lg mx-auto px-8">
          Have something to ask? We’re here to help! Reach out to us for any
          questions, feedback, or support.
        </p>
      </div>

      {/* Main Content with Enhanced Two-Column Layout */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Form Column - Now Prioritized */}
            <div className="lg:col-span-7 order-2 lg:order-1" id="contact-form">
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-10">
                <div className="mb-8 border-b border-gray-200 pb-8">
                  <h2 className="text-2xl font-medium mb-4">
                    Contact our team
                  </h2>
                  <p className="text-muted-foreground max-w-sm">
                    Fill out the form below, and our team will get back to you
                    within 24 hours.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>

            {/* Support Info Column */}
            <div className="lg:col-span-5 order-1 lg:order-2" id="support">
              <div className="sticky top-24">
                {/* Contact Info Cards */}
                <div className="py-8 mb-8 ">
                  <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 flex items-center">
                      Mail Support
                    </h3>
                    <p className="text-sm to-muted-foreground mb-6">
                      Email us and we will get back to you within 24 hours.
                    </p>
                    <Link
                      href={"mailto:support@528prep.com"}
                      className="underline font-medium"
                    >
                      support@528prep.com
                    </Link>

                    <hr className="my-6" />

                    <h3 className="text-xl font-medium text-gray-900 mb-2 flex items-center">
                      Office Hours
                    </h3>
                    <p className="font-medium">Mon-Fri, 9 AM–5 PM EST</p>

                    <hr className="my-6" />

                    <h3 className="text-xl font-medium text-gray-900 mb-2 flex items-center">
                      Social Media
                    </h3>
                    <p className="text-sm to-muted-foreground mb-6">
                      Follow us on social media for updates, tips, and more!
                    </p>
                    <Link href={"#"} className="underline font-medium block">
                      Twitter{" "}
                      <ArrowUpRight className="size-3 inline-block -translate-y-1" />
                    </Link>
                    <Link href={"#"} className="underline font-medium block">
                      Github{" "}
                      <ArrowUpRight className="size-3 inline-block -translate-y-1" />
                    </Link>
                    <Link href={"#"} className="underline font-medium block">
                      LinkedIn{" "}
                      <ArrowUpRight className="size-3 inline-block -translate-y-1" />
                    </Link>
                  </div>
                </div>

                {/* Promotional Cards */}
                <div className="space-y-8">
                  <div className="bg-blue-500/5 border-blue-500/50 rounded-xl p-8 border">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">
                      Try Our Platform
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Experience our comprehensive CARS prep platform with a
                      free 7-day trial. See the difference in your test
                      performance.
                    </p>
                    <Button
                      size={"lg"}
                      className="rounded-xl h-12 text-lg font-normal bg-blue-500 w-full"
                      asChild
                    >
                      <Link href="/#pricing" className="">
                        Start Free Trial
                      </Link>
                    </Button>
                  </div>

                  <div className="bg-violet-500/5 border-violet-500/50 rounded-xl p-8 border">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">
                      Watch a Demo
                    </h3>
                    <p className="text-gray-600 mb-6">
                      See our tools and features in action with a guided video
                      tour of the 528Prep platform.
                    </p>
                    <Button
                      size={"lg"}
                      variant={"outline"}
                      className="rounded-xl h-12 text-lg font-normal w-full border-violet-500 !text-violet-500 hover:bg-violet-50"
                      asChild
                    >
                      <Link href="/#" className="">
                        Watch Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
