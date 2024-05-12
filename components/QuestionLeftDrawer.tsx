"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MOCK_QUESTIONS } from "@/mock-data";
import { EnterIcon } from "./icons";
import { useParams } from "next/navigation";
import { useCallback } from "react";
import { QuestionType } from "@/app/types";
import { useRouter } from "next/navigation";

export function QuestionLeftDrawer() {
  const { question_slug } = useParams();
  const router = useRouter();

  const handleItemClick = useCallback(
    (question: QuestionType) => {
      const updatedSlug = question.slug;
      router.replace(updatedSlug);
    },
    [router]
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex gap-2 items-center p-2 group hover:bg-gray-800/50 rounded-md">
          <div>All questions</div>
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
              <button
                key={question.id}
                className={`flex justify-between items-center p-3 rounded-lg disabled:cursor-not-allowed ${
                  index % 2 === 0 && "bg-gray-700/50"
                } hover:bg-gray-900/50`}
                disabled={question.slug === question_slug}
                onClick={() => handleItemClick(question)}
              >
                <div className="flex gap-4">
                  <div>{question.id}</div>
                  <div>{question.name}</div>
                </div>
                <div className="text-xs text-green-500 border border-gray-700 px-2 py-1 rounded-full">
                  {question.difficulty}
                </div>
              </button>
            ))}
          </SheetDescription>
        </div>
      </SheetContent>
    </Sheet>
  );
}
