import React from "react";
import QuestionItem from "./QuestionItem";

const QuestionList = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => (
        <QuestionItem question={question.question} />
      ))}
    </div>
  );
};

export default QuestionList;
