import AboutTimeline from "@/components/landing/about/timeline";
import MotionDiv from "@/components/motion-div";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background padding-navbar">
      <div className="flex flex-col items-center text-center pt-16 lg:pt-32 pb-24 container max-w-8xl mx-auto gap-6">
        <h1 className="font-medium text-4xl lg:text-5xl">About Us</h1>
        <p className="text-muted-foreground max-w-lg mx-auto px-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
          sapiente deserunt voluptatem!
        </p>
      </div>

      {/* <section className="py-16 max-w-8xl mx-auto">
        <p className="max-w-6xl text-4xl font-medium leading-[1.4]">
          {`“At 528Prep, we believe MCAT CARS excellence isn’t about luck or innate ability. Our mission is to make top-tier CARS prep accessible to all, combining AI technology with proven teaching methods to help every student achieve their medical dreams.”`}
        </p>
      </section> */}

      {/* Our Journey / Timeline Section */}
      <section className="py-16 md:mx-8 bg-[linear-gradient(#14182C_0%,#170C6D_18%,#4025A4_72%,#6847E0_100%)] dark text-foreground md:rounded-4xl">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="max-w-6xl text-3xl md:text-4xl font-medium leading-[1.4] mb-16">
            {`“At 528Prep, we believe MCAT CARS excellence isn’t about luck or innate ability. Our mission is to make top-tier CARS prep accessible to all, combining AI technology with proven teaching methods to help every student achieve their medical dreams.”`}
          </p>

          {/* <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-medium">Our Journey</h2>
          </MotionDiv> */}

          <AboutTimeline />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-medium">Our Team</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mt-6">
              Meet the dedicated professionals behind 528Prep who are passionate
              about helping students excel in their MCAT CARS journey.
            </p>
          </MotionDiv>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=""
            >
              <div className="h-120 rounded-2xl overflow-hidden bg-gradient-to-r flex items-center justify-center">
                <Image
                  src={"/images/testimonials/shirish.jpg"}
                  width={500}
                  height={500}
                  alt="Japme Rodriguez"
                  className="size-full object-cover object-top"
                />
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-medium text-gray-900">
                  Dr. Sarah Johnson
                </h3>
                <p className="mb-4 text-blue-500 mt-1 font-medium">
                  Founder & CEO
                </p>
                <p className="text-gray-600">
                  Former MCAT instructor with 15+ years of experience.
                  Passionate about making CARS preparation accessible to all
                  pre-med students.
                </p>
              </div>
            </MotionDiv>

            {/* Team Member 2 */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=""
            >
              <div className="h-120 rounded-2xl overflow-hidden bg-gradient-to-r flex items-center justify-center">
                <Image
                  src={"/images/testimonials/vicky.jpg"}
                  width={500}
                  height={500}
                  alt="Japme Rodriguez"
                  className="size-full object-cover object-top"
                />
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-medium text-gray-900">
                  Michael Chen
                </h3>
                <p className="mb-4 text-blue-500 mt-1 font-medium">
                  Chief Technology Officer
                </p>
                <p className="text-gray-600">
                  AI specialist with a background in educational technology.
                  Leads the development of our adaptive learning algorithms.
                </p>
              </div>
            </MotionDiv>

            {/* Team Member 3 */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=""
            >
              <div className="h-120 rounded-2xl overflow-hidden bg-gradient-to-r flex items-center justify-center">
                <Image
                  src={"/images/testimonials/jurica.jpg"}
                  width={500}
                  height={500}
                  alt="Japme Rodriguez"
                  className="size-full object-cover object-top"
                />
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-medium text-gray-900">
                  Dr. James Rodriguez
                </h3>
                <p className="mb-4 text-blue-500 mt-1 font-medium">
                  Content Director
                </p>
                <p className="text-gray-600">
                  Former AAMC question writer with expertise in developing
                  representative CARS passages and questions that mirror the
                  real exam.
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
}
