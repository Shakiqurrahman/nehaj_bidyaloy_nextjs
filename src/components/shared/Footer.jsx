import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "/public/nehaj-logo-transparent.png";

const Footer = () => {
    return (
        <footer className="bg-[#fbfaf6] text-black  mt-10 border-black">
            <div className="flex gap-4 max-width items-center justify-between">
                <div className="text-base mb-3 w-1/5">
                    <Image
                        src={Logo}
                        alt="Nehaj Bidyaloy Logo"
                        className="w-[120px] sm:w-[200px]"
                        priority
                    />
                    <p>
                        যোগাযোগ-এ প্রকাশিত কোনো লেখা, ছবি কিংবা শিল্পকর্ম লেখক
                        অথবা কর্তৃপক্ষের অনুমতি ছাড়া কোথাও প্রকাশ করা অবৈধ৷
                    </p>
                </div>
                <div className="h-[150px] w-1 border-r border-primary-500"></div>
                <div>
                    <nav className="flex gap-10 py-2 text-lg">
                        <Link
                            href={"/about-us"}
                            className={`text-black hover:text-primary duration-300 font-ador`}
                        >
                            পরিচয়
                        </Link>
                        <Link
                            href={"/authors"}
                            className={`text-black hover:text-primary duration-300 font-ador`}
                        >
                            বিজ্ঞপ্তি
                        </Link>
                        <Link
                            href={"/notice"}
                            className={`text-black hover:text-primary duration-300 font-ador`}
                        >
                            যোগাযোগ
                        </Link>
                    </nav>
                </div>
                <div className="h-[150px] w-1 border-r border-primary-500"></div>

                <div className="flex justify-center items-center gap-3 text-white">
                    <Link href="#" target="_blank">
                        <FaFacebookF className="bg-primary p-2 size-8 rounded-md text-base hover:-translate-y-2 hover:opacity-85 duration-300" />
                    </Link>
                    {/* <Link href="#" target="_blank">
                        <FaXTwitter className="bg-[#1DA1F2] p-2 size-8 rounded-md text-base hover:-translate-y-2 hover:opacity-85 duration-300" />
                    </Link> */}
                    <Link href="#" target="_blank">
                        <FaInstagram className="bg-primary p-2 size-8 rounded-md text-base hover:-translate-y-2 hover:opacity-85 duration-300" />
                    </Link>
                    <Link href="#" target="_blank">
                        <FaYoutube className="bg-primary p-2 size-8 rounded-md text-base hover:-translate-y-2 hover:opacity-85 duration-300" />
                    </Link>
                    <div className="h-[40px] w-1 border-r border-primary-500"></div>
                    <Link href="#" target="_blank">
                        <FaFacebookF className="bg-primary p-2 size-8 rounded-md text-base hover:-translate-y-2 hover:opacity-85 duration-300" />
                    </Link>
                    <p className="text-primary font-ador text-xl">
                        নেহাজ বিদ্যালয়
                    </p>
                </div>
            </div>
            <p className="text-center py-3">
                www.nehaj-bidyaloy.com Developed by{" "}
                <Link
                    className="hover:underline hover:text-primary duration-300 font-bold"
                    href="https://flytechit.com"
                    target="_blank"
                >
                    Flytech IT
                </Link>
            </p>
        </footer>
    );
};

export default Footer;
