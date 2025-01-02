"use client";

import SideBar from "@/components/sideBar/sideBar";
import { useSidebarStore } from "@/components/sideBar/sideBar.store";
import React from "react";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //constants

  //hooks
  const { isOpen: isSidebarOpen } = useSidebarStore();

  //states

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      {/* Main Content */}
      <div
        className={`overflow-auto transition-all duration-300 ${
          isSidebarOpen ? "w-[calc(100vw-16rem)]" : "w-[calc(100vw-5rem)]"
        }`}
      >
        <div className={`p-4`}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
