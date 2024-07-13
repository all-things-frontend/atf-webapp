import { createContext, useContext, useEffect, useState } from 'react';
import { databases } from '@/app/appwrite';
import { Query } from 'appwrite';
import { Question } from '@/types/appwrite';

export const QUESTIONS_DATABASE_ID = '666212500005907e6f96'; // Replace with your database ID
export const QUESTIONS_COLLECTION_ID = '666212590024ab935b07'; // Replace with your collection ID

interface IQuestionsContext {
  questions: Question[];
}

const QuestionsContext = createContext<IQuestionsContext>({
  questions: [],
});

export function useIdeas() {
  return useContext(QuestionsContext);
}

export function QuestionsProvider(props: any) {
  const [questions, setQuestions] = useState<Question[]>([]);

  async function init() {
    const response = await databases.listDocuments(
      QUESTIONS_DATABASE_ID,
      QUESTIONS_COLLECTION_ID,
      [Query.orderDesc('$createdAt'), Query.limit(10)]
    );
    const questions = response.documents as Question[];
    console.log({ questions });
    setQuestions(questions);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <QuestionsContext.Provider value={{ questions }}>
      {props.children}
    </QuestionsContext.Provider>
  );
}
