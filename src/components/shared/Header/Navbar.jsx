"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "/public/nehaz-bidyalay-logo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-white py-3 shadow">
      <div className="max-width flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="Nehaj Bidyaloy Logo"
            className="w-[100px]"
            priority
          />
        </Link>
        <ul className="flex items-center gap-1">
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
          <li className="cursor-pointer px-3 py-2 hover:bg-gray-100 font-ador relative group">
            আরও
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
      </div>
    </nav>
  );
};

export default Navbar;
