"use client";
import {
  BotMessageSquare,
  ChevronsDown,
  Globe,
  Grid2X2Plus,
  LayoutDashboard,
  MapPlus,
} from "lucide-react";

export default function AboutTimeline() {
  const timelineItems = [
    {
      date: "Jan 2015",
      year: "2015",
      title: "Foundation",
      description:
        "528Prep was founded to bridge the gap in effective CARS preparation. Many students struggle with this section due to a lack of structured guidance, so we developed a targeted approach that builds critical thinking and reading comprehension skills. Through expert instruction and tailored practice, we help students tackle even the toughest passages with confidence.",
      active: true,
      icon: <MapPlus />,
    },
    {
      date: "Jun 2017",
      year: "2017",
      title: "AI Innovation",
      description:
        "Created the first AI-powered adaptive practice tool for MCAT CARS, designed to personalize learning, enhance critical reading skills, and help students master even the toughest passages.",
      active: false,
      icon: <BotMessageSquare />,
    },
    {
      date: "Mar 2020",
      year: "2020",
      title: "Global Impact",
      description:
        "Successfully helped over 10,000 students worldwide, providing expert guidance and proven strategies for MCAT CARS success.",
      active: false,
      icon: <Globe />,
    },
    {
      date: "Aug 2022",
      year: "2022",
      title: "Advanced Features",
      description:
        "Launched SkillDrills and a detailed analytics dashboard to provide targeted practice and deeper insights into MCAT CARS performance..",
      active: false,
      icon: <Grid2X2Plus />,
    },
    {
      date: "Nov 2024",
      year: "2024",
      title: "Comprehensive Platform",
      description:
        "Introduced the most comprehensive MCAT CARS prep platform, combining adaptive practice, expert strategies, and in-depth analytics.",
      active: false,
      icon: <LayoutDashboard />,
    },
  ];

  return (
    <div className="flex gap-12 items-stretch max-w-8xl mx-auto">
      <div className="w-12 p-1 bg-white/20 rounded-full">
        <div className="size-10 bg-blue-500 text-white grid place-content-center rounded-full sticky top-40 z-10 shadow-lg">
          <ChevronsDown className="size-6" />
        </div>
      </div>
      <div className="flex flex-col gap-48 py-40">
        {timelineItems.map((item, index) => (
          <div key={index} className="relative">
            <div className="size-10 bg-white text-blue-500 grid place-content-center rounded-full absolute -translate-x-23 translate-y-3 [&_svg]:size-6">
              {item.icon}
            </div>
            <p className="text-lg">{item.date}</p>
            <h3 className="text-3xl font-medium">{item.title}</h3>

            <p className="mt-6 max-w-lg text-foreground/80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
