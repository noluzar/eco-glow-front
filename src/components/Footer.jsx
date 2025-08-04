import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdLocationOn, MdOutlinePhone, MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="flex flex-col p-4 md:p-0 items-start md:flex-row md:justify-between bg-[#f1e2c2] md:items-center">
      <div className="flex flex-col md:flex-row items-start md:space-x-8 space-y-4 md:my-4 text-sm md:text-base">
        <div className="flex items-start space-x-2">
          <MdLocationOn className="text-[#afad55] md:text-3xl" />
          <div>
            <p>98 Juta Street</p>
            <p>Tshomologong Precinct, JHB</p>
            <p>2001</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <MdOutlinePhone className="text-[#afad55] md:text-3xl" />
          <p>+27 71119995</p>
        </div>
        <div className="flex items-center space-x-2">
          <MdEmail className="text-[#afad55] md:text-3xl" />
          <a href="mailto:ecoglow@email.com">
            ecoglow@email.com
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        <a href="#">
          <FaFacebookSquare className="text-[#afad55] text-3xl" />
        </a>
        <a href="#">
          <FaInstagram className="text-[#afad55] text-3xl" />
        </a>
        <a href="#">
          <FaSquareXTwitter className="text-[#afad55] text-3xl" />
        </a>
      </div>
    </div>
  );
};
