'use client';

import { Header } from '@/components/Header';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import CodeEditor from '@/components/CodeEditor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { DIFFICULTY_LEVEL_ENUM } from '../contants';

const problem = {
  title: 'Counter',
  problemText: `<h2>You are tasked with creating a React component called <strong>Counter</strong> that will serve as a counter for the number of problems a user has completed on LeetCode. Your task is to implement the logic for this component.</h2><p>The Co component should have the following features:</p><ol><li><span style="color: var(--tw-prose-bold);">Display Count</span>: It should display the current count of problems completed by the user.</li><li><span style="color: var(--tw-prose-bold);">Increment and Decrement Buttons</span>: The component should include buttons to increment and decrement the count. Clicking the increment button should increase the count by one, and clicking the decrement button should decrease the count by one.</li><li><span style="color: var(--tw-prose-bold);">Minimum Count</span>: The count should not be allowed to go below zero. If the user tries to decrement the count when it's already zero, the count should remain at zero.</li><li><span style="color: var(--tw-prose-bold);">Maximum Count</span>: There is no maximum limit for the count. Users can increment the count indefinitely.</li><li><span style="color: var(--tw-prose-bold);">Styling</span>: Feel free to add basic styling to the component to make it visually appealing.</li></ol>`,
  difficulty: DIFFICULTY_LEVEL_ENUM.EASY,
};

const ProblemText = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center">
        <p className="text-2xl font-bold">{problem.title}</p>
        <div className="text-xs text-green-500 bg-slate-700 px-2 py-1 rounded-full">
          {problem.difficulty}
        </div>
      </div>
      <ReactQuill
        className="border-none"
        style={{ borderWidth: '0px' }}
        // theme="snow"
        value={problem.problemText}
        readOnly
        modules={{ toolbar: null, theme: null }}
      />
    </div>
  );
};

const SolutionText = () => {
  return <div>Solution</div>;
};

const tabs = [
  {
    name: 'Problem',
    value: 'problem',
    renderContent: <ProblemText />,
  },
  {
    name: 'Solution',
    value: 'solution',
    renderContent: <SolutionText />,
  },
];

export default function Question() {
  return (
    <div>
      <Header />
      <ResizablePanelGroup direction="horizontal" className="w-xl rounded-lg ">
        <ResizablePanel defaultSize={30}>
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
                <div className="p-2">{tab.renderContent}</div>
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

/**
 1. for solutions use the - non editable component 
 2. Read more  - https://www.joshwcomeau.com/react/next-level-playground/
 */
