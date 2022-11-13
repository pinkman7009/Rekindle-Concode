import React from "react";
import { BsPlusLg } from "react-icons/bs";

export const PrimaryButton = ({ text, handleClick, size }) => {
  return (
    <button
      className={` transition-all ease-in p-2 ${
        size === "small" ? "w-20" : size === "large" ? "w-64" : "w-32"
      } text-white my-3 text-sm rounded font-bold bg-primary hover:opacity-80`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export const AddButton = ({ text, handleClick, size }) => {
  return (
    <button
      className={` transition-all ease-in p-2 ${
        size === "small" ? "w-20" : size === "large" ? "w-64" : "w-40"
      } text-white my-3 text-sm rounded font-bold bg-primary hover:opacity-80 flex justify-evenly items-center m-3`}
      onClick={handleClick}
    >
      <BsPlusLg />
      {text}
    </button>
  );
};
