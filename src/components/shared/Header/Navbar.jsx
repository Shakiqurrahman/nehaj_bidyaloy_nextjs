"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { SearchBox } from "./SearchBox";
import SidePanel from "./SidePanel";
import Logo from "/public/nehaz-bidyalay-logo.jpg";

const Navbar = () => {
  const [openSreachBox, setOpenSearchBox] = useState(false);
  const [openSidePanel, setOpenSidePanel] = useState(false);

  useEffect(() => {
    if (openSidePanel) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure scrolling is enabled when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openSidePanel]);

  return (
    <>
      <nav className="bg-white py-3 shadow">
        <div className="max-width flex items-center justify-between">
          <button
            className="block md:hidden hover:text-primary duration-300 text-black"
            onClick={() => setOpenSidePanel(true)}
          >
            <GiHamburgerMenu className="text-xl" />
          </button>
          <Link href={"/"} className="shrink-0">
            <Image
              src={Logo}
              alt="Nehaj Bidyaloy Logo"
              className="w-[100px]"
              priority
            />
          </Link>
          <div className="flex items-center">
            <ul className="hidden md:flex items-center gap-1">
              <li>
                <Link
                  href={"/"}
                  className="px-3 py-2 font-ador hover:text-primary duration-300"
                >
                  তত্ত্ব
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="px-3 py-2 font-ador hover:text-primary duration-300"
                >
                  ইতিহাস
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="px-3 py-2 font-ador hover:text-primary duration-300"
                >
                  রাজকূট
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="px-3 py-2 font-ador hover:text-primary duration-300"
                >
                  শিক্ষা
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="px-3 py-2 font-ador hover:text-primary duration-300"
                >
                  সংস্কৃতি
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="px-3 py-2 font-ador hover:text-primary duration-300"
                >
                  প্রতিবেশ
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="px-3 py-2 font-ador hover:text-primary duration-300"
                >
                  লিঙ্গ
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="px-3 py-2 font-ador hover:text-primary duration-300"
                >
                  সক্রিয়তা
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="px-3 py-2 font-ador hover:text-primary duration-300"
                >
                  বইঘর
                </Link>
              </li>
              <li className="group relative">
                <span className="cursor-pointer px-3 py-2 hover:text-primary duration-300 hover:bg-gray-100 font-ador  block">
                  আরও
                </span>
                <ul className="absolute top-full right-0 w-[200px] py-2 bg-white shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 z-[99]">
                  <li>
                    <Link
                      href={"/"}
                      className="px-3 py-2 block w-full font-ador hover:text-primary hover:pl-5 duration-300"
                    >
                      বিজ্ঞান
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="px-3 py-2 block w-full font-ador hover:text-primary hover:pl-5 duration-300"
                    >
                      গণসংগ্রাম
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="px-3 py-2 block w-full font-ador hover:text-primary hover:pl-5 duration-300"
                    >
                      ভিডিও
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="px-3 py-2 block w-full font-ador hover:text-primary hover:pl-5 duration-300"
                    >
                      ছবিঘর
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="px-3 py-2 block w-full font-ador hover:text-primary hover:pl-5 duration-300"
                    >
                      লেখক
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="relative">
              <button
                className={` size-10 flex items-center justify-center hover:text-primary text-black duration-300 hover:bg-gray-100 ${
                  openSreachBox && "bg-gray-100"
                }`}
                onClick={() => setOpenSearchBox(!openSreachBox)}
              >
                {openSreachBox ? (
                  <ImCross className="text-xs" />
                ) : (
                  <IoSearch className="text-xl" />
                )}
              </button>
              {openSreachBox && <SearchBox />}
            </div>
          </div>
        </div>
      </nav>
      <SidePanel close={setOpenSidePanel} isOpen={openSidePanel} />
    </>
  );
};

export default Navbar;
