import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-10">
            <div className="max-width text-center text-base mb-10">
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
