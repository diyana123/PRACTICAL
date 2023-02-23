import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { MdPhoneAndroid } from "react-icons/md";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="">
              <img
                src="//s.shangri-la.com/sl-fe-hotel-prod/img/shangrila_en2021.a24c901.png"
                className="w-[190px] h-[40px]"
              />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-800 text-sm font font-semibold ">
                <a href="">
                  <BsPerson className="inline-block mr-3 text-lg" />
                  Sign In <span className=" ml-2 border-r-2 "></span>
                </a>
              </li>
              <li className="text-gray-800 text-sm font-semibold">
                <a href="">
                  Join Now <span className=" ml-2 border-r-2 "></span>
                </a>
              </li>
              <li className="text-gray-800 text-sm font-semibold">
                <a href="">
                  Find Reservations <span className=" ml-2 border-r-2 "></span>
                </a>
              </li>
              <li className="text-gray-800 text-sm font-semibold">
                <a href="">
                  <TfiWorld className="inline-block mr-3 text-lg" />
                  English <span className=" ml-2 border-r-2 "></span>
                </a>
              </li>
              <li className="text-gray-800 text-sm font-semibold">
                <a href="">
                  LKR <span className=" ml-3 border-r-2 "></span>
                </a>
              </li>
              <li className="text-gray-800 ">
                <a href="">
                  <MdPhoneAndroid className="inline-block text-base" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
