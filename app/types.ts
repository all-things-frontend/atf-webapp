export type QuestionType = {
  id: number;
  name: string;
  description: string;
  difficulty: string;
  estimatedTime: number;
  solution: {
    code: string;
    description: string;
  };
  slug: string;
};
