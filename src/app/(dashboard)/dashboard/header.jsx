import { cn } from "@/lib/utils";
import { Calendar, DownloadIcon, MessageCircleIcon } from "lucide-react";
import React from "react";

export const DashboardHeader = () => {
  const STATS = [
    {
      label: "Net cost (total sum)",
      data: 44081900,
      icon: (
        <Calendar size={32} className={"fill-neutral-100 text-neutral-200"} />
      ),
    },
    {
      label: "Line of items (adams)",
      data: 33,
    },
    {
      label: "Pending request",
      data: 0,
      icon: (
        <MessageCircleIcon
          size={32}
          className={"fill-neutral-100 text-neutral-200"}
        />
      ),
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Dashboard</h3>
        <button className="h-10 gap-2 text-sm font-semibold rounded-md bg-primary text-primary-foreground px-3 py-2 flex items-center justify-center">
          <DownloadIcon size={18} />
          <span>Download Your Plan</span>
        </button>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        {STATS.map((stat) => {
          return (
            <div
              key={stat.label}
              className="p-4 rounded-md bg-card text-card-foreground flex items-center justify-between shadow-md font-semibold gap-3 max-w-[25%] w-full"
            >
              <div className="flex flex-col gap-1">
                <p className="text-primary uppercase tracking-tight text-sm">
                  {stat.label}
                </p>
                <p className="font-bold text-2xl">{stat.data}</p>
              </div>
              {stat.icon && <>{stat.icon}</>}
            </div>
          );
        })}
      </div>
    </>
  );
};
