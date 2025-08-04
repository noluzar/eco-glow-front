import { FcGoogle } from "react-icons/fc";
import { FaApple, FaCheckSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Login = () => {

  return (
    <div className="flex items-center md:space-x-[10%] w-full p-2 pt-20 md:pt-0 pb-4">
      <div className="hidden md:block">
        <img src="./Green.jpg" alt="Skin" className="w-full h-[100vh]" />
      </div>
      <div className="md:w-[50%] flex flex-col gap-2 md:space-y-4 space-y-2 w-full">
        <div className='flex flex-col items-center md:items-start space-y-2 md:space-y-8'>
          <h1 className="md:text-[60px] text-xl font-bold">Login to account</h1>
          <div className="flex md:gap-4 md:text-lg gap-2">
            <p>Dont have an account?</p>
            <Link to="/register" className="text-blue-600 underline">
              Sign Up
            </Link>
          </div>
        </div>
        <form className="flex flex-col md:gap-4 gap-2 md:w-[30vw] w-full">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded outline-none w-full"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="p-3 border rounded outline-none w-full"
            required
          />
          <div className="flex items-center gap-2 py-2">
            <FaCheckSquare />
            <p>
              I agree to the{" "}
              <a href="#" className="text-blue-600 underline">
                Terms & Conditions
              </a>
            </p>
          </div>
          <button type="submit" className="border-none bg-[#afad55] text-white p-2 md:w-[30vw] w-full">
            Login
          </button>
        </form>
        <div className="flex gap-2 md:w-[30vw] justify-between p-2">
          <hr />
          <p>Or login with</p>
          <hr />
        </div>
        <div className="flex space-x-2 w-full">
          <button className="flex items-center gap-2 border-2 border-black p-2 md:w-[15vw] justify-center text-lg w-full">
            <FcGoogle className="size-7" />
            Google
          </button>
          <button className="flex items-center gap-2 border-2 border-black p-2 md:w-[15vw] justify-center text-lg w-full">
            <FaApple className="size-7" />
            Apple
          </button>
        </div>
      </div>
    </div>
  );
};
