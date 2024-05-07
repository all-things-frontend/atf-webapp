'use client';

import { counterSolution } from '@/mock-data';
import {
  SandpackCodeEditor,
  SandpackCodeViewer,
  SandpackPredefinedTheme,
  SandpackProvider,
  SandpackThemeProp,
} from '@codesandbox/sandpack-react';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';

type QuestionPropsType = {};

const tabs = ['Question', 'Solution'];

export const Question: React.FC<QuestionPropsType> = () => {
  const [isQuestionTabActive, setIsQuestionTabActive] = useState(true);

  const { theme } = useTheme();
  const myTheme: SandpackThemeProp = theme as SandpackPredefinedTheme;

  return (
    <div className="h-40 flex flex-col gap-10 text-sm p-10 ">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              if (tab === 'Question') {
                setIsQuestionTabActive(true);
              }
              if (tab === 'Solution') {
                setIsQuestionTabActive(false);
              }
            }}
            className={`${
              tab === 'Question' && isQuestionTabActive ? 'underline' : ''
            } ${
              tab === 'Solution' && !isQuestionTabActive ? 'underline' : ''
            } `}
          >
            {' '}
            {tab}
          </button>
        ))}
      </div>
      {isQuestionTabActive && (
        <>
          <div>
            Note: This is a short warm up question meant to help you familiarize
            with the coding workspace. Actual UI coding interview questions will
            be more complicated.
          </div>
          <div className="text-base">
            REQUIREMENTS : Make the text within the button display the number of
            times the button has been clicked.
          </div>
        </>
      )}
      {!isQuestionTabActive && (
        <div>
          <div>Show solution here</div>
          <SandpackProvider
            template="react"
            theme={myTheme}
            style={{ fontSize: '12px' }}
          >
            <SandpackCodeViewer
              showLineNumbers
              wrapContent
              showTabs
              code={counterSolution}
            />
          </SandpackProvider>
        </div>
      )}
    </div>
  );
};
