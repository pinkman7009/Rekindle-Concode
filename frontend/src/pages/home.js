import { useEffect } from "react";
import { useSelector } from "react-redux";
import header from "../assets/header.svg";

import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token]);

  return (
    <div>
      <img src={header} alt="" className="w-full" />
      <Container>
        <h2 className="text-[3rem] text-white font-bold">
          Welcome to <span className="text-primary">Rekindle,</span>
        </h2>
        <p className="text-white text-[1.5rem] mt-3 font-light">
          Collect memories, not things
        </p>

        <h3 className="text-primary text-3xl font-bold mt-20">Our Servies</h3>
        <div className="grid grid-cols-4 gap-10 text-white mt-6">
          <div className=" border-2 border-primary rounded-lg p-3 h-auto text-center">
            <p className="text-2xl font-bold text-center mb-3 text-primary">
              Memories
            </p>
            <p className="text-white">
              Add memories to your daily diary and relive those moments again.
            </p>
          </div>
          <div className=" border-2 border-primary rounded-lg p-3 h-auto text-center">
            <p className="text-2xl font-bold text-center mb-3 text-primary">
              Personality Questions
            </p>
            <p className="text-white">
              Answer questions to help us assess your personality, which helps
              us create your digital bot.
            </p>
          </div>
          <div className=" border-2 border-primary rounded-lg p-3 h-auto text-center">
            <p className="text-2xl font-bold text-center mb-3 text-primary">
              Digital Clone Bot
            </p>
            <p className="text-white">
              Live forever digitally. Make your customized digital version,
              trained over various datasets, to mimic your personality.
            </p>
          </div>
          <div className=" border-2 border-primary rounded-lg p-3 h-auto text-center">
            <p className="text-2xl font-bold text-center mb-3 text-primary">
              Geo Locked Vault
            </p>
            <p className="text-white">
              Take a trip down memory lane, by revisiting the places you've been
              to and have an attachment for.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
