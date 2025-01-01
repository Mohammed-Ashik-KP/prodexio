import React from "react";

export type SideBarMenuType = {
  name: string;
  icon: React.JSX.Element;
  url: string;
  id: string;
};
export type SideBarItemProps = {
  active?: boolean;
  icon: React.JSX.Element;
  text: string;
};

export type SideBarStoreType = {
  isOpen: boolean;
  toggleSidebar: () => void;
  selectedMenu: string;
  setSelectedMenu: (value: string) => void;
};
