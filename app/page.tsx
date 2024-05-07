import CodeEditor from '@/components/CodeEditor';
import { Header } from '@/components/Header';
import { Question } from '@/components/Question';
import QuestionList from '@/components/QuestionList/QuestionList';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-8">
        <QuestionList />
      </div>
    </div>
  );
}
