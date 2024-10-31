import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "/public/nehaj-logo-transparent.png";

const Footer = () => {
    return (
        <footer className="bg-[#fbfaf6] text-black  mt-10 border-black">
            <div className="flex flex-col md:flex-row gap-4 max-width md:items-center justify-between pt-8 md:pt-20">
                <div className="text-base md:w-1/5">
                    <Image
                        src={Logo}
                        alt="Nehaj Bidyaloy Logo"
                        className="w-[105px] sm:w-[160px] md:mb-3"
                        priority
                    />
                    <p className="block mt-4">
                    নেহাজ-এ প্রকাশিত কোনো লেখা, ছবি কিংবা শিল্পকর্ম লেখক
                        অথবা কর্তৃপক্ষের অনুমতি ছাড়া কোথাও প্রকাশ করা অবৈধ৷
                    </p>
                </div>
                <div className="h-[150px] w-1 border-r border-primary-500 hidden md:block"></div>
                
                <div>
                    <nav className="flex flex-row gap-10 py-2 text-lg">
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
                <div className="h-[150px] w-1 border-r border-primary-500 hidden md:block"></div>
                <div className="h-1 w-full border-t border-primary-500 md:hidden block"></div>

                <div className="flex justify-center items-center gap-3 text-white">
                    <Link href="#" target="_blank">
                        <FaFacebookF className="bg-primary p-2 size-8 rounded-md text-base hover:-translate-y-2 hover:opacity-85 duration-300" />
                    </Link>
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
            <p className="text-center py-3 mt-10 border-t ">
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
