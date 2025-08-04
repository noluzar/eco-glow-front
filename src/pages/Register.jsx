// import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaCheckSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';


export const Register = () => {
  
  return (
    <div className="flex items-center justify-between px-2 pb-4">
      <div></div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col items-center md:block space-y-2 md:space-y-8">
          <h1 className="md:text-[60px] md:pt-14 pt-20 text-xl font-bold">Create an account</h1>
          <div className="flex gap-4 md:text-lg">
            <p>Already have an account?</p>
            <Link to="/login" className="text-blue-600 underline">
              Log in
            </Link>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex justify-between space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="p-3 w-full border outline-none rounded"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              className="p-3 w-full border outline-none rounded"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="p-3 border outline-none rounded"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="p-3 border outline-none rounded"
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="p-3 border outline-none rounded"
            required
          />
          <div className="flex items-center gap-2">
            <FaCheckSquare />
            <p>
              I agree to the{" "}
              <a href="#" className="text-blue-600 underline">
                Terms & Conditions
              </a>
            </p>
          </div>
          <button
            type="submit"
            className="border-2 border-none bg-[#afad55] p-2 text-white"
          >
            Create account
          </button>
        </form>
        <div className="flex items-center gap-2 w-full justify-center md:py-4">
          <hr className="" />
          <p>Or Register with</p>
          <hr className="" />
        </div>
        <div className="flex space-x-2 md:pb-4">
          <button className="flex items-center gap-2 border-2 border-black p-2 w-full justify-center text-lg">
            <FcGoogle className="size-7" />
            Google
          </button>
          <button className="flex items-center gap-2 border-2 border-black p-2 w-full justify-center text-lg">
            <FaApple className="size-7" />
            Apple
          </button>
        </div>
      </div>
      <div className="w-[50%] hidden md:block">
        <img src="./facee.jpg" alt="Skin" className="w-full h-[100vh] object-cover" />
      </div>
    </div>
  );
};
