"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { SearchBox } from "./SearchBox";

const Header = () => {
  const pathname = usePathname();
  const [openSreachBox, setOpenSearchBox] = useState(false);

  return (
    <header className="bg-[#fbfaf6] hidden sm:block">
      <div className="flex justify-between items-center max-width">
        <nav className="flex gap-4 py-2 text-lg">
          <Link
            href={"/about-us"}
            className={`${
              pathname === "/about-us" ? "text-primary" : ""
            } hover:text-primary duration-300 font-ador`}
          >
            পরিচয়
          </Link>
          <Link
            href={"/authors"}
            className={`${
              pathname === "/authors" ? "text-primary" : ""
            } hover:text-primary duration-300 font-ador`}
          >
            বিজ্ঞপ্তি
          </Link>
          <Link
            href={"/notice"}
            className={`${
              pathname === "/notice" ? "text-primary" : ""
            } hover:text-primary duration-300 font-ador`}
          >
            যোগাযোগ
          </Link>
        </nav>
        <div className="relative">
          <button
            className={`z-10 bg-[#fbfaf6] relative size-10 flex items-center justify-center hover:text-primary text-black duration-300`}
            onClick={() => setOpenSearchBox(!openSreachBox)}
          >
            {openSreachBox ? (
              <ImCross className="text-xs" />
            ) : (
              <IoSearch className="text-xl" />
            )}
          </button>
          <SearchBox isOpen={openSreachBox} />
        </div>
      </div>
    </header>
  );
};

export default Header;
