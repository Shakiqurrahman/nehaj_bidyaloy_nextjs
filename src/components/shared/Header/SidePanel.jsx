"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const SidePanel = ({ close, isOpen }) => {
  const pathname = usePathname();

  const navLinks = [
    {
      categorySlug: "discipline",
      category: "বিষয়",
      subCategories: [
        {
          subCategorySlug: "thought",
          subCategory: "চিন্তা",
        },
        {
          subCategorySlug: "history-thought",
          subCategory: "ইতিহাস-চিন্তা",
        },
        {
          subCategorySlug: "literary-thought",
          subCategory: "সাহিত্য-চিন্তা",
        },
        {
          subCategorySlug: "art-thought",
          subCategory: "শিল্প-চিন্তা",
        },
        {
          subCategorySlug: "cinema-thought",
          subCategory: "সিনেমা-চিন্তা",
        },
        {
          subCategorySlug: "theology",
          subCategory: "ধর্মতত্ত্ব",
        },
      ],
    },
    {
      categorySlug: "genre",
      category: "ধরণ",
      subCategories: [
        {
          subCategorySlug: "article",
          subCategory: "প্রবন্ধ",
        },
        {
          subCategorySlug: "notes",
          subCategory: "নোটস",
        },
        {
          subCategorySlug: "translation",
          subCategory: "অনুবাদ",
        },
      ],
    },
    {
      categorySlug: "study-circle",
      category: "পাঠচক্র",
    },
    {
      categorySlug: "author",
      category: "লেখক",
    },
  ];

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
        <form className="w-full p-3 relative">
          <input
            type="text"
            placeholder="এখানে লিখুন..."
            className="w-full block border-b-2 border-secondary outline-none p-3"
          />
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 right-5"
          >
            <IoSearch className="text-2xl text-secondary" />
          </button>
        </form>
        <ul className="px-3">
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
