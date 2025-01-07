"use client";

import SideBar from "@/components/sideBar/sideBar";
import { useSidebarStore } from "@/components/sideBar/sideBar.store";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WithAuthHOC from "@/hoc/withAuth";
import { resolveValue, Toaster } from "react-hot-toast";
const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //constants
  const queryClient = new QueryClient();
  //hooks
  const { isOpen: isSidebarOpen } = useSidebarStore();

  //states

  return (
    <QueryClientProvider client={queryClient}>
      <WithAuthHOC>
        <div className="flex min-h-screen bg-gray-50">
          <SideBar />
          {/* Main Content */}
          <div
            className={`overflow-auto transition-all duration-300 h-full ${
              isSidebarOpen ? "w-[calc(100vw-16rem)]" : "w-[calc(100vw-5rem)]"
            }`}
          >
            <div className={`p-4`}>{children}</div>
          </div>
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,

            success: {
              duration: 1600,
            },
            error: {
              duration: 3000,
            },
          }}
        />
      </WithAuthHOC>
    </QueryClientProvider>
  );
};

export default DashboardLayout;
