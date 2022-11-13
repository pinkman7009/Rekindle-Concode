/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { logout } from "../store/actions/loginActions";
import { useDispatch } from "react-redux";

const Navbar = ({ path }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center p-6 text-white">
      <img src={logo} alt="" className="w-64 h-16" />

      <ul className="flex justify-between items-center w-1/3">
        <Link to="/">
          {path === "/" ? (
            <li className="cursor-pointer bg-white p-3 rounded-full text-black font-bold w-32 text-center">
              Home
            </li>
          ) : (
            <li className="cursor-pointer transition-all  ease-in-out hover:border-b-2 font-bold">
              Home
            </li>
          )}
        </Link>
        <Link to="/memories">
          {path === "/memories" ? (
            <li className="cursor-pointer bg-white p-3 rounded-full text-black font-bold w-auto text-center">
              My Memories
            </li>
          ) : (
            <li className="cursor-pointer transition-all  ease-in-out hover:border-b-2 font-bold">
              My Memories
            </li>
          )}
        </Link>

        <Link to="/chatbot">
          {path === "/chatbot" ? (
            <li className="cursor-pointer bg-white p-3 rounded-full text-black font-bold w-auto text-center">
              Digital Chatbot
            </li>
          ) : (
            <li className="cursor-pointer transition-all  ease-in-out hover:border-b-2 font-bold">
              Digital Chatbot
            </li>
          )}
        </Link>

        <Link to="/questions">
          {path === "/questions" ? (
            <li className="cursor-pointer bg-white p-3 rounded-full text-black font-bold w-auto text-center">
              Questions
            </li>
          ) : (
            <li className="cursor-pointer transition-all  ease-in-out hover:border-b-2 font-bold">
              Questions
            </li>
          )}
        </Link>

        <div className="relative group">
          <button>
            <span className="font-bold">Hi, Soumik</span>
          </button>
          <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
            <div className=" bg-white text-primary font-bold rounded-md shadow-lg text-sm text-purple-dark">
              <Link to="login">
                <p
                  className="cursor-pointer p-2 hover:bg-primary hover:rounded-md hover:text-white transition-all ease-in"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Logout
                </p>
              </Link>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
