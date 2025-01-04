import React from "react";
import {
  LayoutDashboard,
  LayoutList,
  Menu
} from "lucide-react";
import { useSidebarStore } from "./sideBar.store";
import { SideBarMenuType } from "./sideBar.types";
import SidebarItem from './sideBarItem';

const SideBar: React.FC = () => {
  //constants

  const menuOptions:SideBarMenuType[] = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      id:'dashboard',
      icon: <LayoutDashboard size={20} />
    },
    {
      name: 'Assignments',
      url: '/assignments',
      id:'assignments',
      icon: <LayoutList strokeWidth={1.5} />,
     
    },
   
  ]

  //hooks
  const { isOpen, toggleSidebar,selectedMenu } = useSidebarStore();

  //states
  

  //fncs

  //effects
  return (
    <>
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-white shadow-lg transition-all duration-300 relative h-screen overflow-x-hidden`}
      >
        <div className="flex items-center p-4 border-b h-20">
          {isOpen && (
            <>
              <div className="w-8 h-8 rounded-full bg-blue-500 mr-3"></div>
              <div>
                <h2 className="font-semibold">Amanda</h2>
                <p className="text-sm text-gray-500">amanda@gmail.com</p>
              </div>
            </>
          )}
          <button
            onClick={() => toggleSidebar()}
            className="ml-auto p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={20} />
          </button>
        </div>

        <nav className="p-4">
          {menuOptions.map((menu, i) => {
            return <SidebarItem key={`side_menu_${i}`} icon={menu.icon} text={menu.name} active={selectedMenu === menu.id} />
          })}
        </nav> 
      </div>
    </>
  );
};

export default SideBar;
