"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="bg-[#fbfaf6] py-4">
            <div className="flex justify-between max-width text-white">
                <div className="flex justify-center gap-3">
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
                <nav className="flex gap-4">
                    <Link
                        href={"/amader-kotha"}
                        className={`link ${
                            pathname === "/amader-kotha"
                                ? "text-primary"
                                : ""
                        } text-black hover:text-primary duration-300`}
                    >
                        আমাদের কথা
                    </Link>
                    <Link
                        href={"/লেখক-তালিকা"}
                        className={`link ${
                            pathname === "/লেখক-তালিকা"
                                ? "text-primary"
                                : ""
                        } text-black hover:text-primary duration-300`}
                    >
                        লেখক তালিকা
                    </Link>
                    <Link
                        href={"/নোটিশ-বোর্ড"}
                        className={`link ${
                            pathname === "/নোটিশ-বোর্ড"
                                ? "text-primary"
                                : ""
                        } text-black hover:text-primary duration-300`}
                    >
                        নোটিশ বোর্ড
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
