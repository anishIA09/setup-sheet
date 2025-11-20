"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { SidebarContent, SidebarHeader, useSidebar } from "./sidebar";

export const SidebarDesktop = () => {
  const { open } = useSidebar();

  const sidebarVariant = {
    open: {
      width: "16rem",
    },
    closed: {
      width: "4.5rem",
    },
  };

  return (
    <motion.aside
      initial={false}
      animate={open ? "open" : "closed"}
      variants={sidebarVariant}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="h-full bg-sidebar text-neutral-300 p-2 flex flex-col"
    >
      <SidebarHeader />
      <SidebarContent />
    </motion.aside>
  );
};
