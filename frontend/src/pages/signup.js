import React, { useState } from "react";
import polygon from "../assets/polygon.svg";
import loginImg from "../assets/loginImage.svg";
import logo from "../assets/logo.png";
import { signup } from "../store/actions/registerActions";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { PrimaryButton } from "../components/Buttons";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { name, email, password } = form;

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(form));
    navigate("/", { replace: false });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="absolute top-0 right-0">
        <img src={polygon} alt="" />
      </div>

      <div className="absolute top-0 w-3/4 h-3/4 m-32">
        <div className="flex rounded-xl h-auto">
          <div className="w-1/2">
            <img src={loginImg} alt="" className="h-full w-full object-fill" />
          </div>
          <div className="p-6 w-1/2 rounded-r-xl bg-black">
            <img src={logo} alt="" className="mx-auto" />
            <form
              className="flex flex-col justify-center items-center mt-20"
              onSubmit={onSubmit}
            >
              <p className="text-primary text-xl">Signup</p>
              <input
                type="text"
                className="bg-black border-2 border-gray-800 text-white p-4 rounded-lg h-12 w-80 my-6 focus:outline-none"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
              />
              <input
                type="email"
                className="bg-black border-2 border-gray-800 text-white p-4 rounded-lg h-12 w-80 my-6 focus:outline-none"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
              />
              <input
                type="password"
                className="
                bg-black border-2 border-gray-800 text-white
                p-4 rounded-lg h-12 w-80 my-6 focus:outline-none"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
              />
              <input
                type="password"
                className="
                bg-black border-2 border-gray-800 text-white
                p-4 rounded-lg h-12 w-80 my-6 focus:outline-none"
                placeholder="Confirm Password"
              />
              <PrimaryButton text="Sign Up" type="submit" />
              <Link to="/login" relative="path">
                <p className="text-primary mt-3">Existing User? Login.</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
