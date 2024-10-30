"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";

import { usePathname } from "next/navigation";
import SidePanel from "./SidePanel";
import Logo from "/public/nehaz-bidyalay-logo.jpg";

const Navbar = () => {
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
          <Link href={"/"} className="shrink-0">
            <Image
              src={Logo}
              alt="Nehaj Bidyaloy Logo"
              className="w-[100px] sm:w-[170px]"
              priority
            />
          </Link>
          <nav className="flex md:hidden gap-4 py-2 sm:text-lg ml-auto mr-3">
            <Link
              href={"/about-us"}
              className={`${
                pathname === "/about-us" ? "text-primary" : ""
              } hover:text-primary duration-300 font-ador`}
            >
              পরিচয়
            </Link>
            <Link
              href={"/notice"}
              className={`${
                pathname === "/notice" ? "text-primary" : ""
              } hover:text-primary duration-300 font-ador`}
            >
              বিজ্ঞপ্তি
            </Link>
            <Link
              href={"/contact"}
              className={`${
                pathname === "/contact" ? "text-primary" : ""
              } hover:text-primary duration-300 font-ador`}
            >
              যোগাযোগ
            </Link>
          </nav>
          <button
            className="block md:hidden hover:text-primary duration-300 text-black"
            onClick={() => setOpenSidePanel(true)}
          >
            <GiHamburgerMenu className="text-xl" />
          </button>
          <div className="flex items-center">
            <ul className="hidden md:flex items-center gap-1">
              {navLinks?.map((links, index) => (
                <li key={index} className="group relative">
                  <Link
                    href={`/${links?.categorySlug}`}
                    className={`${
                      pathname === `/${links?.categorySlug}`
                        ? "text-primary"
                        : ""
                    } px-3 py-2 text-lg font-ador hover:bg-gray-100 flex items-center justify-between gap-2 hover:text-primary duration-300`}
                  >
                    {links?.category}{" "}
                    {links?.subCategories?.length > 0 && (
                      <MdKeyboardArrowDown />
                    )}
                  </Link>
                  {links?.subCategories?.length > 0 && (
                    <ul className="absolute top-full right-0 w-[200px] py-2 bg-white shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 z-[99]">
                      {links?.subCategories?.map((subLinks, index) => (
                        <li key={index}>
                          <Link
                            href={`/${subLinks?.subCategorySlug}`}
                            className={`${
                              pathname === `/${subLinks?.subCategorySlug}`
                                ? "text-primary"
                                : ""
                            } px-3 text-lg py-2 block w-full font-ador hover:text-primary hover:pl-5 duration-300`}
                          >
                            {subLinks?.subCategory}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <SidePanel close={setOpenSidePanel} isOpen={openSidePanel} />
    </>
  );
};

export default Navbar;
