"use client";
import React, { useEffect, useRef, useState } from "react";

type SearchBarPropsType = {
  searchText: string;
  onChange: (searchText: string) => void;
};

export const SearchBar: React.FC<SearchBarPropsType> = ({
  searchText,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputElement = inputRef.current;

    const handleCommandKKeyPress = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        inputElement?.focus();
      }
    };

    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        inputElement?.blur();
      }
    };

    window.addEventListener("keydown", handleCommandKKeyPress);
    inputElement?.addEventListener("keyup", handleEscKeyPress);

    return () => {
      window.removeEventListener("keydown", handleCommandKKeyPress);
      inputElement?.removeEventListener("keyup", handleEscKeyPress);
    };
  }, []);

  return (
    <div className="relative w-full pb-4">
      <div className="flex justify-end items-center w-full">
        <input
          ref={inputRef}
          className="w-60 p-1.5 border border-gray-800 bg-[#121212] overflow-x-scroll rounded-lg"
          value={searchText}
          onChange={(e) => onChange(e.target.value)}
        />
        <kbd className="flex gap-1 py-1 px-1.5 rounded-lg bg-gray-800 absolute right-2">
          <span className="text-[10px]">⌘</span>
          <span className="text-[10px]">K</span>
        </kbd>
      </div>
    </div>
  );
};
