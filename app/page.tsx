import { Header } from "@/components/Header";
import QuestionList from "@/components/QuestionList/QuestionList";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-12">
        <QuestionList />
      </div>
    </div>
  );
}
