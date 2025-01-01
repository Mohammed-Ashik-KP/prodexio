import { create } from 'zustand'
import { SideBarStoreType } from './sideBar.types';

export const useSidebarStore = create<SideBarStoreType>((set) => {
  return {
    isOpen: false,
    toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
    selectedMenu: 'dashboard',
    setSelectedMenu: (value) => set(() => ({selectedMenu: value})),
    };
  });