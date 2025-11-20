import React from "react";
import { DashboardHeader } from "./header";
import { Table } from "@/components/table";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <DashboardHeader />
      <Table />
    </div>
  );
};

export default DashboardPage;
