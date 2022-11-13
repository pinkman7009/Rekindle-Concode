import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { getMemories } from "../../store/actions/memoryActions";

import { PrimaryButton } from "../Buttons";

const AddMemoryModal = ({ setModalOpen }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const reqBody = {
      name,
      location,
      description,
    };

    const response = await axios.post(
      "https://rekindle.herokuapp.com/api/memories",
      reqBody,
      { headers: { "Content-Type": "application/json" } }
    );

    setModalOpen(false);

    dispatch(getMemories());
  };

  return (
    <div className="w-full h-full top-0 left-0 fixed z-10 bg-modal flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-1/2 relative">
        <span
          className="absolute top-3 right-3 font-bold text-black text-3xl cursor-pointer"
          onClick={() => setModalOpen(false)}
        >
          &times;
        </span>
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-purple-dark font-bold text-xl">Add a Memory</h3>
          <input
            name="name"
            type="text"
            className="rounded-md p-3 w-2/3 my-6 bg-gray-200"
            placeholder="Memory Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="location"
            type="text"
            className="rounded-md p-3 w-2/3 my-6 bg-gray-200"
            placeholder="Memory Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            name="date"
            type="date"
            className="rounded-md p-3 w-2/3 my-6 bg-gray-200"
            placeholder="Date"
          />
          <textarea
            name="description"
            placeholder="Memory Description"
            className="my-6 h-80 p-3 w-2/3 rounded-lg border-2  bg-gray-200 text-black"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <PrimaryButton text="Add" handleClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AddMemoryModal;
