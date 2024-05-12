"use client";
import React, { useEffect, useRef, useState } from "react";
import { CrossCircledIcon, SpotifyIcon } from "./icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { PLAYLISTS } from "@/app/contants";

type SpotifyPopupPropsType = {};

// const colors = [
//   "bg-green-300",
//   "bg-red-300",
//   "bg-blue-300",
//   "bg-yellow-300",
//   "bg-purple-300",
// ];

export const SpotifyPopup: React.FC<SpotifyPopupPropsType> = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsListOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsListOpen(false);
      }
    };

    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsListOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []);

  return (
    <div
      className="fixed left-6 bottom-6 cursor-pointer flex flex-col gap-2 items-start text-sm"
      ref={menuRef}
    >
      <AnimatePresence>
        {isListOpen &&
          PLAYLISTS.map((playlist, index) => (
            <Link key={playlist.id} href={playlist.url} target="_blank">
              <motion.div
                key={playlist.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                //   className={`p-2 my-1 w-40 rounded-sm text-gray-800 ${colors[index]}`}
                className={`p-2 my-1 min-w-40 rounded-md  ${
                  index % 2 === 0
                    ? "bg-primary text-gray-800"
                    : "bg-gray-800 text-primary"
                }`}
              >
                {playlist.label}
              </motion.div>
            </Link>
          ))}
      </AnimatePresence>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        whileHover={{ scale: 1.2 }}
        onClick={handleToggle}
        className="mt-2"
      >
        {isListOpen ? (
          <CrossCircledIcon className="h-6 w-6" />
        ) : (
          <SpotifyIcon className="h-6 w-6" />
        )}
      </motion.div>
    </div>
  );
};
