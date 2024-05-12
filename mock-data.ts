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
    name: "Counter 1",
    description: "Increment and decrement counter",
    difficulty: "Easy",
    estimatedTime: 10, // in mins
    solution: {
      code: counterSolution,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    },
    slug: "counter-1",
  },

  {
    id: 2,
    name: "Counter 2",
    description: "Increment and decrement counter",
    difficulty: "Easy",
    estimatedTime: 10, // in mins
    solution: {
      code: counterSolution,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    },
    slug: "counter-2",
  },

  {
    id: 3,
    name: "Counter 3",
    description: "Increment and decrement counter",
    difficulty: "Easy",
    estimatedTime: 10, // in mins
    solution: {
      code: counterSolution,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    },
    slug: "counter-3",
  },

  {
    id: 4,
    name: "Counter 4",
    description: "Increment and decrement counter",
    difficulty: "Easy",
    estimatedTime: 10, // in mins
    solution: {
      code: counterSolution,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    },
    slug: "counter-4",
  },
  {
    id: 5,
    name: "Counter 5",
    description: "Increment and decrement counter",
    difficulty: "Easy",
    estimatedTime: 10, // in mins
    solution: {
      code: counterSolution,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    },
    slug: "counter-5",
  },
  {
    id: 6,
    name: "Counter 6",
    description: "Increment and decrement counter",
    difficulty: "Easy",
    estimatedTime: 10, // in mins
    solution: {
      code: counterSolution,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    },
    slug: "counter-6",
  },
  {
    id: 7,
    name: "Counter 7",
    description: "Increment and decrement counter",
    difficulty: "Easy",
    estimatedTime: 10, // in mins
    solution: {
      code: counterSolution,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    },
    slug: "counter-7",
  },
  {
    id: 8,
    name: "Hello world",
    description: "Increment and decrement counter",
    difficulty: "Easy",
    estimatedTime: 10, // in mins
    solution: {
      code: counterSolution,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    },
    slug: "counter-8",
  },
  {
    id: 9,
    name: "Dummy question",
    description: "Increment and decrement counter",
    difficulty: "Easy",
    estimatedTime: 10, // in mins
    solution: {
      code: counterSolution,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    },
    slug: "counter-9",
  },
];

export const LOGGED_IN_USER_COMPLETED_QUESTIONS_ID = [1, 4, 6, 9];

export const USER_BADGE = `https://github.com/shadcn.png`;

export const TEXT_REVEAL_SENTENCE = `Step out of tutorial hell and do it the CHAD way by diving into the world of reactChad.com where learning meets practice. Code with hints, seek solutions, and sharpen skills with tailored real-world interview questions. Level up your React game with reactChad.  LFG 🚀`;

export const MEME_ARRAY = [
  `https://i.imgflip.com/4n3nd3.png?a476472`,
  `https://ih1.redbubble.net/image.5501728010.1931/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.webp`,
  `https://i.imgflip.com/3xgbov.png`,
];
