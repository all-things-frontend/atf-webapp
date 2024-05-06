import React from "react";
import { ModeToggle } from "./ModeToggle";

type HeaderPropsType = {};

export const Header: React.FC<HeaderPropsType> = () => {
  return (
    <div className="flex w-full justify-between p-4 border-b border-gray-300 dark:border-gray-800 h-20">
      <div>Header</div>
      <ModeToggle />
    </div>
  );
};
