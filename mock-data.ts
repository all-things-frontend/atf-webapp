export const counterSolution = `import { useState } from 'react';
import './styles.css';
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicks: {count}
      </button>
    </div>
  );
}
`;

export const MOCK_QUESTIONS = [
  {
    id: 1,
    name: "Counter",
    description: "Increment and decrement counter",
    difficulty: "Easy",
    estimatedTime: 10, // in mins
    solution: {
      code: counterSolution,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    },
  },

  {
    id: 2,
    name: "Counter",
    description: "Increment and decrement counter",
    difficulty: "Easy",
    estimatedTime: 10, // in mins
    solution: {
      code: counterSolution,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    },
  },

  {
    id: 3,
    name: "Counter",
    description: "Increment and decrement counter",
    difficulty: "Easy",
    estimatedTime: 10, // in mins
    solution: {
      code: counterSolution,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    },
  },

  {
    id: 4,
    name: "Counter",
    description: "Increment and decrement counter",
    difficulty: "Easy",
    estimatedTime: 10, // in mins
    solution: {
      code: counterSolution,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    },
  },
];

export const LOGGED_IN_USER_COMPLETED_QUESTIONS_ID = [1, 4];
