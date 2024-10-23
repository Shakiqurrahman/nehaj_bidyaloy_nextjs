import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-10">
            <div className="max-width text-center text-base mb-3">
                <p className="mb-2">
                    স্বত্ব © ২০২৪, যোগাযোগ | ই মেইল :{" "}
                    <span className="text-[#e27313]">
                        jogajogbd.org@gmail.com
                    </span>
                </p>
                <p>
                    যোগাযোগ-এ প্রকাশিত কোনো লেখা, ছবি কিংবা শিল্পকর্ম লেখক অথবা
                    কর্তৃপক্ষের অনুমতি ছাড়া কোথাও প্রকাশ করা অবৈধ ৷
                </p>
            </div>
            <div className="mb-10 flex justify-center gap-2">
                <Link href="#" target="_blank">
                    <FaFacebookF className="bg-[#1877F2] p-2 size-8 rounded-full text-base hover:-translate-y-2 hover:opacity-85 duration-300" />
                </Link>
                <Link href="#" target="_blank">
                    <FaXTwitter className="bg-[#1DA1F2] p-2 size-8 rounded-full text-base hover:-translate-y-2 hover:opacity-85 duration-300" />
                </Link>
                <Link href="#" target="_blank">
                    <FaInstagram className="bg-[#262626] p-2 size-8 rounded-full text-base hover:-translate-y-2 hover:opacity-85 duration-300" />
                </Link>
                <Link href="#" target="_blank">
                    <FaYoutube className="bg-[#FF0000] p-2 size-8 rounded-full text-base hover:-translate-y-2 hover:opacity-85 duration-300" />
                </Link>
            </div>
            <p className="text-center bg-primary py-3">
                www.nehaj-bidyaloy.com Developed by{" "}
                <Link
                    className="hover:underline hover:text-[#0ef] duration-300 font-bold"
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
