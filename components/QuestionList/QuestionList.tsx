"use client";

import {
  LOGGED_IN_USER_COMPLETED_QUESTIONS_ID,
  MOCK_QUESTIONS,
} from "@/mock-data";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { CheckedCircle, ChevronRight } from "../icons";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

type QuestionListItemProps = {
  id: number;
  name: string;
  description: string;
  difficulty: string;
  slug: string;
};

const QuestionListItem: FC<QuestionListItemProps> = ({
  id,
  name,
  description,
  difficulty,
  slug,
}) => {
  const router = useRouter();

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="p-4 flex justify-between items-center hover:bg-black/20 cursor-pointer"
      onClick={() => {
        router.push(`/question/${slug}`);
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex items-center gap-6">
        {LOGGED_IN_USER_COMPLETED_QUESTIONS_ID.includes(id) ? (
          <CheckedCircle className="text-gray-600 h-6 w-6" fill="green" />
        ) : (
          <Circle className="text-gray-600 h-6 w-6" />
        )}
        <div className="flex flex-col gap-0.5">
          <p className="text-base font-medium">{name}</p>
          <p className="text-sm text-gray-600 ">{description}</p>
          <p className="text-sm text-green-600">{difficulty}</p>
        </div>
      </div>
      <motion.div>
        <motion.div animate={{ scale: isHover ? 1.7 : 1 }}>
          <ChevronRight />
        </motion.div>
      </motion.div>
    </div>
  );
};

interface QuestionListProps {}

const QuestionList: FC<QuestionListProps> = ({}) => {
  return (
    <div>
      <div className="flex flex-col border border-gray-200 dark:border-gray-800 rounded-lg divide-y divide-gray-200 dark:divide-gray-800">
        {MOCK_QUESTIONS.map(({ id, name, description, difficulty, slug }) => (
          <QuestionListItem
            key={id}
            id={id}
            name={name}
            description={description}
            difficulty={difficulty}
            slug={slug}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
