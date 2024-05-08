"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMemo, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { isAlphanumeric } from "@/utils/helpers";

export function FeedbackDrawer() {
  const [feedbackText, setFeedbackText] = useState("");

  const isValidFeedbackText = useMemo(
    () =>
      feedbackText.length > 0 &&
      feedbackText.length < 300 &&
      isAlphanumeric(feedbackText),
    [feedbackText]
  );

  const handleSendFeedback = () => {
    console.log({ feedbackText });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed right-[-90px] top-[45%] rotate-[270deg] dark:bg-[#121212]"
          variant="outline"
        >
          Have some feedback for us
        </Button>
      </SheetTrigger>
      <SheetContent className="dark:bg-[#121212] flex items-center border-gray-800">
        <div className="mx-4 flex flex-col gap-8">
          <SheetHeader>
            <SheetTitle className="text-lg font-semibold">
              Send us a Message
            </SheetTitle>
            <SheetDescription className="text-sm leading-6">
              We greatly value any feedback or bug reports you have regarding
              our product. Thank you for taking the time to share your thoughts
              with us.
            </SheetDescription>
          </SheetHeader>
          <Textarea
            placeholder="Type your message here."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            className="dark:bg-[#121212]"
          />

          <SheetFooter>
            <SheetClose asChild>
              <Button
                type="submit"
                size={"sm"}
                disabled={!isValidFeedbackText}
                onClick={handleSendFeedback}
              >
                Submit
              </Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
