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
        <Toaster>
          {(t) => {
            console.log(t);

            return (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5"></div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {resolveValue(t.message, t)}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {/* {resolveValue(t.description, t)} */}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-200">
                  <button
                    onClick={() => {}}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            );
          }}
        </Toaster>
      </WithAuthHOC>
    </QueryClientProvider>
  );
};

export default DashboardLayout;
