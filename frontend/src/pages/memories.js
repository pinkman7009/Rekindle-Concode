import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "../components/Container";
import AddMemoryModal from "../components/memories/AddMemoryModal";
import MemoryList from "../components/memories/MemoryList";
import { getMemories } from "../store/actions/memoryActions";

const Memories = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const memories = useSelector((state) => state.memories);

  const dispatch = useDispatch();

  // const memories = [
  //   {
  //     id: 1,
  //     name: "18th Birthday",
  //     location: "Home",
  //     description:
  //       "Today, on my 18th birthday, we went to my favourite restaurant and had pizza. I invited my friends over, and we had a lot of fun. I got a lot of gifts, but my favourite one was a Playstation 5 by my dad.",
  //   },
  //   {
  //     id: 2,
  //     name: "Hackathon Victory",
  //     location: "IIT Dhanbad",
  //     description:
  //       "My team and I won the Smart India Hackathon 2022, held at IIT ISM Dhanbad. We learnt a lot, and had a lot of fun. It was definitely one of the best experiences of my life.",
  //   },
  //   {
  //     id: 3,
  //     name: "Board Exams",
  //     location: "School",
  //     description:
  //       "My Board exams just ended today, and I am in a party mood now.",
  //   },
  // ];

  useEffect(() => {
    dispatch(getMemories());
  }, []);

  return (
    <Container>
      <MemoryList setModalOpen={setModalOpen} memories={memories} />
      {modalOpen && (
        <AddMemoryModal
          setModalOpen={setModalOpen}
          //   memory={memory}
          //   onChange={onChange}
          //   handleSubmit={handleSubmit}
        />
      )}
    </Container>
  );
};

export default Memories;
