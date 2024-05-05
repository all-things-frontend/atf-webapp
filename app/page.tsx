import CodeEditor from "@/components/CodeEditor";

export default function Home() {
  return (
    <div>
      <div className="bg-gray-950 h-fit flex flex-col gap-10 text-sm p-10">
        <div>
          Note: This is a short warm up question meant to help you familiarize
          with the coding workspace. Actual UI coding interview questions will
          be more complicated.
        </div>
        <div className="text-base">
          REQUIREMENTS : Make the text within the button display the number of
          times the button has been clicked.
        </div>
      </div>
      <CodeEditor />
    </div>
  );
}

/**
 1. for solutions use the - non editable component 
 2. Read more  - https://www.joshwcomeau.com/react/next-level-playground/
 */
