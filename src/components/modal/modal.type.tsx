export type ModalPropType = {
  children: React.ReactNode;
  title: string;
  description?: string;
  isOpen: boolean;
  onClose?: () => void;
};
