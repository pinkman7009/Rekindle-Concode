import React, { useState, useEffect } from "react";
import polygon from "../assets/polygon.svg";
import loginImg from "../assets/loginImage.svg";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/loginActions";

import { Link, useNavigate } from "react-router-dom";

import { PrimaryButton } from "../components/Buttons";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = useSelector((state) => state.token);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = {
      email,
      password,
    };
    dispatch(login(form));
    navigate("/", { replace: false });
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else navigate("/");
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="absolute top-0 right-0">
        <img src={polygon} alt="" />
      </div>

      <div className="absolute top-0 w-3/4 h-3/4 m-32">
        <div className="flex h-full rounded-xl">
          <div className="w-1/2">
            <img src={loginImg} alt="" className="h-full w-full object-fill" />
          </div>
          <div className="p-6 w-1/2 rounded-r-xl bg-black">
            <img src={logo} alt="" className="mx-auto" />
            <form
              className="flex flex-col justify-center items-center"
              onSubmit={onSubmit}
            >
              <p className="text-primary text-xl">Login</p>
              <input
                type="email"
                className="bg-black border-2 border-gray-800 text-white p-4 rounded-lg h-12 w-80 my-12 focus:outline-none"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                className="
                bg-black border-2 border-gray-800 text-white
                p-4 rounded-lg h-12 w-80 my-12 focus:outline-none"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <PrimaryButton text="Sign In" type="submit" />
              <Link to="/signup" relative="path">
                <p className="text-primary mt-3">New User? Register.</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
