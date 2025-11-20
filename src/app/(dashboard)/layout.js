import { Sidebar, SidebarProvider } from "@/components/sidebar/sidebar";
import React from "react";
import { DashboardHeader } from "./header";

const DashboardLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="h-screen flex">
        <Sidebar />
        <div className="flex-1 h-full flex flex-col bg-background text-foreground">
          <DashboardHeader />
          <div className="flex-1 p-4">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
