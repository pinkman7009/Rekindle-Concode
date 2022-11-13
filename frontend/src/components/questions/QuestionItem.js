import React from "react";

const QuestionItem = ({ question }) => {
  return (
    <div className="bg-white p-6 rounded-xl w-full my-3">
      <label htmlFor="">
        <p className="font-bold text-primary text-lg">{question}</p>
      </label>
      <textarea
        type="text"
        placeholder="answer"
        className="w-full h-32 p-3 border-2 my-3 border-gray-500 rounded-md"
        rounded-md
      />
    </div>
  );
};

export default QuestionItem;
