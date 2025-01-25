import React from "react";
import { ModalPropType } from "./modal.type";
import { X } from "lucide-react";

const Modal: React.FC<ModalPropType> & {
  Footer: React.FC<{ children: React.ReactNode }>;
} = ({ isOpen, onClose, title, children, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 relative left-1/2 top-40 transform -translate-x-1/2 ">
        <div className="border-b border-gray-200 p-3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-primary capitalize">
              {title}
            </h2>
            <button
              className="text-gray-400 hover:text-gray-600"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X />
            </button>
          </div>
          <div className="text-sm text-gray-600 w-full break-words my-1">
            {description}
          </div>
        </div>

        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};

const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="mt-4">
      <hr />

      <div className="p-3">{children}</div>
    </div>
  );
};

Modal.Footer = Footer;

export default Modal;
