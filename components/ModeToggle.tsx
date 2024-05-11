"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "./icons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MEME_ARRAY } from "@/mock-data";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [prefersDarkTheme, setPrefersDarkTheme] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    setPrefersDarkTheme(darkThemeMq.matches);
    setTheme(darkThemeMq.matches ? "dark" : "light");
  }, [setTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="dark:bg-[#121212] rounded-full"
          variant="outline"
          size="icon"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-[#121212]">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div
              className="w-full px-2 py-1.5 text-sm hover:cursor-default hover:bg-gray-800"
              onClick={() =>
                setImgIndex(Math.floor(Math.random() * MEME_ARRAY.length))
              }
            >
              Light
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Yooooooooooo? What you upto.</AlertDialogTitle>
              <AlertDialogDescription>
                Never saw a real dev prefer the light theme. Ughhh.
                <div className="flex justify-center items-center my-10">
                  <img
                    src={MEME_ARRAY[imgIndex]}
                    alt="meme-box"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Be a Chad?</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme(prefersDarkTheme ? "dark" : "light")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
