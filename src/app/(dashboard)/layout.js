import { Sidebar, SidebarProvider } from "@/components/sidebar/sidebar";
import React from "react";
import { DashboardHeader } from "./header";

const DashboardLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="h-screen flex">
        <Sidebar />
        <main className="flex-1 h-full flex flex-col bg-background text-foreground overflow-hidden">
          <DashboardHeader />
          <div className="flex-1 p-4 overflow-y-auto">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
