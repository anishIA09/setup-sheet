"use client";

import React, { createContext, useContext, useState } from "react";
import { SidebarDesktop } from "./sidebar-desktop";
import Link from "next/link";
import {
  CirclePlusIcon,
  HomeIcon,
  LayersIcon,
  PieChartIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

const SidebarContext = createContext(null);

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("use useSidebar withing SidebarProvider.");
  }

  return context;
};

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(true);

  const contextValue = {
    open,
    setOpen,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = () => {
  return (
    <>
      <SidebarDesktop />
    </>
  );
};

export const SidebarHeader = () => {
  const { open } = useSidebar();

  const headerTextVariant = {
    open: {
      x: 0,
      opacity: 1,
    },
    closed: {
      x: -10,
      opacity: 0,
    },
  };

  return (
    <div data-slot="header" className="p-2">
      <a
        href={"/dashboard"}
        className="text-lg font-semibold text-white flex items-center gap-2"
      >
        <span className="size-9 text-base rounded-md flex items-center justify-center border border-neutral-200 shrink-0">
          IPG
        </span>
        <AnimatePresence>
          {open && (
            <motion.span
              variants={headerTextVariant}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              exit={"closed"}
            >
              MediaBrand
            </motion.span>
          )}
        </AnimatePresence>
      </a>
    </div>
  );
};

export const SidebarContent = () => {
  const pathname = usePathname();
  const { open } = useSidebar();

  const navLinks = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: HomeIcon,
    },
    {
      label: "Enter Plan",
      href: "/add-plan",
      icon: CirclePlusIcon,
    },
    {
      label: "Finance View",
      href: "/layers",
      icon: LayersIcon,
    },
    {
      label: "Update Supplier Rate and Cost",
      href: "/analytics",
      icon: PieChartIcon,
    },
  ];

  const navLabelVariant = {
    open: {
      x: 0,
      opacity: 1,
    },
    closed: {
      x: -10,
      opacity: 0,
    },
  };

  return (
    <nav className="my-2 flex-1">
      <ul className="flex flex-col gap-1">
        {navLinks.map((navLink, idx) => {
          const IconComponent = navLink.icon;

          return (
            <li key={navLink.label}>
              <a
                href={navLink.href}
                className={cn(
                  "flex items-center gap-2 px-2 h-9 rounded-md text-sm",
                  pathname === navLink.href
                    ? "bg-[linear-gradient(to_right,#863EB8,#062B8A)] text-white"
                    : "hover:bg-slate-800 hover:text-white transition-colors duration-300"
                )}
              >
                <div className="w-9 h-full flex items-center justify-center shrink-0">
                  <IconComponent size={20} />
                </div>
                <AnimatePresence>
                  {open && (
                    <motion.span
                      variants={navLabelVariant}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      exit={"closed"}
                      className="truncate" // NOTE: add this for stopping layout shit while animating
                    >
                      {navLink.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
