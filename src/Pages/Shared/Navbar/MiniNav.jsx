import React, { useContext } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaRegClock,
  FaRegUser,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const MiniNav = () => {
  const { users,signOut } = useContext(AuthContext);

  const handleSignOut = ()=>{
    signOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <div className="hidden md:flex lg:flex justify-between px-2 ">
      <div className="lg:flex gap-5">
        <div>
          <a className="flex items-center hover:text-[#FD7800]">
            <FaEnvelope className="mr-2"></FaEnvelope>tahiyaitsolution@gmail.com
          </a>
        </div>
        <div>
          <a className="flex items-center">
            <FaRegClock className="mr-2"></FaRegClock>Mon – Sat 8:00 – 18:00,
            Sunday-CLOSED
          </a>
        </div>
      </div>
      <div>
        <div className="flex gap-5">
          {/* <li className="flex items-center border-r-2 pr-2 hover:text-[#FD7800]">
            <FaInfoCircle className="mr-2"></FaInfoCircle>Need Help
          </li> */}
          {users ? (
            <btn onClick={handleSignOut} className="flex items-center border-r-2 pr-2 hover:text-[#FD7800]">Signout</btn>
          ) : (
            <li className="flex items-center border-r-2 pr-2">
              <FaRegUser className="mr-2"></FaRegUser>
              <Link to="/signIn" className="hover:text-[#FD7800]">
                Sign In
              </Link>{" "}
              /{" "}
              <Link to="/signUp" className="hover:text-[#FD7800]">
                Sign Up
              </Link>
            </li>
          )}

          <li className="flex items-center border-r-2 pr-2 hover:text-[#138BEE]">
            <a
              href="https://www.facebook.com/Tahiya.it/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="mr-2"></FaFacebook>
            </a>
          </li>
          <li className="flex items-center border-r-2 pr-2 hover:text-[#0DC143]">
            <a href="https://wa.me/+8801945004592" target="_blank">
              <FaWhatsapp className="mr-2"></FaWhatsapp>
            </a>
          </li>
          <li className="flex items-center hover:text-[#D51A1B]">
            <a href="https://maps.app.goo.gl/vhg7gCZYbBKdnYqJ7" target="_blank">
              <FaLocationDot className="mr-2"></FaLocationDot>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default MiniNav;
