"use client";

import { useSidebar } from "@/components/sidebar/sidebar";
import { SidebarIcon } from "lucide-react";
import React from "react";

export const DashboardHeader = () => {
  const { setOpen } = useSidebar();

  return (
    <header className="h-[60px] bg-white text-neutral-800 flex items-center justify-between px-4 py-2 border-b border-neutral-300 shadow-sm">
      <button
        onClick={() => setOpen((prevState) => !prevState)}
        className="size-7 hover:bg-neutral-300 flex items-center justify-center rounded-md transition-colors duration-300"
      >
        <SidebarIcon size={22} />
      </button>
      <div className="flex items-center gap-2">
        <p className="text-lg font-semibold">USER_ID: 1234456</p>
        <button className="size-10 rounded-md bg-neutral-500"></button>
      </div>
    </header>
  );
};
