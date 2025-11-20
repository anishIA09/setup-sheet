import { USERS_DATA } from "@/constants/data.constant";
import { cn } from "@/lib/utils";
import React from "react";

export const Table = () => {
  const columns = [
    {
      header: "User ID",
      key: "userId",
      headerClassName:
        "sticky z-1 left-0 bg-table-header border-r border-neutral-300",
      cellClassName:
        "sticky z-1 left-0 bg-table-row border-r border-neutral-300",
    },
    { header: "Full Name", key: "fullName" },
    { header: "Email Address", key: "email" },
    { header: "Phone Number", key: "phone" },
    { header: "Country", key: "country" },
    { header: "City", key: "city" },
    { header: "Registration Date", key: "registrationDate" },
    { header: "Last Login", key: "lastLogin" },
    { header: "Account Status", key: "status" },
    { header: "Role", key: "role" },
    { header: "Total Orders", key: "totalOrders" },
    { header: "Revenue Generated", key: "revenue" },
    { header: "Subscription Plan", key: "subscription" },
    { header: "Plan Expiry", key: "planExpiry" },
    { header: "IP Address", key: "ipAddress" },
    { header: "Device Used", key: "device" },
    { header: "Operating System", key: "os" },
    { header: "Browser", key: "browser" },
    { header: "Referral Source", key: "referral" },
    {
      header: "Notes",
      key: "notes",
      headerClassName:
        "sticky z-1 left-0 bg-table-header border-l border-neutral-300 right-0",
      cellClassName:
        "sticky z-1 left-0 bg-table-row border-l right-0 border-neutral-300",
    },
  ];

  return (
    <div className="bg-card shadow-md rounded-md overflow-hidden">
      <div className="p-4 bg-card-muted text-card-heading font-semibold">
        Your plan
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="table-header flex items-center justify-between">
          <p className="text-neutral-500 font-medium border border-neutral-300 px-2 text-sm p-1.5 rounded-md">
            Show 10
          </p>
          <input
            className="h-9 w-3xs rounded-md border border-neutral-300 text-sm px-3 placeholder:text-neutral-400 outline-none"
            placeholder="Search items"
          />
        </div>
        <div className="table-wrapper rounded-md border border-neutral-300 overflow-hidden overflow-x-auto w-full">
          <table className="w-full caption-bottom text-sm">
            <thead className="bg-table-header [&_tr]:border-b [&_tr]:border-neutral-300">
              <tr>
                {columns.map((column, idx) => {
                  return (
                    <th
                      key={idx}
                      className={cn(
                        "p-4 font-semibold whitespace-nowrap ",
                        column?.headerClassName
                      )}
                    >
                      {column.header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-300">
              {USERS_DATA.map((user, idx) => {
                const isSelected = idx === 10;

                return (
                  <tr
                    key={user.userId}
                    className={cn(
                      isSelected ? "bg-table-selected-row" : "bg-table-row"
                    )}
                  >
                    {columns.map((column, idx) => {
                      return (
                        <td
                          key={idx}
                          className={cn(
                            "p-4 whitespace-nowrap",
                            column?.cellClassName,
                            isSelected && "bg-table-selected-row"
                          )}
                        >
                          {user[column.key]}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
