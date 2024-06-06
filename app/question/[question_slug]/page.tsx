// 'use client';

import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { Header } from '@/components/Header';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import CodeEditor from '@/components/CodeEditor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  SandpackCodeViewer,
  SandpackProvider,
} from '@codesandbox/sandpack-react';
import { MOCK_QUESTIONS } from '@/mock-data';
import { QuestionLeftDrawer } from '@/components/QuestionLeftDrawer';
import { QuestionType } from '@/app/types';
import { useCallback } from 'react';
import { ChevronRight } from '@/components/icons';
import { MDX_TEST } from '@/app/contants';
import { CustomMDX } from '@/components/mdx/CustomMDX';

const tabs = [
  {
    name: 'Problem',
    value: 'problem',
  },
  {
    name: 'Solution',
    value: 'solution',
  },
];

export default async function Question({
  params,
}: {
  params: { question_slug: string };
}) {
  console.log({ params });
  const { question_slug } = params;
  // const router = useRouter();

  const question = MOCK_QUESTIONS.filter((q) => q.slug === question_slug)[0];

  const currentIndex = MOCK_QUESTIONS.indexOf(question);

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === MOCK_QUESTIONS.length - 1;

  // const handlePrevClick = useCallback(() => {
  //   const updatedIndex = currentIndex - 1;
  //   const updatedSlug = MOCK_QUESTIONS[updatedIndex].slug;
  //   // router.replace(updatedSlug);
  // }, [currentIndex]);

  // const handleNextClick = useCallback(() => {
  //   const updatedIndex = currentIndex + 1;
  //   const updatedSlug = MOCK_QUESTIONS[updatedIndex].slug;
  //   // router.replace(updatedSlug);
  // }, [currentIndex]);

  return (
    <div>
      <Header />
      <ResizablePanelGroup direction="horizontal" className="w-xl rounded-lg">
        <ResizablePanel defaultSize={30}>
          <div className="flex gap-1 mt-2 ml-2 text-xs">
            <QuestionLeftDrawer />
            <button
              className="flex gap-1 items-center p-2 group hover:bg-gray-800/50 rounded-md cursor-pointer disabled:cursor-not-allowed"
              // onClick={handlePrevClick}
              disabled={isPrevDisabled}
            >
              <div className="opacity-0 group-hover:opacity-100 rotate-180">
                <ChevronRight />
              </div>
              <div>Prev</div>
            </button>

            <button
              className="flex gap-1 items-center p-2 group hover:bg-gray-800/50 rounded-md cursor-pointer disabled:cursor-not-allowed"
              // onClick={handleNextClick}
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
                  {tab.value === 'problem' && <CustomMDX source={MDX_TEST} />}
                  {tab.value === 'solution' && (
                    // <SolutionText question={question} />
                    <CustomMDX source={MDX_TEST} />
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
