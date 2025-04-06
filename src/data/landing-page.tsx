import type {
  DetailedFeature,
  Feature,
  PricingPlan,
  Stat,
  Testimonial,
} from "@/types/landing-page";
import {
  BookOpen,
  Bot,
  Calendar,
  ChartArea,
  ChartBarIncreasing,
  Circle,
  Contact,
  Headset,
  Key,
  Route,
  Sparkles,
  Video,
} from "lucide-react";
import { BsBarChart, BsChatDots, BsLightningCharge } from "react-icons/bs";
import { FaBookOpen, FaChartLine } from "react-icons/fa";

export const landingPageData = {
  hero: {
    title: (
      <>
        <span className="text-gradient-primary">Boost</span> Your MCAT CARS
        Score with 528Prep
      </>
    ),
    subtitle:
      "Simply The Best - Representative, Rigorous, with Proven Strategies",
    primaryCTA: {
      text: "Start Free Trial",
      href: "/authentication/signup?trial=true",
    },
    secondaryCTA: {
      text: "See How It Works",
      href: "/authentication/signup?buy=true",
    },
    imagePlaceholder:
      "Hero Image: Students studying with focused determination",
  },
  features: [
    {
      title: "Unmatched Adaptive Practice",
      description:
        "Your CARS journey involves mastering a diﬀerent kind of analysis. Our platform identifies precisely where you struggle in adapting your critical thinking skills to CARS passages, allowing you to build personalized practice sets that target your specific challenge areas. Transform weaknesses into strengths through focused practice!",
      icon: <BsLightningCharge className="w-6 h-6" />,
      image: "/images/dashboard.png",
    },
    {
      title: "No Gimmicks, Just Results",
      description:
        "Adapting your skills for CARS shouldn't be complicated by confusing strategies or acronyms promising shortcuts. We ditch the gimmicks. Our core strategy focuses purely on skill mastery through a clear, structured path. This step-by-step approach targets the essential abilities needed to master CARS.",
      icon: <BsBarChart className="w-6 h-6" />,
      image: "/images/dashboard.png",
      component: (
        <div className="flex flex-col divide-y bg-background rounded-lg border shadow-lg shadow-black/5">
          <div className="py-3 px-4 scale-105  text-violet-600 font-medium flex items-center justify-between bg-background z-10 shadow-xl shadow-violet-400/10 rounded-t-lg border border-violet-200">
            <span>1. You </span> <span>132</span>
          </div>
          <div className="py-3 px-4 flex items-center justify-between text-muted-foreground">
            <span>2. John Doe </span> <span>126</span>
          </div>
          <div className="py-3 px-4 flex items-center justify-between text-muted-foreground">
            <span>3. Mary Smith </span> <span>125</span>
          </div>
        </div>
      ),
    },
    {
      title: "Active Learning + AI Insight",
      description:
        "Forget passive reading! Our interactive SkillDrills put you in the driver's seat, letting you actively practice specific CARS skills — like evaluating arguments — in manageable chunks. This approach allows pinpoint focus so you can build mastery step by step through targeted exercices",
      icon: <BsChatDots className="w-6 h-6" />,
      image: "/images/dashboard.png",
      component: (
        <div className="relative text-violet-500 -mx-8">
          <svg
            className="w-full"
            viewBox="0 0 400 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_321_207)">
              <path
                d="M-1387.5 58.446L-1400 44.8625V217H400V8.00001H385.5C373 9.12304 354.5 8.00001 325 9C300 3.84916 275 5.05575 250 24.495C225 43.9342 200 95.3604 175 98.6963C150 102.032 125 57.2776 99.9999 55.5613C74.9999 53.845 50 95.1667 25 116.495C0 137.822 -25 139.156 -50 143.776C-75 148.397 -100 156.304 -125 150.195C-150 144.086 -175 123.96 -200 126.823C-225 129.685 -250 155.536 -275 160.642C-300 165.748 -325 150.11 -350 138.283C-375 126.455 -400 118.439 -425 98.1903C-450 77.9418 -475 45.4614 -500 37.896C-525 30.3306 -550 47.6803 -575 59.4375C-600 71.1948 -625 77.3597 -650 70.2032C-675 63.0467 -700 42.5688 -725 45.1127C-750 47.6565 -775 73.2221 -800 75.606C-825 77.9899 -850 57.192 -875 40.222C-900 23.2519 -925 10.1098 -950 18.5179C-975 26.9261 -1000 56.8846 -1025 85.1597C-1050 113.435 -1075 140.027 -1100 139.189C-1125 138.352 -1150 110.086 -1175 101.768C-1200 93.4497 -1225 105.08 -1250 112.504C-1275 119.928 -1300 123.146 -1325 111.171C-1350 99.1965 -1375 72.0295 -1387.5 58.446Z"
                fill="url(#paint0_linear_321_207)"
              />
              <path
                d="M-1400 44.8624L-1387.5 58.4459C-1375 72.0294 -1350 99.1964 -1325 111.171C-1300 123.146 -1275 119.928 -1250 112.504C-1225 105.08 -1200 93.4497 -1175 101.768C-1150 110.086 -1125 138.352 -1100 139.189C-1075 140.027 -1050 113.435 -1025 85.1597C-1000 56.8845 -975 26.926 -950 18.5179C-925 10.1097 -900 23.2519 -875 40.2219C-850 57.192 -825 77.9898 -800 75.606C-775 73.2221 -750 47.6565 -725 45.1127C-700 42.5688 -675 63.0467 -650 70.2032C-625 77.3597 -600 71.1948 -575 59.4375C-550 47.6802 -525 30.3306 -500 37.896C-475 45.4614 -450 77.9418 -425 98.1903C-400 118.439 -375 126.455 -350 138.283C-325 150.11 -300 165.748 -275 160.642C-250 155.536 -225 129.685 -200 126.823C-175 123.96 -150 144.086 -125 150.195C-100 156.304 -75 148.397 -50 143.776C-25 139.156 0 137.822 25 116.494C50 95.1667 74.9999 53.8449 99.9999 55.5613C125 57.2776 150 102.032 175 98.6962C200 95.3604 225 43.9342 250 24.495C275 5.05573 298.975 8 324.5 8C355 8 400 8 400 8"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_321_207"
                x1="373.39"
                y1="14"
                x2="373.39"
                y2="149"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1B41FF" stopOpacity="0.12" />
                <stop offset="1" stopColor="#1B41FF" stopOpacity="0" />
              </linearGradient>
              <clipPath id="clip0_321_207">
                <rect
                  width="400"
                  height="150"
                  fill="white"
                  transform="translate(0 0.25)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="absolute bg-background rounded-lg font-medium -top-2 right-26 px-2 py-1 shadow-xl shadow-violet-400/20">
            132 Points
          </div>
          <div className="size-4  rounded-full bg-white text-violet-500 absolute right-18 top-0 ring-4 ring-current shadow-lg" />
        </div>
      ),
    },
  ] as Feature[],
  detailedFeatures: [
    {
      icon: <Calendar className="size-8" />,
      title: "Custom Study Scheduling",
      description:
        "Create a personalized study plan tailored to your timeline and goals with our automated scheduler.",
    },
    {
      icon: <Video className="size-8" />,
      title: "Engaging Videos",
      description:
        "Reinforce your understanding with engaging, easy-to-follow video lessons designed to simplify complex concepts.",
    },
    {
      icon: <ChartBarIncreasing className="size-8" />,
      title: "Detailed Analytics",
      description:
        "Track your progress with detailed analytics, identifying areas for improvement and performance trends by skill.",
    },
    {
      icon: <Bot className="size-8" />,
      title: "AI-Powered Tutor",
      description:
        "Get step-by-step guidance from our AI-powered tutor, helping you understand explanations and improve faster.",
    },
    {
      icon: <BookOpen className="size-8" />,
      title: "Adaptive QBank",
      description:
        "Access 550+ passages and 150+ SkillDrills to create custom practice sessions tailored to your needs.",
    },
  ] as DetailedFeature[],
  stats: [
    {
      label: "Practice Passages",
      value: "550+",
      icon: <FaBookOpen className="w-6 h-6" />,
    },
    {
      label: "SkillDrills",
      value: "150+",
      icon: <BsLightningCharge className="w-6 h-6" />,
    },
    {
      label: "Average Score Improvement",
      value: "+4pts",
      icon: <BsBarChart className="w-6 h-6" />,
    },
    {
      label: "Student Success Rate",
      value: "94%",
      icon: <FaChartLine className="w-6 h-6" />,
    },
  ] as Stat[],
  pricingPlans: [
    {
      name: "Starter Plan",
      price: 0,
      features: [
        {
          title: "Full Viewable Access (Premium Features Blurred)",
          icon: <></>,
        },
        {},
        {
          title: "Access to Khan Academy CARS Passages",
          icon: <Key />,
        },
        {
          title: "3 AI-Tutor Messages Per Day",
          icon: <Bot />,
        },
      ],
    },
    {
      name: "Practice Passages",
      price: 49,
      features: [
        {
          title: "Evereything in Always Free plus:",
          icon: <></>,
        },
        {
          title: "Full Access to Khan Academy Passages",
          icon: <Key />,
        },
        {
          title: "Access to 528Prep CARS Passages",
          icon: <Key />,
        },
        {
          title: "Basic Analytics",
          icon: <ChartArea />,
        },
      ],
    },
    {
      name: "Practice with AI",
      price: 99,
      featured: true,
      features: [
        {
          title: "Everything in Practice Passages plus:",
          icon: <></>,
        },
        {
          title: "Full Access to 528Prep CARS Passages",
          icon: <Key />,
        },
        {
          title: "Unlimited AI-Tutor Messages",
          icon: <Bot />,
        },
        {
          title: "Advanced Analytics",
          icon: <ChartArea />,
        },
        {
          title: "Custom Study Plans",
          icon: <Route />,
        },
      ],
    },
    {
      name: "Practice and Strategy",
      price: 149,
      features: [
        {
          title: "Everything in Practice with AI plus:",
          icon: <></>,
        },
        {
          title: "1-on-1 Strategy Sessions",
          icon: <Contact />,
        },
        {
          title: "Premium Study Materials",
          icon: <Sparkles />,
        },
        {
          title: "Priority Support",
          icon: <Headset />,
        },
      ],
    },
  ] as PricingPlan[],
  testimonials: [
    {
      name: "Sarah L",
      achievement: "CARS Score: 130",
      quote:
        "The AI tutor was like having a personal CARS coach available 24/7. It helped me identify patterns in my mistakes that I never noticed before.",
      avatar: "/images/testimonials/jassir.jpg",
    },
    {
      name: "Michael R",
      achievement: "CARS Score: 129",
      quote:
        "528Prep is refreshingly straightforward. No complicated methods, just clear strategies that actually work.",
      avatar: "/images/testimonials/albert.jpg",
    },
    {
      name: "Priya K",
      achievement: "CARS Score: 131",
      quote:
        "The adaptive practice feature is a game-changer. It helped me focus on my weak areas and saw my score jump 4 points in just weeks",
      avatar: "/images/testimonials/jurica.jpg",
    },
    {
      name: "Chris L",
      achievement: "CARS Score: 126",
      quote:
        "I never realized how many patterns I was missing in my mistakes until I started using the AI tutor. It's like having a CARS coach by my side 24/7, and it made a huge difference in how I approach passages.",
      avatar: "/images/testimonials/vicky.jpg",
    },
    {
      name: "Alex M",
      achievement: "CARS Score: 127",
      quote:
        "The AI tutor felt like a 24/7 personal coach, helping me spot mistakes I never noticed.",
      avatar: "/images/testimonials/jurica.jpg",
    },
    {
      name: " Taylor S",
      achievement: "CARS Score: 131",
      quote:
        "The AI tutor functioned as an ever-available CARS coach, providing me with personalized insights into my reasoning errors. By identifying recurring patterns in my mistakes, it significantly enhanced my analytical skills and overall performance.",
      avatar: "/images/testimonials/jurica.jpg",
    },
    {
      name: "Emily R",
      achievement: "CARS Score: 130",
      quote:
        "The AI tutor provided invaluable support, acting as a personal CARS coach available anytime I needed it. It not only helped me refine my reasoning skills but also made me aware of recurring mistakes I had never noticed before. This insight drastically improved my performance and confidence.",
      avatar: "/images/testimonials/shirish.jpg",
    },

    {
      name: "Jordan T",
      achievement: "CARS Score: 129",
      quote:
        "Having the AI tutor was like having a dedicated CARS coach on demand. It helped me recognize patterns in my mistakes, improving my approach significantly.",
      avatar: "/images/testimonials/jurica.jpg",
    },
  ] as Testimonial[],
};
