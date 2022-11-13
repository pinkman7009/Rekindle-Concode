import React from "react";

import { AddButton } from "../Buttons";
import MemoryItem from "./MemoryItem";

const MemoryList = ({ memories, setModalOpen }) => {
  return (
    <div className="mt-12 mx-auto w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-bold text-2xl my-6 p-3 rounded-lg border-2 border-primary w-1/4 text-center">
          Your Memories
        </h3>

        <AddButton
          text="Add Memory"
          size="medium"
          handleClick={() => setModalOpen(true)}
        />
      </div>
      {!memories === 0 ? (
        <h3 className="text-white font-bold">
          You have not added any memories now
        </h3>
      ) : null}

      <div className="flex w-full">
        <div className="w-3/4 mx-auto">
          {memories?.map((item) => (
            <MemoryItem key={item._id} memory={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryList;
