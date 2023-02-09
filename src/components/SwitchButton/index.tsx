import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

export const SwitchButton = ({ className, children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};
