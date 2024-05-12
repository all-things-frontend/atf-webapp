"use client";
import { Header } from "@/components/Header";
import QuestionList from "@/components/QuestionList/QuestionList";
import { SearchBar } from "@/components/SearchBar";
import { MOCK_QUESTIONS } from "@/mock-data";
import { useMemo, useState } from "react";

export default function Dashboard() {
  const [searchText, setSearchText] = useState("");

  const filteredQuestions = useMemo(
    () =>
      MOCK_QUESTIONS.filter((question) =>
        question.name
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase())
      ),
    [searchText]
  );

  return (
    <div>
      <Header />
      <div className="p-8">
        <SearchBar searchText={searchText} onChange={setSearchText} />
        <QuestionList questions={filteredQuestions} />
      </div>
    </div>
  );
}
