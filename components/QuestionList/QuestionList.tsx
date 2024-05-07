'use client';

import { MOCK_QUESTIONS } from '@/mock-data';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { ChevronRight } from '../icons';

type QuestionListItemProps = {
  name: string;
  description: string;
  difficulty: string;
};

const QuestionListItem: FC<QuestionListItemProps> = ({
  name,
  description,
  difficulty,
}) => {
  const router = useRouter();

  return (
    <div
      className="p-4 flex justify-between items-center hover:bg-black/20 group cursor-pointer"
      onClick={() => {
        router.push('/question');
      }}
    >
      <div className="flex flex-col gap-0.5">
        <p className="text-base font-medium">{name}</p>
        <p className="text-sm text-gray-600 ">{description}</p>
        <p className="text-sm text-green-600">{difficulty}</p>
      </div>
      <div className="group-hover:scale-125">
        <ChevronRight />
      </div>
    </div>
  );
};

interface QuestionListProps {}

const QuestionList: FC<QuestionListProps> = ({}) => {
  return (
    <div>
      <div className="flex flex-col border border-gray-200 dark:border-gray-800 rounded-lg divide-y divide-gray-200 dark:divide-gray-800">
        {MOCK_QUESTIONS.map(({ id, name, description, difficulty }) => (
          <QuestionListItem
            key={id}
            name={name}
            description={description}
            difficulty={difficulty}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
