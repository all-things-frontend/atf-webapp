"use client";

import { Header } from "@/components/Header";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/CodeEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  SandpackCodeViewer,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { MOCK_QUESTIONS } from "@/mock-data";
import { QuestionLeftDrawer } from "@/components/QuestionLeftDrawer";
import { useParams, useRouter } from "next/navigation";
import { QuestionType } from "@/app/types";
import { useCallback } from "react";
import { ChevronRight } from "@/components/icons";

const ProblemText = ({ question }: { question: QuestionType }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center">
        <p className="text-2xl font-bold">{question.name}</p>
        <div className="text-xs text-green-500 bg-slate-700 px-2 py-1 rounded-full">
          {question.difficulty}
        </div>
      </div>
      {/* <ReactQuill
        className="border-none"
        style={{ borderWidth: "0px" }}
        // theme="snow"
        value={problem.problemText}
        readOnly
        modules={{ toolbar: null, theme: null }}
      /> */}
    </div>
  );
};

const SolutionText = ({ question }: { question: QuestionType }) => {
  return (
    <div>
      <SandpackProvider
        template="react"
        theme={"dark"}
        style={{ fontSize: "12px" }}
      >
        <SandpackCodeViewer
          showLineNumbers
          wrapContent
          showTabs
          code={question.solution.code}
        />
      </SandpackProvider>
    </div>
  );
};

const tabs = [
  {
    name: "Problem",
    value: "problem",
  },
  {
    name: "Solution",
    value: "solution",
  },
];

export default function Question() {
  const { question_slug } = useParams();
  const router = useRouter();

  const question = MOCK_QUESTIONS.filter((q) => q.slug === question_slug)[0];

  const currentIndex = MOCK_QUESTIONS.indexOf(question);

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === MOCK_QUESTIONS.length - 1;

  const handlePrevClick = useCallback(() => {
    const updatedIndex = currentIndex - 1;
    const updatedSlug = MOCK_QUESTIONS[updatedIndex].slug;
    router.replace(updatedSlug);
  }, [currentIndex, router]);

  const handleNextClick = useCallback(() => {
    const updatedIndex = currentIndex + 1;
    const updatedSlug = MOCK_QUESTIONS[updatedIndex].slug;
    router.replace(updatedSlug);
  }, [currentIndex, router]);

  return (
    <div>
      <Header />
      <ResizablePanelGroup direction="horizontal" className="w-xl rounded-lg">
        <ResizablePanel defaultSize={30}>
          <div className="flex gap-1 mt-2 ml-2 text-xs">
            <QuestionLeftDrawer />
            <button
              className="flex gap-1 items-center p-2 group hover:bg-gray-800/50 rounded-md cursor-pointer disabled:cursor-not-allowed"
              onClick={handlePrevClick}
              disabled={isPrevDisabled}
            >
              <div className="opacity-0 group-hover:opacity-100 rotate-180">
                <ChevronRight />
              </div>
              <div>Prev</div>
            </button>

            <button
              className="flex gap-1 items-center p-2 group hover:bg-gray-800/50 rounded-md cursor-pointer disabled:cursor-not-allowed"
              onClick={handleNextClick}
              disabled={isNextDisabled}
            >
              <div>Next</div>
              <div className="opacity-0 group-hover:opacity-100">
                <ChevronRight />
              </div>
            </button>
          </div>
          <Tabs defaultValue="problem" className="w-full h-full p-2 ">
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={`trigger-${tab.value}`} value={tab.value}>
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={`content-${tab.value}`} value={tab.value}>
                <div className="p-2">
                  {tab.value === "problem" && (
                    <ProblemText question={question} />
                  )}
                  {tab.value === "solution" && (
                    <SolutionText question={question} />
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <CodeEditor />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
