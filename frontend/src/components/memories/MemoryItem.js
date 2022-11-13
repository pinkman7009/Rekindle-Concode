import React, { useContext, useEffect } from "react";
import { PrimaryButton } from "../Buttons";

const MemoryItem = ({ memory }) => {
  const { name, description, location } = memory;

  return (
    <div className="border-2 bg-white text-black p-3 rounded-md mt-4">
      <div className="flex justify-between my-6 p-3 border-b-2 border-gray-400">
        <p className="font-bold text-primary">Name</p>
        <p className="text-right">{name}</p>
      </div>
      <div className="flex justify-between my-6 p-3 border-b-2 border-gray-400">
        <p className="font-bold text-primary">Date Posted</p>
        <p className="text-right">29th October, 2022</p>
      </div>
      <div className="flex justify-between my-6 p-3 border-b-2 border-gray-400">
        <p className="font-bold text-primary">Location</p>
        <p className="text-right">{location}</p>
      </div>
      <div className="flex justify-between my-6 p-3 border-b-2 border-gray-400">
        <p className="font-bold text-primary">Description</p>
        <p className="text-right">{description}</p>
      </div>
    </div>
  );
};

export default MemoryItem;
