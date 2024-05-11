"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MOCK_QUESTIONS } from "@/mock-data";
import Link from "next/link";
import { EnterIcon } from "./icons";

export function QuestionLeftDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex gap-2 items-center p-2 group hover:bg-gray-800/50 rounded-md mt-2 ml-2">
          <div className="text-xs">All questions</div>
          <div className="opacity-0 group-hover:opacity-100">
            <EnterIcon />
          </div>
        </button>
      </SheetTrigger>
      <SheetContent
        className="dark:bg-[#121212] flex border-gray-800 px-0"
        side={"left"}
      >
        <div className="mx-4 flex flex-col gap-8 w-full">
          <SheetHeader>
            <SheetTitle className="text-lg font-semibold">Questions</SheetTitle>
          </SheetHeader>
          <SheetDescription className="text-sm flex flex-col gap-2">
            {MOCK_QUESTIONS.map((question, index) => (
              <Link
                href={`/question/${question.slug}`}
                key={question.id}
                className={`flex justify-between items-center p-3 rounded-lg ${
                  index % 2 === 0 && "bg-gray-700/50"
                } hover:bg-gray-900/50`}
              >
                <div className="flex gap-4">
                  <div>{question.id}</div>
                  <div>{question.name}</div>
                </div>
                <div className="text-xs text-green-500 border border-gray-700 px-2 py-1 rounded-full">
                  {question.difficulty}
                </div>
              </Link>
            ))}
          </SheetDescription>
        </div>
      </SheetContent>
    </Sheet>
  );
}
