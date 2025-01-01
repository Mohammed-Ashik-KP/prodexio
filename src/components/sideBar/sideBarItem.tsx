import React from "react";
import { SideBarItemProps } from "./sideBar.types";
import { useSidebarStore } from "./sideBar.store";

const SideBarItem: React.FC<SideBarItemProps> = ({ active, icon, text }) => {
  const { isOpen } = useSidebarStore();

  return (
    <div
      className={`flex items-center p-3 rounded-lg mb-2 cursor-pointer h-12 ${
        active ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
      }`}
    >
      <span className="mr-2 ">{icon}</span>
      <span className={`${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-200 delay-100`}>{text}</span>
    </div>
  );
};

export default SideBarItem;
