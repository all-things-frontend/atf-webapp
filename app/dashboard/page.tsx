import { Header } from '@/components/Header';
import QuestionList from '@/components/QuestionList/QuestionList';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="p-8">
        <QuestionList />
      </div>
    </div>
  );
}
