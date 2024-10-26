"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { PiArrowLineLeftBold } from "react-icons/pi";
import Logo from "/public/nehaz-bidyalay-logo.jpg";

const SidePanel = ({ close, isOpen }) => {
  const pathname = usePathname();

  const dropdownRef = useRef(null);

  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div
      className={`md:hidden fixed top-0 left-0 h-screen  w-full bg-black/80 z-[99999999999] duration-500  ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } duration-500  h-full w-full max-w-[360px] bg-white shadow relative overflow-y-auto`}
      >
        <div className="h-[50px] flex items-center pl-5 sticky top-0 bg-white">
          <button
            className="hover:text-primary duration-300"
            onClick={() => close(false)}
          >
            <PiArrowLineLeftBold className="text-2xl" />
          </button>
        </div>
        <div className="w-full sticky top-[50px] bg-white">
          <Image
            src={Logo}
            alt="Nehaj-Bidyaloy Logo"
            priority
            placeholder="blur"
            className="w-[100px] mx-auto block"
          />
          <div className="flex justify-center gap-3 text-white py-5">
            <Link href="#" target="_blank">
              <FaFacebookF className="bg-[#1877F2] p-1.5 size-7 rounded-md text-base hover:bg-primary duration-300" />
            </Link>
            <Link href="#" target="_blank">
              <FaXTwitter className="bg-[#1DA1F2] p-1.5 size-7 rounded-md text-base hover:bg-primary duration-300" />
            </Link>
            <Link href="#" target="_blank">
              <FaInstagram className="bg-[#262626] p-1.5 size-7 rounded-md text-base hover:bg-primary duration-300" />
            </Link>
            <Link href="#" target="_blank">
              <FaYoutube className="bg-[#FF0000] p-1.5 size-7 rounded-md text-base hover:bg-primary duration-300" />
            </Link>
          </div>
        </div>
        <ul className="px-3">
          <li>
            <Link
              onClick={() => close(false)}
              href={"/about-us"}
              className={`${
                pathname === "/about-us" ? "text-primary" : ""
              } block p-2 text-lg font-ador border-b hover:text-primary duration-300`}
            >
              আমাদের কথা
            </Link>
          </li>
          <li>
            <Link
              onClick={() => close(false)}
              href={"/authors"}
              className={`${
                pathname === "/authors" ? "text-primary" : ""
              } block p-2 text-lg font-ador border-b hover:text-primary duration-300`}
            >
              লেখক তালিকা
            </Link>
          </li>
          <li>
            <Link
              onClick={() => close(false)}
              href={"/notice"}
              className={`${
                pathname === "/notice" ? "text-primary" : ""
              } block p-2 text-lg font-ador border-b hover:text-primary duration-300`}
            >
              নোটিশ বোর্ড
            </Link>
          </li>
          <li>
            <button
              onClick={() => setIsCollapse(!isCollapse)}
              className={`text-lg font-ador p-2 gap-3 border-b flex items-center w-full text-start hover:text-primary duration-300 ${
                isCollapse && "text-primary bg-gray-100"
              }`}
            >
              ক্যাটাগরি{" "}
              <IoIosArrowDown
                className={`${
                  isCollapse ? "-rotate-180" : "rotate-0"
                } hover:text-primary transition-transform duration-300`}
              />
            </button>
          </li>
          <li
            ref={dropdownRef}
            style={{
              height: isCollapse ? dropdownRef.current.scrollHeight : 0,
              overflow: "hidden",
              transition: "height 0.3s ease",
            }}
          >
            <ul className="pl-10">
              <li>
                <Link
                  href={"/"}
                  className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b ${
                    pathname === "/404" ? "text-primary" : ""
                  }`}
                >
                  তত্ত্ব
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b ${
                    pathname === "/404" ? "text-primary" : ""
                  }`}
                >
                  ইতিহাস
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b ${
                    pathname === "/404" ? "text-primary" : ""
                  }`}
                >
                  রাজকূট
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b ${
                    pathname === "/404" ? "text-primary" : ""
                  }`}
                >
                  শিক্ষা
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b ${
                    pathname === "/404" ? "text-primary" : ""
                  }`}
                >
                  সংস্কৃতি
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b ${
                    pathname === "/404" ? "text-primary" : ""
                  }`}
                >
                  প্রতিবেশ
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b ${
                    pathname === "/404" ? "text-primary" : ""
                  }`}
                >
                  লিঙ্গ
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b ${
                    pathname === "/404" ? "text-primary" : ""
                  }`}
                >
                  সক্রিয়তা
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b ${
                    pathname === "/404" ? "text-primary" : ""
                  }`}
                >
                  বইঘর
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b ${
                    pathname === "/404" ? "text-primary" : ""
                  }`}
                >
                  বিজ্ঞান
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b ${
                    pathname === "/404" ? "text-primary" : ""
                  }`}
                >
                  গণসংগ্রাম
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b ${
                    pathname === "/404" ? "text-primary" : ""
                  }`}
                >
                  ভিডিও
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b ${
                    pathname === "/404" ? "text-primary" : ""
                  }`}
                >
                  ছবিঘর
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b ${
                    pathname === "/404" ? "text-primary" : ""
                  }`}
                >
                  লেখক
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
