import React from "react";
import { PrimaryButton } from "../components/Buttons";
import Container from "../components/Container";
import QuestionList from "../components/questions/QuestionList";

const Questions = () => {
  const questions = [
    {
      _id: 1,
      question: "Where is the best place in the world you have ever been to?",
    },
    {
      _id: 2,
      question: "What's your go-to midnight snack?",
    },
    {
      _id: 3,
      question: "Did you ever have a run-in with the law?",
    },
    {
      _id: 4,
      question: "When was the last time you cried and why?",
    },
    {
      _id: 5,
      question: "What is your ultimate comfort food?",
    },
    {
      _id: 6,
      question:
        "What was the scariest moment of your life, and how did you handle it?",
    },
    {
      _id: 7,
      question: "What is your favourite movie or book series?",
    },
    {
      _id: 8,
      question: "What is your favourite sport?",
    },
    {
      _id: 9,
      question: "How do you spend your weekend?",
    },
    {
      _id: 10,
      question:
        "What is the one thing you would like to change about yourself?",
    },
    {
      _id: 11,
      question: "Who is your best friend?",
    },
    {
      _id: 12,
      question: "What was the best part of your childhood?",
    },
    {
      _id: 13,
      question: "If you could have any car, what would it be?",
    },
    {
      _id: 14,
      question:
        "What types of books do you like to read and which one is your favourite?",
    },
    {
      _id: 15,
      question:
        "If you could travel anywhere in the world, where would you go?",
    },
    {
      _id: 16,
      question: "What's the most unusual thing you've ever eaten?",
    },
    {
      _id: 17,
      question: "What is your favourite festival?",
    },
    {
      _id: 18,
      question: "Do you love or hate rollercoasters?",
    },
  ];
  return (
    <Container>
      <h2 className="text-white font-bold text-2xl my-6 p-3 rounded-lg border-2 border-primary w-1/2 text-center">
        Questions which will help us understand you better
      </h2>
      <QuestionList questions={questions} />
      <div className="flex items-center justify-center">
        <PrimaryButton text="Submit" />
      </div>
    </Container>
  );
};

export default Questions;
