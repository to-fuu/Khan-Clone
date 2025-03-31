"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Menu } from "lucide-react";

export default function Navigation({ "aria-label": ariaLabel = "Navigation" }) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header
      className="pt-4 2xl:pt-6 sticky top-0 z-50 h-[104px] -mb-[104px] flex"
      aria-label={ariaLabel}
    >
      <div className="mx-auto max-w-[94rem] px-4 2xl:px-0 w-full">
        <div className="w-full bg-slate-900 px-12 dark text-foreground rounded-xl lg:rounded-2xl py-2 relative overflow-hidden">
          <div className="w-80 h-16 absolute bg-violet-500 rounded-full left-1/2 -translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="flex h-16 items-center justify-between relative">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              528Prep
            </Link>

            {/* Navigation Links - Centered */}
            <nav className="flex-1 hidden lg:flex justify-center space-x-8">
              <Link
                href="/features"
                className={`text-base ${
                  isActive("/features") ? "text-white" : "text-white/80"
                } transition-colors`}
              >
                Features
              </Link>
              <Link
                href="/about-us"
                className={`text-base ${
                  isActive("/about-us") ? "text-white" : "text-white/80"
                } transition-colors`}
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className={`text-base ${
                  isActive("/contact-us") ? "text-white" : "text-white/80"
                } transition-colors`}
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className={`text-base font-medium ${
                  isActive("/faq") ? "text-white" : "text-white/80"
                } transition-colors`}
              >
                FAQ
              </Link>
            </nav>

            {/* Auth Links */}
            <div className=" items-center space-x-4 hidden lg:flex">
              <Button
                variant={"ghost"}
                className="text-base hover:!bg-white/20 !text-white hidden lg:flex"
                size={"lg"}
                asChild
              >
                <Link href="/authentication/signin">Sign In</Link>
              </Button>
              <Button
                variant={"secondary"}
                className="bg-white text-blue-500 text-base hover:!bg-blue-50"
                size={"lg"}
                asChild
              >
                <Link href="/authentication/signup">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="flex lg:hidden size-10"
                >
                  <Menu className="size-8" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="sr-only">Menu</DrawerTitle>
                </DrawerHeader>
                <nav className="flex flex-col [&_a]:py-3 [&_a]:px-6 [&_a]:text-lg">
                  <Link
                    href="/features"
                    className={`text-base hover:bg-slate-900 hover:text-white ${
                      isActive("/features")
                        ? "bg-slate-900 text-white"
                        : "text-foreground/80"
                    } transition-colors`}
                  >
                    Features
                  </Link>
                  <Link
                    href="/about-us"
                    className={`text-base hover:bg-slate-900 hover:text-white ${
                      isActive("/about-us")
                        ? "bg-slate-900 text-white"
                        : "text-foreground/80"
                    } transition-colors`}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact-us"
                    className={`text-base hover:bg-slate-900 hover:text-white ${
                      isActive("/contact-us")
                        ? "bg-slate-900 text-white"
                        : "text-foreground/80"
                    } transition-colors`}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/faq"
                    className={`text-base hover:bg-slate-900 hover:text-white ${
                      isActive("/faq")
                        ? "bg-slate-900 text-white"
                        : "text-foreground/80"
                    } transition-colors`}
                  >
                    FAQ
                  </Link>
                </nav>
                <DrawerFooter>
                  <Button
                    className="text-base bg-blue-500"
                    size={"lg"}
                    asChild
                  >
                    <Link href="/authentication/signin">Sign In</Link>
                  </Button>
                  <Button
                    variant={"outline"}
                    className="bg-white text-blue-500 text-base hover:!bg-blue-50"
                    size={"lg"}
                    asChild
                  >
                    <Link href="/authentication/signup">Sign Up</Link>
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}
