import React, { useState } from "react";
import { Input } from "../components";
import image from "../assets/blockchain (1).png";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeIn,
  footerVariants,
  staggerChildren,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../Utils/motion";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const Submit = () => {
    if (!name || !email) return;

    navigate("/EthHome", { state: { name: name } });
  };
  return (
    <motion.div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" "
    >
      <div className="sm:flex justify-between text-white sm:p-10 p-5">
        <div className="p-5">
          <img src={image} className=" image w-full mt-20 " />
        </div>

        <div className="sm:w-[40%] w-full sm:mt-10">
          <h1 className="text-[40px] mt-20 font-500 font-bold">
            Enter Details
          </h1>

          <Input
            placeholder="Enter Your Name"
            type="text"
            name="name"
            handleChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Enter Your Email"
            type="e-mail"
            name="email"
            handleChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex w-[100%] justify-between mt-10">
            <button
              className="button text-black px-10 py-3 rounded-[10px]"
              onClick={Submit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Auth;
